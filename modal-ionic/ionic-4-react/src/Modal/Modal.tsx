import React, { Component } from 'react'
import { IonModal, IonButton, IonHeader, IonToolbar, IonBackButton, IonButtons, IonTitle, IonContent } from '@ionic/react';
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
    console.log('Time to open modal with 1000 items:',  new Date().getTime() - this.state.time)
  }
  open() {
    this.setState(() => ({ showModal: true , time: new Date().getTime()}))
  }
  render() {
    var rows = [], i = 0, len = 30 * 30;
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


          {rows.map(function (i) {
            return <IonGrid key={i}>
              <IonRow >

                <IonCol no-padding>
                  &nbsp;
          </IonCol>
                <IonCol no-padding>
                  1
          </IonCol>

              </IonRow>
            </IonGrid>;
          })}



        </IonModal>
      </div>

    );
  }
}