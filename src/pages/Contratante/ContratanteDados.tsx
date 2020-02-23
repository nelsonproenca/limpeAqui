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
  IonCardHeader,
  IonCardSubtitle,
  IonInput
} from "@ionic/react";
import { arrowBack, save } from "ionicons/icons";
import React from "react";

const ContratanteDadosPage: React.FC = () => {
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
          <IonTitle>Contratante</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard style={{ textAlign: "center" }}>
          <IonItem lines="none" style={{ textAlign: "center" }}>
            <IonLabel style={{ fontSize: "1.2rem" }}>Dados Pessoais</IonLabel>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonLabel position="stacked">Nome:</IonLabel>
            <IonInput type="text" disabled>
              Fulano de Tal
            </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Celular:</IonLabel>
            <IonInput type="text" disabled>
              99999-9999
            </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">E~mail</IonLabel>
            <IonInput type="text" disabled>
              fulano.tal@contoso.com
            </IonInput>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Endereço Residencial:</IonCardSubtitle>
          </IonCardHeader>
          <IonItem>
            <IonLabel position="stacked">CEP:</IonLabel>
            <IonInput type="text"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Endereço(Rua e Bairro):</IonLabel>
            <IonInput type="text"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Endereço(Numero):</IonLabel>
            <IonInput type="number"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Cidade</IonLabel>
            <IonInput type="text"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Estado</IonLabel>
            <IonInput type="text"></IonInput>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Documentos</IonCardSubtitle>
          </IonCardHeader>
          <IonItem>
            <IonLabel position="stacked">CPF:</IonLabel>
            <IonInput type="text"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">RG:</IonLabel>
            <IonInput type="text"></IonInput>
          </IonItem>
        </IonCard>
        <div className="ion-padding">
          <IonButton
            size="default"
            color="success"
            expand="block"
            style={{ fontSize: "1.5rem", width: "100%" }}
            routerDirection="back"
            routerLink="/"
          >
            <IonIcon icon={save} slot="end"></IonIcon>
            <IonLabel style={{ fontSize: "1rem" }}>Salvar</IonLabel>
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ContratanteDadosPage;
