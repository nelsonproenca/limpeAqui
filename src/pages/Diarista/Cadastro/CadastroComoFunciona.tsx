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
  IonToggle,
  IonText
} from "@ionic/react";
import { arrowForward } from "ionicons/icons";
import React, { useState } from "react";

const CadastroComoFuncionaPage: React.FC = () => {
  const textoComoFunciona =
    "Como funciona: Nós da Limpe Aqui temos como objetivo, conectar profissionais autônomos da limpeza com pessoas que necessitam de serviços de limpeza de maneira prática e rápida. O profissional que se interessar em trabalhar conosco, consegue atingir dependendo de sua disponibilidade mais do que R$ 2.000,00 por mês. A cliente contrata por hora o serviço. A profissional ganha por hora trabalhada R$ 15,00, a(o) profissional não tem nenhum vínculo empregatício com a Limpe Aqui, nós apenas somos os facilitadores, oferecendo mais serviços aos profissionais. ";

  const [trabalho, setTrabalho] = useState(false);

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
              routerLink="/home/diarista/cadastrodadospessoais"
              disabled={!trabalho}
            >
              <IonIcon icon={arrowForward} slot="end"></IonIcon>
              <IonLabel>1 de 8</IonLabel>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard style={{ textAlign: "center" }}>
          <IonItem lines="none" style={{ textAlign: "center" }}>
            <IonLabel style={{ fontSize: "1.2rem" }}>Como funciona</IonLabel>
          </IonItem>
        </IonCard>
        <IonCard>
          <IonItem>
            <IonLabel
              class="ion-text-wrap"
              color="danger"
              style={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              {textoComoFunciona}
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel class="ion-text-wrap" style={{ fontSize: "0.85rem" }}>
              Esta ciente dos ganhos e de que não tem nenhum vínculo
              empregatício?
              <IonText color="danger">*</IonText>
            </IonLabel>
            <IonToggle slot="end"></IonToggle>
          </IonItem>
          <IonItem lines="none">
            <IonLabel class="ion-text-wrap" style={{ fontSize: "0.85rem" }}>
              Tem interesse em fazer parte do LimpeAqui em Londrina ?
              <IonText color="danger">*</IonText>
            </IonLabel>
            <IonToggle
              slot="end"
              onIonChange={e => {
                setTrabalho(e.detail.checked);
              }}
            ></IonToggle>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CadastroComoFuncionaPage;
