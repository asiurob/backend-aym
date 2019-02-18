import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './header/header.component';
import { PanelComponent } from './panel/panel.component';
import { CompaniesComponent } from './companies/companies.component';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    HeaderComponent,
    PanelComponent,
    CompaniesComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class MainModule { }
