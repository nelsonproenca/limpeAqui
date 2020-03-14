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
  IonToggle,
  IonText
} from "@ionic/react";
import { arrowForward, arrowBack } from "ionicons/icons";
import React, { useState } from "react";
import { DiaristaCadastro } from "../../../interfaces/DiaristaCadastro";
import DiaristasService from "../../../services/DiaristasService";
import { RouteComponentProps } from "react-router";

interface DiaristaDetalhesPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const CadastroComoFuncionaPage: React.FC<DiaristaDetalhesPageProps> = ({
  match,
  history
}) => {
  const textoComoFunciona =
    "Como funciona: Nós da Limpe Aqui temos como objetivo, conectar profissionais autônomos da limpeza com pessoas que necessitam de serviços de limpeza de maneira prática e rápida. O profissional que se interessar em trabalhar conosco, consegue atingir dependendo de sua disponibilidade mais do que R$ 2.000,00 por mês. A cliente contrata por hora o serviço. A profissional ganha por hora trabalhada R$ 15,00, a(o) profissional não tem nenhum vínculo empregatício com a Limpe Aqui, nós apenas somos os facilitadores, oferecendo mais serviços aos profissionais. ";

  const [trabalho, setTrabalho] = useState(false);
  const [vinculo, setVinculo] = useState(false);

  const handleOnclickNext = () => {
    gravarParcial();
    history.push(`/home/diarista/cadastrodadospessoais/${match.params.id}`);
  };

  const gravarParcial = () => {
    let diaristaCadastro: DiaristaCadastro = {
      semVinculoEmpregaticio: vinculo,
      limpeAquiLondrina: trabalho,
      id: match.params.id
    };

    DiaristasService.saveLocal(diaristaCadastro);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              routerLink="/home/diarista/bemvindo"
              routerDirection="back"
            >
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Cadastro</IonTitle>
          <IonButtons slot="end" color="secundary">
            <IonButton
              routerDirection="forward"
              disabled={!trabalho}
              onClick={e => {
                handleOnclickNext();
              }}
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
            <IonToggle
              slot="end"
              onIonChange={e => {
                setVinculo(e.detail.checked);
              }}
            ></IonToggle>
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
