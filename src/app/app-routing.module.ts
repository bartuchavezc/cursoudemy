import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PagesComponent } from './pages/pages.component';
import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
  //  path: '/dashboard', PagesRouting
  //  path: 'auth', AuthRouting
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
