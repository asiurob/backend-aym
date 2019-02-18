import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService,    LoginGuardGuard,
         AccountService
} from './service.index';


@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  providers: [
    LoginService,    LoginGuardGuard,
    AccountService
  ]
})
export class ServiceModule { }
