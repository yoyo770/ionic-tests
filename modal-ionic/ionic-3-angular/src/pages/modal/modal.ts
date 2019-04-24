import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  items: Array<string> = [];
  nbItems = 2000;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {

  }

  ngOnInit() {
    for (let i = 0; i < this.nbItems; i++) {
      this.items[i] = 'item ' + i;
    }
  }

  ionViewDidEnter() {
    console.log('Time to open modal with 1000 items:', new Date().getTime() - this.navParams.get('timeClickButtonOpenModal'));
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}

