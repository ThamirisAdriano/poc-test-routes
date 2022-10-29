import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) }, { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) }, { path: 'series', loadChildren: () => import('./pages/admin/modules/series/series.module').then(m => m.SeriesModule) }, { path: 'login', loadChildren: () => import('./pages/auth/modules/login/login.module').then(m => m.LoginModule) }, { path: 'cadastro', loadChildren: () => import('./pages/auth/modules/cadastro/cadastro.module').then(m => m.CadastroModule) }, { path: 'forgot', loadChildren: () => import('./pages/auth/modules/forgot/forgot.module').then(m => m.ForgotModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
