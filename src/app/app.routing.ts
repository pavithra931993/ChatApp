import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }  from '../app/login/login.component';
import { SignupComponent }  from '../app/signup/signup.component';
import { ChatComponent }  from '../app/chat/chat.component';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
    {
    path: 'chat',
    component: ChatComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

