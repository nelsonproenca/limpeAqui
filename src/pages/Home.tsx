import {
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCardContent
} from "@ionic/react";
import {
  person,
  home,
  cash,
  informationCircle,
  chatbubbles,
  today
} from "ionicons/icons";
import React from "react";

import "./Home.css";

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/Logo.png" alt="logo" style={{ height: 100 }} />
          <IonCardHeader>
            <IonCardSubtitle>&copy;LimpeAqui - 01/01/2010</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
        <IonList lines="none">
          <IonListHeader>
            <IonLabel>Opções</IonLabel>
          </IonListHeader>
        </IonList>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >
          <IonCard
            routerDirection="forward"
            routerLink="/home/login"
            style={{ width: "40%" }}
          >
            <IonCardContent>
              <div style={{ flexDirection: "column", textAlign: "center" }}>
                <IonIcon
                  icon={home}
                  color="warning"
                  style={{ fontSize: "5rem", textAlign: "center" }}
                ></IonIcon>
                <IonLabel style={{ fontSize: "1.1rem" }}>Diarista</IonLabel>
              </div>
            </IonCardContent>
          </IonCard>
          <IonCard
            routerDirection="forward"
            routerLink="/home/login"
            style={{ width: "40%" }}
          >
            <IonCardContent>
              <div style={{ flexDirection: "column", textAlign: "center" }}>
                <IonIcon
                  icon={person}
                  color="warning"
                  style={{ fontSize: "5rem", textAlign: "center" }}
                ></IonIcon>
                <IonLabel style={{ fontSize: "1.1rem" }}>Contratante</IonLabel>
              </div>
            </IonCardContent>
          </IonCard>
          <IonCard
            routerDirection="forward"
            routerLink="/home/planos"
            style={{ width: "40%" }}
          >
            <IonCardContent>
              <div style={{ flexDirection: "column", textAlign: "center" }}>
                <IonIcon
                  icon={cash}
                  color="warning"
                  style={{ fontSize: "5rem", textAlign: "center" }}
                ></IonIcon>
                <IonLabel style={{ fontSize: "1.1rem" }}>Planos</IonLabel>
              </div>
            </IonCardContent>
          </IonCard>
          <IonCard
            routerDirection="forward"
            routerLink="/home/login"
            style={{ width: "40%" }}
          >
            <IonCardContent>
              <div style={{ flexDirection: "column", textAlign: "center" }}>
                <IonIcon
                  icon={today}
                  color="warning"
                  style={{ fontSize: "5rem", textAlign: "center" }}
                ></IonIcon>
                <IonLabel style={{ fontSize: "1.1rem" }}>Agenda</IonLabel>
              </div>
            </IonCardContent>
          </IonCard>
          <IonCard
            routerDirection="forward"
            routerLink="/home/vantagens"
            style={{ width: "40%" }}
          >
            <IonCardContent>
              <div style={{ flexDirection: "column", textAlign: "center" }}>
                <IonIcon
                  icon={informationCircle}
                  color="warning"
                  style={{ fontSize: "5rem", textAlign: "center" }}
                ></IonIcon>
                <IonLabel style={{ fontSize: "1.1rem" }}>Vantagens</IonLabel>
              </div>
            </IonCardContent>
          </IonCard>
          <IonCard
            routerLink="/home/duvidas"
            routerDirection="forward"
            style={{ width: "40%" }}
          >
            <IonCardContent>
              <div style={{ flexDirection: "column", textAlign: "center" }}>
                <IonIcon
                  icon={chatbubbles}
                  color="warning"
                  style={{ fontSize: "5rem", textAlign: "center" }}
                ></IonIcon>
                <IonLabel style={{ fontSize: "1.1rem" }}>Duvidas</IonLabel>
              </div>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
