import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance-box',
  templateUrl: './balance-box.component.html',
  styleUrls: ['./balance-box.component.scss'],
})
export class BalanceBoxComponent  implements OnInit {
@Input() balance: any;
  constructor() { }

  ngOnInit() {}

}
