import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  name: string;
  constructor() { }

  ngOnInit() {
    this.name = localStorage.getItem('name');
  }

}
