import { AuthGuard } from './guards/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then(mod => mod.CategoryModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'transaction',
    loadChildren: () => import('./transaction/transaction.module').then(mod => mod.TransactionModule),
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
