import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonLabel,
  IonButton
} from "@ionic/react";
import { logoWhatsapp, arrowBack } from "ionicons/icons";
import React from "react";

const IndiquePage: React.FC = () => {
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
          <IonTitle>Indique</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Indique um amigo.</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonLabel
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                textAlign: "center"
              }}
            >
              <h1>Teste de cabeçalho</h1>
            </IonLabel>
            <IonLabel>
              <h2>
                Teste de cabeçalho. Teste de cabeçalhoTeste de cabeçalhoTeste de
                cabeçalhoTeste de cabeçalhoTeste de cabeçalho Teste de
                cabeçalhoTeste de cabeçalhoTeste de cabeçalho
              </h2>
            </IonLabel>
            <IonLabel>
              <h4
                style={{
                  fontSize: "2rem",
                  textAlign: "center",
                  borderRadius: "10px",
                  border: "solid 1px #000000",
                  padding: "25px",
                  marginTop: "50px",
                  marginBottom: "50px"
                }}
              >
                9d9jfjhe965re
              </h4>
            </IonLabel>
            <IonButton
              size="default"
              color="success"
              expand="block"
              style={{ fontSize: "1.3rem", width: "100%" }}
            >
              <IonIcon icon={logoWhatsapp} slot="end"></IonIcon>
              <IonLabel style={{ fontSize: "1rem" }}>Whatsapp</IonLabel>
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default IndiquePage;
