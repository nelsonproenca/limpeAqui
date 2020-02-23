import {
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
  IonFab,
  IonFabButton,
  IonInput
} from "@ionic/react";
import { pin, arrowBack, arrowForward } from "ionicons/icons";
import React from "react";

const PedidoMapaPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              routerLink="/home/contratante/bemvindo"
              routerDirection="back"
            >
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Pedido</IonTitle>
          <IonButtons slot="end" color="secundary">
            <IonButton
              routerDirection="forward"
              routerLink="/home/contratante/pedidodata"
            >
              <IonIcon icon={arrowForward} slot="end"></IonIcon>
              <IonLabel>1 de 7</IonLabel>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent style={{ textAlign: "center" }}>
        <IonItem lines="none" class="ion-padding">
          <img
            src="/assets/advance-card-map-madison.png"
            alt="mapa"
            style={{ height: "400px", width: "100%" }}
          />
          <IonFab vertical="top" horizontal="end">
            <IonFabButton>
              <IonIcon icon={pin}></IonIcon>
            </IonFabButton>
          </IonFab>
        </IonItem>
        <IonCard>
          <IonItem lines="none">
            <IonLabel
              class="ion-text-wrap"
              position="stacked"
              style={{ fontSize: "1.2rem" }}
            >
              Selecione um local no mapa. Ou digite um local abaixo.
            </IonLabel>
            <IonInput type="text"></IonInput>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PedidoMapaPage;
