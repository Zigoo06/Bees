import { Routes } from '@angular/router';
import { HomePageComponent } from './home/components/home-page/home-page.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'acasa',
    component: HomePageComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: '/acasa', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
