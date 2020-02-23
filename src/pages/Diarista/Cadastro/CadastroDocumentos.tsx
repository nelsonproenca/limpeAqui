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
  IonMenuButton,
  IonText,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/react";
import { arrowForward, camera } from "ionicons/icons";
import React from "react";

const CadastroDocumentosPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Cadastro</IonTitle>
          <IonButtons slot="end" color="secundary">
            <IonButton
              routerDirection="forward"
              routerLink="/home/diarista/cadastroexperiencia"
            >
              <IonIcon icon={arrowForward} slot="end"></IonIcon>
              <IonLabel>4 de 8</IonLabel>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard style={{ textAlign: "center" }}>
          <IonItem lines="none" style={{ textAlign: "center" }}>
            <IonLabel style={{ fontSize: "1.2rem" }}>Documentos</IonLabel>
          </IonItem>
        </IonCard>
        <IonCard>
          <IonCardSubtitle class="ion-padding">
            Selecione os documentos e sua foto.
          </IonCardSubtitle>
          <IonItem>
            <IonGrid style={{ width: "100%" }}>
              <IonRow>
                <IonCol size="9">
                  <IonLabel class="ion-text-wrap" position="stacked">
                    RG
                    <IonText color="danger">*</IonText>
                  </IonLabel>
                </IonCol>
                <IonCol style={{ textAlign: "right" }}>
                  <IonButton>
                    <IonIcon icon={camera} />
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
            <img
              alt="foto"
              src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
            />
          </IonItem>
          <IonItem lines="none">
            <IonGrid style={{ width: "100%" }}>
              <IonRow>
                <IonCol size="9">
                  <IonLabel class="ion-text-wrap" position="stacked">
                    CPF
                    <IonText color="danger">*</IonText>
                  </IonLabel>
                </IonCol>
                <IonCol style={{ textAlign: "right" }}>
                  <IonButton>
                    <IonIcon icon={camera} />
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
            <img
              alt="foto"
              src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
            />
          </IonItem>
          <IonItem lines="none">
            <IonGrid style={{ width: "100%" }}>
              <IonRow>
                <IonCol size="9">
                  <IonLabel class="ion-text-wrap" position="stacked">
                    Foto
                    <IonText color="danger">*</IonText>
                  </IonLabel>
                </IonCol>
                <IonCol style={{ textAlign: "right" }}>
                  <IonButton>
                    <IonIcon icon={camera} />
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
            <img
              alt="foto"
              src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
            />
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CadastroDocumentosPage;
