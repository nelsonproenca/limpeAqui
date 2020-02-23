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
  IonText,
  IonToggle,
  IonRadio,
  IonRadioGroup,
  IonList
} from "@ionic/react";
import { arrowBack, arrowForward } from "ionicons/icons";
import React from "react";

const CadastroOutrosDadosPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              routerLink="/home/diarista/cadastrodadospessoais"
              routerDirection="back"
            >
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Cadastro</IonTitle>
          <IonButtons slot="end" color="secundary">
            <IonButton
              routerDirection="forward"
              routerLink="/home/diarista/cadastrodocumentos"
            >
              <IonIcon icon={arrowForward} slot="end"></IonIcon>
              <IonLabel>3 de 8</IonLabel>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard style={{ textAlign: "center" }}>
          <IonItem lines="none" style={{ textAlign: "center" }}>
            <IonLabel style={{ fontSize: "1.2rem" }}>Outros Dados</IonLabel>
          </IonItem>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Informações trabalhistas</IonCardSubtitle>
          </IonCardHeader>
          <IonItem>
            <IonLabel class="ion-text-wrap" style={{ fontSize: "0.75rem" }}>
              Tem MEI (Micro Empreendedor Individual) ?
              <IonText color="danger">*</IonText>
            </IonLabel>
            <IonToggle slot="end" />
          </IonItem>
          <IonItem>
            <IonLabel class="ion-text-wrap" style={{ fontSize: "0.75rem" }}>
              Tem experiência como profissional de limpeza ?
              <IonText color="danger">*</IonText>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonRadioGroup value="1">
              <IonItem lines="none">
                <IonLabel>Sim, de maneira informal</IonLabel>
                <IonRadio slot="start" value="1" />
              </IonItem>
              <IonItem lines="none">
                <IonLabel>Sim, com carteira assinada</IonLabel>
                <IonRadio slot="start" value="2" />
              </IonItem>
              <IonItem lines="none">
                <IonLabel>Não tenho, mas quero aprender</IonLabel>
                <IonRadio slot="start" value="3" />
              </IonItem>
            </IonRadioGroup>
          </IonItem>
          <IonItem>
            <IonLabel class="ion-text-wrap" style={{ fontSize: "0.75rem" }}>
              Atualmente você está ?<IonText color="danger">*</IonText>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonList lines="none">
              <IonRadioGroup value="1">
                <IonItem>
                  <IonLabel>Trabalhando informalmente</IonLabel>
                  <IonRadio slot="start" value="1" />
                </IonItem>
                <IonItem>
                  <IonLabel>Trabalhando com carteira assinada</IonLabel>
                  <IonRadio slot="start" value="2" />
                </IonItem>
                <IonItem>
                  <IonLabel>Trabalhando em outra área</IonLabel>
                  <IonRadio slot="start" value="3" />
                </IonItem>
                <IonItem>
                  <IonLabel>Não estou trabalhando</IonLabel>
                  <IonRadio slot="start" value="4" />
                </IonItem>
              </IonRadioGroup>
            </IonList>
          </IonItem>
          <IonItem>
            <IonLabel class="ion-text-wrap" style={{ fontSize: "0.75rem" }}>
              Trabalhar com a Limpe Aqui seria ?
              <IonText color="danger">*</IonText>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonRadioGroup value="1">
              <IonItem lines="none">
                <IonLabel>Renda principal</IonLabel>
                <IonRadio slot="start" value="1" />
              </IonItem>
              <IonItem lines="none">
                <IonLabel>Renda extra</IonLabel>
                <IonRadio slot="start" value="2" />
              </IonItem>
            </IonRadioGroup>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CadastroOutrosDadosPage;
