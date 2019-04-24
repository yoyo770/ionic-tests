import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  items: Array<string> = [];
  nbItems = 1000;

  constructor(private modalController: ModalController, private navParams: NavParams) { }

  ngOnInit() {
    for (let i = 0; i < this.nbItems; i++) {
      this.items[i] = 'item ' + i;
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }

  ionViewDidEnter() {
    console.log('Time to open modal with 1000 items:', new Date().getTime() - this.navParams.get('timeClickButtonOpenModal'));
  }
}
