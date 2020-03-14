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
  IonAvatar
} from "@ionic/react";
import {
  personAdd,
  document,
  today,
  chatbubbles,
  arrowBack
} from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import DiaristasService from "../../services/DiaristasService";
import { BemVindo } from "../../interfaces/BemVindo";

interface DiaristaDetalhesPageProps
  extends RouteComponentProps<{
    Id: string;
  }> {}

const BemVindoDiaristaPage: React.FC<DiaristaDetalhesPageProps> = ({
  match
}) => {
  const [diarista, setDiarista] = useState<BemVindo>();

  useEffect(() => {
    async function carregarDados(id: string) {
      debugger;
      await DiaristasService.getOne(id).then(result => {
        setDiarista(result);
      });
    }

    carregarDados(match.params.Id);
  }, []);

  const urlFoto =
    "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton routerLink="/home/login" routerDirection="back">
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Bem Vindo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent style={{ textAlign: "center" }}>
        <IonCard
          style={{
            fontSize: "1.3rem",
            height: 120,
            paddingTop: "3%"
          }}
        >
          <IonItem lines="none">
            <IonAvatar slot="start" style={{ width: 64, height: 64 }}>
              <img
                alt="foto"
                src={diarista?.foto.length === 0 ? urlFoto : diarista?.foto}
              />
            </IonAvatar>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <IonLabel style={{ marginBottom: "7px" }}>
                <h1>Olá, {diarista?.diaristaNome} !!!</h1>
              </IonLabel>
              <IonLabel style={{ marginBottom: "5px" }}>
                <h4>Ultimo trabalho em {diarista?.dataServico}</h4>
              </IonLabel>
              <IonLabel style={{ marginBottom: "5px" }}>
                <h4>Cliente: {diarista?.contratanteNome}</h4>
              </IonLabel>
              <IonLabel style={{ marginBottom: "px" }}>
                <h4>Valor: {diarista?.valorServico}</h4>
              </IonLabel>
            </div>
          </IonItem>
        </IonCard>
        <br />
        <IonItem lines="none">
          <IonButton
            size="default"
            color="warning"
            expand="block"
            fill="outline"
            style={{
              fontSize: "1.3rem",
              width: "100%",
              height: 70,
              textAlign: "left"
            }}
            routerLink={`/home/diarista/cadastrocomofunciona/${match.params.Id}`}
            routerDirection="forward"
          >
            <IonIcon
              icon={document}
              slot="start"
              style={{ fontSize: "3rem" }}
            ></IonIcon>
            <IonLabel
              class="ion-text-wrap"
              style={{ fontSize: "0.85rem", width: 200 }}
            >
              Complete/Altere seu cadastro
            </IonLabel>
          </IonButton>
        </IonItem>
        <IonItem lines="none">
          <IonButton
            size="default"
            color="warning"
            expand="block"
            fill="outline"
            style={{
              fontSize: "1.3rem",
              width: "100%",
              height: 70,
              textAlign: "left"
            }}
            routerLink={`/home/diarista/agenda/${match.params.Id}`}
            routerDirection="forward"
          >
            <IonIcon
              icon={today}
              slot="start"
              style={{ fontSize: "3rem" }}
            ></IonIcon>
            <IonLabel
              style={{
                fontSize: "1.2rem",
                width: 200,
                textAlign: "left"
              }}
            >
              Ver Agenda
            </IonLabel>
          </IonButton>
        </IonItem>
        <br />
        <br />
        <br />
        <IonCard>
          <IonItem lines="none">
            <IonButton
              size="default"
              color="warning"
              expand="block"
              fill="clear"
              style={{ fontSize: "1.3rem", width: "100%" }}
              routerLink="/home/indique"
              routerDirection="forward"
            >
              <IonIcon
                icon={personAdd}
                slot="start"
                style={{ fontSize: "2.5rem" }}
              ></IonIcon>
              <IonLabel style={{ fontSize: "0.8rem" }}>
                Indique para seus amigos.
              </IonLabel>
            </IonButton>
          </IonItem>
        </IonCard>
        <br />
        <br />
        <IonItem lines="none">
          <IonButton
            size="default"
            color="warning"
            expand="block"
            fill="outline"
            style={{
              fontSize: "1.3rem",
              width: "97%",
              height: 70
            }}
            routerLink="/home/duvidas"
            routerDirection="forward"
          >
            <IonIcon
              icon={chatbubbles}
              style={{ fontSize: "5rem", textAlign: "center" }}
            ></IonIcon>

            <IonLabel class="ion-text-wrap" style={{ fontSize: "0.75rem" }}>
              Se tiver alguma duvida, contacte nosso suporte.
            </IonLabel>
          </IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default BemVindoDiaristaPage;
