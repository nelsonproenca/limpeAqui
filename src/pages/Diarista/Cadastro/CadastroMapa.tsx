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
  IonCardHeader,
  IonCardSubtitle
} from "@ionic/react";
import { pin, arrowBack, arrowForward } from "ionicons/icons";
import React from "react";

const CadastroMapaPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              routerLink="/home/diarista/cadastroexperiencia"
              routerDirection="back"
            >
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Cadastro</IonTitle>
          <IonButtons slot="end" color="secundary">
            <IonButton
              routerDirection="forward"
              routerLink="/home/diarista/cadastrodisponibilidade"
            >
              <IonIcon icon={arrowForward} slot="end"></IonIcon>
              <IonLabel>6 de 8</IonLabel>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent style={{ textAlign: "center" }}>
        <IonCard style={{ textAlign: "center" }}>
          <IonItem lines="none" style={{ textAlign: "center" }}>
            <IonLabel style={{ fontSize: "1.2rem" }}>Região</IonLabel>
          </IonItem>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>
              Qual região de Londrina prefere trabalhar ?
            </IonCardSubtitle>
          </IonCardHeader>

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
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CadastroMapaPage;
