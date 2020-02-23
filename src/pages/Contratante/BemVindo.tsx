import {
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
  IonAvatar
} from "@ionic/react";
import { personAdd, home, document, chatbubbles } from "ionicons/icons";
import React from "react";

const BemVindoPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
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
                src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
              />
            </IonAvatar>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <IonLabel style={{ marginBottom: "7px" }}>
                <h1>Olá, Usuário !!!</h1>
              </IonLabel>
              <IonLabel style={{ marginBottom: "5px" }}>
                <h4>Ultimo pedido em 99/99/9999</h4>
              </IonLabel>
              <IonLabel style={{ marginBottom: "5px" }}>
                <h4>Diarista: Maria da Silva</h4>
              </IonLabel>
              <IonLabel style={{ marginBottom: "px" }}>
                <h4>Valor: 999,99</h4>
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
            style={{ fontSize: "1.3rem", width: "100%", height: 70 }}
            routerLink="/home/contratante/pedidomapa"
            routerDirection="forward"
          >
            <IonIcon
              icon={home}
              slot="start"
              style={{ fontSize: "3rem" }}
            ></IonIcon>
            <IonLabel style={{ fontSize: "0.85rem" }}>
              Contrate uma diarista.
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
            routerLink="/home/contratante/dados"
            routerDirection="forward"
          >
            <IonIcon
              icon={document}
              slot="start"
              style={{ fontSize: "3rem" }}
            ></IonIcon>
            <IonLabel style={{ fontSize: "1rem", width: 200 }}>
              Meus Dados
            </IonLabel>
          </IonButton>
        </IonItem>
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

export default BemVindoPage;
