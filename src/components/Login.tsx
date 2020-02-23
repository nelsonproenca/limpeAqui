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
  IonButton,
  IonItem,
  IonInput
} from "@ionic/react";
import { logoFacebook, logoGoogle, logIn } from "ionicons/icons";
import React from "react";

const LoginPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Faça seu login</IonCardSubtitle>
          </IonCardHeader>
          <IonList lines="none">
            <IonItem>
              <IonLabel position="stacked">Usuário:</IonLabel>
              <IonInput
                type="text"
                placeholder="Entre com seu usuário."
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Senha:</IonLabel>
              <IonInput
                type="text"
                placeholder="Entre com sua senha."
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonButton
                size="default"
                color="warning"
                expand="block"
                routerDirection="forward"
                routerLink="/home/contratante/bemvindo"
                style={{ fontSize: "1.3rem", width: "100%", height: 50 }}
              >
                <IonIcon icon={logIn} slot="start"></IonIcon>
                <IonLabel style={{ fontSize: "0.85rem" }}>
                  Entrar Contratante
                </IonLabel>
              </IonButton>
            </IonItem>
            <IonItem>
              <IonButton
                size="default"
                color="warning"
                expand="block"
                routerDirection="forward"
                routerLink="/home/diarista/bemvindo"
                style={{ fontSize: "1.3rem", width: "100%", height: 50 }}
              >
                <IonIcon icon={logIn} slot="start"></IonIcon>
                <IonLabel style={{ fontSize: "0.85rem" }}>
                  Entrar Diarista
                </IonLabel>
              </IonButton>
            </IonItem>
            <IonItem>
              <IonButton slot="end" size="small" color="light">
                <IonLabel>Registre-se</IonLabel>
              </IonButton>
            </IonItem>
          </IonList>
        </IonCard>
        <IonList lines="none">
          <IonListHeader style={{ textAlign: "center" }}>
            <IonLabel>Ou</IonLabel>
          </IonListHeader>
        </IonList>
        <IonCard className="welcome-card">
          <IonList lines="none">
            <IonItem>
              <IonButton
                size="default"
                expand="block"
                style={{ fontSize: "1.3rem", width: "100%", height: 50 }}
              >
                <IonIcon icon={logoFacebook} slot="end"></IonIcon>
                <IonLabel style={{ fontSize: "0.65rem" }}>
                  Faça o login pelo Facebook
                </IonLabel>
              </IonButton>
            </IonItem>
            <IonItem>
              <IonButton
                size="default"
                color="danger"
                expand="block"
                style={{ fontSize: "1.3rem", width: "100%", height: 50 }}
              >
                <IonLabel style={{ fontSize: "0.65rem" }}>
                  Faça o login pelo Google
                </IonLabel>
                <IonIcon icon={logoGoogle} slot="end"></IonIcon>
              </IonButton>
            </IonItem>
          </IonList>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
