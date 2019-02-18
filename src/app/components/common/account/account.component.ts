import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styles: []
})
export class AccountComponent implements OnInit {

  data: any;
  constructor(
    public _account: AccountService
  ) { }

  ngOnInit() {
    this._account.accountData()
    .subscribe( (res: any) => this.data = res.data)
  }

}
