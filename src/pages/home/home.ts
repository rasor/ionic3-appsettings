import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  envirName: string;

  constructor(public navCtrl: NavController) {
    this.envirName = process.env.ENVIR_NAME;
  }
}
