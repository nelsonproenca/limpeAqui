import {
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonAvatar,
  IonButton,
  IonIcon
} from "@ionic/react";
import React from "react";
import { arrowBack } from "ionicons/icons";

const AgendaAgendadosPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              routerLink="/home/diarista/agenda"
              routerDirection="back"
            >
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Agendados</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard style={{ textAlign: "center" }}>
          <IonItem lines="none" style={{ textAlign: "center" }}>
            <IonLabel style={{ fontSize: "1.2rem" }}>
              Serviços Agendados
            </IonLabel>
          </IonItem>
        </IonCard>

        <IonCard
          style={{
            fontSize: "1.3rem",
            height: 185,
            paddingTop: "3%"
          }}
        >
          <IonItem lines="none">
            <IonAvatar slot="start" style={{ width: 75, height: 75 }}>
              <img
                alt="foto"
                src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
              />
              <IonLabel
                class="ion-text-wrap"
                style={{
                  marginTop: "5px",
                  textAlign: "center",
                  fontSize: "0.40rem"
                }}
              >
                <h6>MariadaSilvaeeeeeee</h6>
              </IonLabel>
            </IonAvatar>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <IonLabel
                style={{
                  marginTop: "2px",
                  marginBottom: "7px",
                  textAlign: "right",
                  marginRight: "20px"
                }}
              >
                <h1>99/99/9999</h1>
              </IonLabel>
              <IonLabel
                style={{
                  marginBottom: "7px",
                  fontWeight: "bold"
                }}
              >
                <h2 style={{ fontWeight: "bold" }}>Tipo do serviço</h2>
              </IonLabel>
              <IonLabel style={{ marginBottom: "5px" }}>
                <h4>
                  <span style={{ fontWeight: "bold" }}>Horas contratadas:</span>
                  &nbsp;99 horas
                </h4>
              </IonLabel>
              <IonLabel class="ion-text-wrap" style={{ marginBottom: "5px" }}>
                <h4>
                  <span style={{ fontWeight: "bold" }}>Local:</span>&nbsp;Rua
                  teste, 12 - Teste teste 00001-001
                </h4>
              </IonLabel>
              <IonLabel
                style={{
                  marginTop: "2px",
                  marginBottom: "2px",
                  textAlign: "right",
                  marginRight: "20px"
                }}
              >
                <h1>Valor: 999,99</h1>
              </IonLabel>
            </div>
          </IonItem>
        </IonCard>
        <IonCard
          style={{
            fontSize: "1.3rem",
            height: 185,
            paddingTop: "3%"
          }}
        >
          <IonItem lines="none">
            <IonAvatar slot="start" style={{ width: 75, height: 75 }}>
              <img
                alt="foto"
                src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
              />
              <IonLabel
                class="ion-text-wrap"
                style={{
                  marginTop: "5px",
                  textAlign: "center",
                  fontSize: "0.40rem"
                }}
              >
                <h6>MariadaSilvaeeeeeee</h6>
              </IonLabel>
            </IonAvatar>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <IonLabel
                style={{
                  marginTop: "2px",
                  marginBottom: "7px",
                  textAlign: "right",
                  marginRight: "20px"
                }}
              >
                <h1>99/99/9999</h1>
              </IonLabel>
              <IonLabel
                style={{
                  marginBottom: "7px",
                  fontWeight: "bold"
                }}
              >
                <h2 style={{ fontWeight: "bold" }}>Tipo do serviço</h2>
              </IonLabel>
              <IonLabel style={{ marginBottom: "5px" }}>
                <h4>
                  <span style={{ fontWeight: "bold" }}>Horas contratadas:</span>
                  &nbsp;99 horas
                </h4>
              </IonLabel>
              <IonLabel class="ion-text-wrap" style={{ marginBottom: "5px" }}>
                <h4>
                  <span style={{ fontWeight: "bold" }}>Local:</span>&nbsp;Rua
                  teste, 12 - Teste teste 00001-001
                </h4>
              </IonLabel>
              <IonLabel
                style={{
                  marginTop: "2px",
                  marginBottom: "2px",
                  textAlign: "right",
                  marginRight: "20px"
                }}
              >
                <h1>Valor: 999,99</h1>
              </IonLabel>
            </div>
          </IonItem>
        </IonCard>
        <IonCard
          style={{
            fontSize: "1.3rem",
            height: 185,
            paddingTop: "3%"
          }}
        >
          <IonItem lines="none">
            <IonAvatar slot="start" style={{ width: 75, height: 75 }}>
              <img
                alt="foto"
                src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
              />
              <IonLabel
                class="ion-text-wrap"
                style={{
                  marginTop: "5px",
                  textAlign: "center",
                  fontSize: "0.40rem"
                }}
              >
                <h6>MariadaSilvaeeeeeee</h6>
              </IonLabel>
            </IonAvatar>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <IonLabel
                style={{
                  marginTop: "2px",
                  marginBottom: "7px",
                  textAlign: "right",
                  marginRight: "20px"
                }}
              >
                <h1>99/99/9999</h1>
              </IonLabel>
              <IonLabel
                style={{
                  marginBottom: "7px",
                  fontWeight: "bold"
                }}
              >
                <h2 style={{ fontWeight: "bold" }}>Tipo do serviço</h2>
              </IonLabel>
              <IonLabel style={{ marginBottom: "5px" }}>
                <h4>
                  <span style={{ fontWeight: "bold" }}>Horas contratadas:</span>
                  &nbsp;99 horas
                </h4>
              </IonLabel>
              <IonLabel class="ion-text-wrap" style={{ marginBottom: "5px" }}>
                <h4>
                  <span style={{ fontWeight: "bold" }}>Local:</span>&nbsp;Rua
                  teste, 12 - Teste teste 00001-001
                </h4>
              </IonLabel>
              <IonLabel
                style={{
                  marginTop: "2px",
                  marginBottom: "2px",
                  textAlign: "right",
                  marginRight: "20px"
                }}
              >
                <h1>Valor: 999,99</h1>
              </IonLabel>
            </div>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default AgendaAgendadosPage;
