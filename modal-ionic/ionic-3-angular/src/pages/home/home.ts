import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController) {

  }

  openModal() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }
}
