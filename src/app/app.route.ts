import { LoginComponent } from './components/login/login.component';
import { SuccessComponent } from './components/success/success.component';
import {Router, Route} from '@angular/router'

export const ROUTES : Route[]=[
    {
        path:'', redirectTo:'/login', pathMatch:'full'
    },
    {
        path:'login', component: LoginComponent
    },
    {
        path:'success', component: SuccessComponent
    },// Handle all other routes   

]