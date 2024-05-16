import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { RegisterComponent } from './pages/components/register/register.component';
import { LoginComponent } from './pages/components/login/login.component';
import { HomePageComponent } from './pages/components/home-page/home-page.component';

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
