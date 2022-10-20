import { Component, OnInit } from '@angular/core';
import { PickupCallCardComponent } from 'src/app/commponents/pickup-call-card/pickup-call-card.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public hasHeader = true;
  public hasFooter = false;

  constructor() { }

  ngOnInit() {
  }

}
