<?php

namespace App\Http\Controllers;

use App\Models\StockMovement;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StockMovementController extends Controller
{
    public function index()
    {
        return StockMovement::with(['product', 'user'])->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'product_id' => 'required|exists:products,id',
            'type' => 'required|in:in,out',
            'quantity' => 'required|integer|min:1',
            'note' => 'nullable|string'
        ]);

        $validated['user_id'] = Auth::id();

        $movement = StockMovement::create($validated);

        // Atualiza estoque do produto
        $product = Product::find($validated['product_id']);
        if ($validated['type'] === 'in') {
            $product->stock_quantity += $validated['quantity'];
        } else {
            $product->stock_quantity -= $validated['quantity'];
        }
        $product->save();

        return $movement->load(['product', 'user']);
    }

    public function show(StockMovement $stockMovement)
    {
        return $stockMovement->load(['product', 'user']);
    }

    public function update(Request $request, StockMovement $stockMovement)
    {
        return response()->json(['message' => 'Not allowed'], 405);
    }

    public function destroy(StockMovement $stockMovement)
    {
        $stockMovement->delete();
        return response()->noContent();
    }
}
