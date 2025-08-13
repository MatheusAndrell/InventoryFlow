<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Roles
        $adminRole = Role::create(['name' => 'admin']);
        $managerRole = Role::create(['name' => 'manager']);
        $employeeRole = Role::create(['name' => 'employee']);

        // Permissions
        $permissions = [
            // Users
            'get_users',
            'create_users',
            'edit_users',
            'delete_users',
            
            // Categories
            'get_categories',
            'create_categories',
            'edit_categories',
            'delete_categories',
            // Suppliers
            'get_suppliers',
            'create_suppliers',
            'edit_suppliers',
            'delete_suppliers',
            // Products
            'get_products',
            'create_products',
            'edit_products',
            'delete_products',
            // Stock
            'get_stock',
            'entry_stock',
            'out_stock',
        ];

        foreach ($permissions as $perm) {
            Permission::create(['name' => $perm]);
        }

        // Assign Permissions to Roles
        // Admin: todas as permissões
        $adminRole->givePermissionTo(Permission::all());

        // Manager: pode criar, editar e ver produtos e categorias, gerenciar estoque parcialmente
        $managerRole->givePermissionTo([
            'get_categories',
            'create_categories',
            'edit_categories',
            'get_suppliers',
            'get_products',
            'create_products',
            'edit_products',
            'get_stock',
            'entry_stock',
            'out_stock'
        ]);

        // Employee: apenas visualizar e movimentar estoque
        $employeeRole->givePermissionTo([
            'get_categories',
            'get_suppliers',
            'get_products',
            'get_stock',
            'entry_stock',
            'out_stock'
        ]);

        // Users
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'cpf' => '00000000000',
            'password' => Hash::make('admin'),
        ])->assignRole($adminRole);

        User::factory()->create([
            'name' => 'Manager',
            'email' => 'manager@manager.com',
            'cpf' => '11111111111',
            'password' => Hash::make('manager'),
        ])->assignRole($managerRole);

        User::factory()->create([
            'name' => 'Employee',
            'email' => 'employee@employee.com',
            'cpf' => '22222222222',
            'password' => Hash::make('employee'),
        ])->assignRole($employeeRole);
    }
}
