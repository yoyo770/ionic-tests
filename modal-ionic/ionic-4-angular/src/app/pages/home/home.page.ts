import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private modalController: ModalController) {

  }

  async openModal() {
    const modal: HTMLIonModalElement =  await this.modalController.create({
      component: ModalPage,
      componentProps: {
        timeClickButtonOpenModal: new Date().getTime(),
      }
    });
    modal.present();
  }
}
