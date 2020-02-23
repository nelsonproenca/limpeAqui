import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonCard,
  IonItem,
  IonButton,
  IonBadge
} from "@ionic/react";
import { today, calendar } from "ionicons/icons";
import React from "react";

const AgendaPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Agenda</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonItem lines="none">
          <IonButton
            size="default"
            color="warning"
            expand="block"
            fill="outline"
            style={{
              width: "100%",
              height: 70,
              textAlign: "left"
            }}
            routerLink="/home/diarista/agenda/agendados"
            routerDirection="forward"
          >
            <IonIcon
              icon={calendar}
              slot="start"
              style={{ fontSize: "3rem" }}
            ></IonIcon>
            <IonLabel
              style={{
                fontSize: "0.85rem",
                width: 190,
                textAlign: "left"
              }}
            >
              Serviços Agendados
            </IonLabel>
            <IonBadge slot="end">3</IonBadge>
          </IonButton>
        </IonItem>
        <IonItem lines="none">
          <IonButton
            size="default"
            color="warning"
            expand="block"
            fill="outline"
            style={{
              width: "100%",
              height: 70,
              textAlign: "left"
            }}
            routerLink="/home/diarista/agenda/realizados"
            routerDirection="forward"
          >
            <IonIcon
              icon={today}
              slot="start"
              style={{ fontSize: "3rem" }}
            ></IonIcon>
            <IonLabel
              style={{
                fontSize: "0.85rem",
                width: 190,
                textAlign: "left"
              }}
            >
              Serviços Realizados
            </IonLabel>
            <IonBadge slot="end">3</IonBadge>
          </IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default AgendaPage;
