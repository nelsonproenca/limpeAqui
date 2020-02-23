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
  IonInput,
  IonText,
  IonToggle,
  IonRadio,
  IonRadioGroup
} from "@ionic/react";
import { arrowBack, arrowForward } from "ionicons/icons";
import React from "react";

const CadastroDadosPessoaisPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              routerLink="/home/diarista/cadastrocomofunciona"
              routerDirection="back"
            >
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Cadastro</IonTitle>
          <IonButtons slot="end" color="secundary">
            <IonButton
              routerDirection="forward"
              routerLink="/home/diarista/cadastrooutrosdados"
            >
              <IonIcon icon={arrowForward} slot="end"></IonIcon>
              <IonLabel>2 de 8</IonLabel>
            </IonButton>
          </IonButtons>
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
            <IonLabel position="stacked">Nome Completo:</IonLabel>
            <IonInput type="text"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Celular (WhatsApp):</IonLabel>
            <IonInput type="text" placeholder="Ex. (11) 99999-9999"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">E~mail</IonLabel>
            <IonInput type="text" placeholder="Ex. boo@contoso.com"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Data de Nascimento</IonLabel>
            <IonInput type="number" placeholder="Ex. 030"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel class="ion-text-wrap" position="stacked">
              Tem conta bancária em seu nome?
            </IonLabel>
            <IonToggle slot="end" />
          </IonItem>
          <IonItem lines="none">
            <IonLabel class="ion-text-wrap" position="stacked">
              Tem acesso a internet no seu celular ?
              <IonText color="danger">*</IonText>
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonRadioGroup value="biff">
              <IonItem lines="none">
                <IonLabel>Sim, só o wifi</IonLabel>
                <IonRadio slot="start" value="biff" />
              </IonItem>
              <IonItem lines="none">
                <IonLabel>Sim, só 3G/4G</IonLabel>
                <IonRadio slot="start" value="griff" />
              </IonItem>
              <IonItem lines="none">
                <IonLabel>Sim, wifi e 3G/4G</IonLabel>
                <IonRadio slot="start" value="buford" />
              </IonItem>
              <IonItem lines="none">
                <IonLabel>Não tenho acesso</IonLabel>
                <IonRadio slot="start" value="buford" />
              </IonItem>
            </IonRadioGroup>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Endereço</IonCardSubtitle>
          </IonCardHeader>
          <IonItem>
            <IonLabel position="stacked">CEP:</IonLabel>
            <IonInput type="text"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Endereço(Rua e Bairro ):</IonLabel>
            <IonInput type="text"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Endereço(Numero):</IonLabel>
            <IonInput type="text"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Cidade</IonLabel>
            <IonInput type="text"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Estado</IonLabel>
            <IonInput type="number"></IonInput>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CadastroDadosPessoaisPage;
