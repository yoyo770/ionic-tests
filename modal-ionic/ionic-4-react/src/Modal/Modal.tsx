import React, { Component } from 'react'
import { IonModal, IonButton, IonHeader, IonToolbar, IonBackButton, IonButtons, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

type Props = {
}
type State = {
  showModal: boolean
  time: any;
}

export class Modal extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      showModal: false,
      time: new Date().getTime()
    };
  }
  showTime() {
    console.log('Time to open modal with 2000 items:', new Date().getTime() - this.state.time)
  }
  open() {
    this.setState(() => ({ showModal: true, time: new Date().getTime() }))
  }
  render() {
    var rows = [], i = 0, len = 2000;
    while (++i <= len) rows.push(i);
    return (
      <div>
      
        <IonButton onClick={() => this.open()}>
          open Modal
        </IonButton>

        <IonModal
          isOpen={this.state.showModal}
          onIonModalDidPresent={() => this.showTime()}
          onDidDismiss={() => this.setState(() => ({ showModal: false }))}
        >

          <IonList>
            {rows.map(function (i) {
              return <IonItem key={i}>
                <IonLabel>{i}</IonLabel>
              </IonItem>;
            })}
          </IonList>
        </IonModal>
    
      </div>

    );
  }
}