import { Icon } from '@iconify/vue'


// Atoms
import Input from '@/components/atoms/Input.vue'
import Button from '@/components/atoms/Button.vue'
import Checkbox from '@/components/atoms/Checkbox.vue'
import TableCellAvatar from '@/components/atoms/TableCellAvatar.vue'
import TableCellTeam from '@/components/atoms/TableCellTeam.vue'
import TableCellStatus from '@/components/atoms/TableCellStatus.vue'
import TableHeader from '@/components/atoms/TableHeader.vue'

// Molecules
import SocialLoginButtons from '@/components/molecules/SocialLoginButtons.vue'
import AuthDivider from '@/components/molecules/AuthDivider.vue'
import TableRow from '@/components/molecules/TableRow.vue'

//Organisms
import SignInForm from '@/components/organisms/SignInForm.vue'
import Table from '@/components/organisms/Table.vue'

//Layouts
import FullScreenLayout from '@/components/layout/FullScreenLayout.vue'


export default {
  install(app) {
    app.component('Icon', Icon)

    // ATOMS
    app.component('Input', Input)
    app.component('Button', Button)
    app.component('Checkbox', Checkbox)
    app.component('TableCellAvatar', TableCellAvatar)
    app.component('TableCellTeam', TableCellTeam)
    app.component('TableCellStatus', TableCellStatus)
    app.component('TableHeader', TableHeader)

    // MOLECULES
    app.component('SocialLoginButtons', SocialLoginButtons)
    app.component('AuthDivider', AuthDivider)
    app.component('TableRow', TableRow)

    // ORGANISMS
    app.component('SignInForm', SignInForm)
    app.component('Table', Table)


    //LAYOUTS
    app.component('FullScreenLayout', FullScreenLayout)
  }
}
