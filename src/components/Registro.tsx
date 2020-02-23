import {
  IonButtons,
  IonCard,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
  IonInput,
  IonCardTitle
} from "@ionic/react";
import { create, logIn, document } from "ionicons/icons";
import React from "react";

const RegistroPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Registro</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <IonItem lines="none" style={{ textAlign: "right" }}>
                <IonIcon
                  icon={logIn}
                  slot="end"
                  style={{ fontSize: "2rem" }}
                ></IonIcon>
                <IonLabel style={{ fontSize: "1.5rem" }}>Login</IonLabel>
              </IonItem>
            </IonCardTitle>
          </IonCardHeader>
          <IonList lines="none">
            <IonItem>
              <IonLabel position="stacked">Usuário:</IonLabel>
              <IonInput
                type="text"
                placeholder="Entre com seu usuário."
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Senha:</IonLabel>
              <IonInput
                type="text"
                placeholder="Entre com sua senha."
              ></IonInput>
            </IonItem>
          </IonList>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonItem lines="none" style={{ textAlign: "right" }}>
              <IonIcon
                icon={document}
                slot="end"
                style={{ fontSize: "2rem" }}
              ></IonIcon>
              <IonLabel style={{ fontSize: "1.5rem" }}>Dados</IonLabel>
            </IonItem>
          </IonCardHeader>
          <IonList lines="none">
            <IonItem>
              <IonLabel position="stacked">Nome:</IonLabel>
              <IonInput
                type="text"
                placeholder="Entre com seu nome."
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">E-mail:</IonLabel>
              <IonInput
                type="text"
                placeholder="Entre com sua e-mail."
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Celular:</IonLabel>
              <IonInput
                type="text"
                placeholder="Entre com seu celular."
              ></IonInput>
            </IonItem>
          </IonList>
        </IonCard>
        <IonItem lines="none">
          <IonButton
            size="default"
            color="warning"
            expand="block"
            style={{ fontSize: "1.3rem", width: "100%" }}
            routerDirection="forward"
            routerLink="/home/contratante/login"
          >
            <IonIcon icon={create} slot="end"></IonIcon>
            <IonLabel style={{ fontSize: "1.2rem" }}>Salvar</IonLabel>
          </IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default RegistroPage;
