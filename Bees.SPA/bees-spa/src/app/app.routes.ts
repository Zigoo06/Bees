import { Routes } from '@angular/router';
import { RegisterComponent } from './home/components/register/register.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HomePageComponent } from './home/components/home-page/home-page.component';
import { LoginComponent } from './home/components/login/login.component';

export const routes: Routes = [
    {
        path:"home",
        component: HomePageComponent
    },
    {
        path:"register",
        component: RegisterComponent
    },
    {
        path:"login",
        component: LoginComponent
    },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
