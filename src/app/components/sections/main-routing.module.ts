import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGuardGuard } from '../../services/guards/login-guard.guard';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main.component';
import { NotFoundComponent } from '../common/not-found/not-found.component';
import { CompaniesComponent } from './companies/companies.component';
import { AccountComponent } from '../common/account/account.component';




const routes: Routes = [
  {
    path: '', component: MainComponent,
    canActivate: [ LoginGuardGuard ],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'account', component: AccountComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
