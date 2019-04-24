import React, { Component } from 'react'
import { IonModal, IonButton, IonHeader, IonToolbar, IonBackButton, IonButtons, IonTitle, IonContent } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

type Props = {}
type State = {
  showModal: boolean
}

export class Modal extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  render() {
    var rows = [], i = 0, len = 30*30;
    while (++i <= len) rows.push(i);
    return (
      <div>
        <IonButton onClick={() => this.setState(() => ({ showModal: true }))}>
          open Modal
        </IonButton>

        <IonModal
          isOpen={this.state.showModal}
          onDidDismiss={() => this.setState(() => ({ showModal: false }))}
        >

        
            {rows.map(function (i) {
              return <IonGrid>
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