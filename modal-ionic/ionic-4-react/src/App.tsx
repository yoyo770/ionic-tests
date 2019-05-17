import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonModal,
  IonButton
} from '@ionic/react';
import { Modal } from './Modal/Modal';

type Props = {}
type State = {
  showModal: boolean
}

class App extends Component {
  render() {
    return (
         <Modal></Modal>
    );
  }
}

export default App;