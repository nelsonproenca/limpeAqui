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
  IonCardSubtitle
} from "@ionic/react";
import { arrowBack, home, business, shirt, star } from "ionicons/icons";
import React from "react";

const PedidoServicoPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              routerLink="/home/contratante/pedidodata"
              routerDirection="back"
            >
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Pedido</IonTitle>
          <IonLabel class="ion-padding" slot="end">
            Passo 3 de 7
          </IonLabel>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard style={{ textAlign: "center" }}>
          <IonItem lines="none" style={{ textAlign: "center" }}>
            <IonLabel style={{ fontSize: "1.2rem" }}>Serviços</IonLabel>
          </IonItem>
        </IonCard>
        <IonCard>
          <IonCardSubtitle>
            <IonLabel class="ion-padding">
              Selecione o tipo do serviço.
            </IonLabel>
          </IonCardSubtitle>
          <IonButton
            class="ion-padding"
            size="default"
            color="warning"
            expand="block"
            style={{ width: "100%", height: 100 }}
            routerLink="/home/contratante/pedidotarefa"
            routerDirection="forward"
          >
            <IonIcon
              icon={home}
              slot="end"
              style={{ fontSize: "2.5rem" }}
            ></IonIcon>
            <IonLabel style={{ fontSize: "1.1rem" }}>
              Limpeza Residencial
            </IonLabel>
          </IonButton>

          <IonButton
            class="ion-padding"
            size="default"
            color="warning"
            expand="block"
            style={{ fontSize: "2rem", width: "100%", height: 100 }}
            routerLink="/home/contratante/pedidotarefa"
            routerDirection="forward"
          >
            <IonIcon
              icon={business}
              slot="end"
              style={{ fontSize: "2.5rem" }}
            ></IonIcon>
            <IonLabel style={{ fontSize: "1.1rem" }}>
              Limpeza Comercial
            </IonLabel>
          </IonButton>

          <IonButton
            class="ion-padding"
            size="default"
            color="warning"
            expand="block"
            style={{ width: "100%", height: 100 }}
            routerLink="/home/contratante/pedidotarefa"
            routerDirection="forward"
          >
            <IonIcon
              icon={shirt}
              slot="end"
              style={{ fontSize: "2.5rem" }}
            ></IonIcon>
            <IonLabel style={{ fontSize: "1.1rem", width: 210 }}>
              Passar Roupas
            </IonLabel>
          </IonButton>

          <IonButton
            class="ion-padding"
            size="default"
            color="warning"
            expand="block"
            style={{ width: "100%", height: 100 }}
            routerLink="/home/contratante/pedidotarefa"
            routerDirection="forward"
          >
            <IonIcon
              icon={star}
              slot="end"
              style={{ fontSize: "2.5rem" }}
            ></IonIcon>
            <IonLabel style={{ fontSize: "1rem" }}>
              Limpeza + Passar Roupas
            </IonLabel>
          </IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PedidoServicoPage;
