import {
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCheckbox,
  IonLabel,
  IonButton,
  IonIcon
} from "@ionic/react";
import React from "react";
import { arrowBack } from "ionicons/icons";

const PlanosPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              routerLink="/home/contratante/bemvindo"
              routerDirection="back"
            >
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Planos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Selecione os dias.</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ flexDirection: "column", textAlign: "center" }}>
                <IonCheckbox value="1" />
                <IonLabel style={{ fontSize: "0.75rem" }}>Segunda</IonLabel>
              </div>
              <div style={{ flexDirection: "column", textAlign: "center" }}>
                <IonCheckbox value="2" />
                <IonLabel style={{ fontSize: "0.75rem" }}>Terça</IonLabel>
              </div>
              <div style={{ flexDirection: "column", textAlign: "center" }}>
                <IonCheckbox value="3" />
                <IonLabel style={{ fontSize: "0.75rem" }}>Quarta</IonLabel>
              </div>
              <div style={{ flexDirection: "column", textAlign: "center" }}>
                <IonCheckbox value="4" />
                <IonLabel style={{ fontSize: "0.75rem" }}>Quinta</IonLabel>
              </div>
              <div style={{ flexDirection: "column", textAlign: "center" }}>
                <IonCheckbox value="5" />
                <IonLabel style={{ fontSize: "0.75rem" }}>Sexta</IonLabel>
              </div>
              <div style={{ flexDirection: "column", textAlign: "center" }}>
                <IonCheckbox value="6" />
                <IonLabel style={{ fontSize: "0.75rem" }}>Sábado</IonLabel>
              </div>
              <div style={{ flexDirection: "column", textAlign: "center" }}>
                <IonCheckbox value="7" />
                <IonLabel style={{ fontSize: "0.75rem" }}>Domingo</IonLabel>
              </div>
            </div>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Selecione seu plano.</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap"
              }}
            >
              <IonCard style={{ width: "40%" }}>
                <IonCardTitle
                  style={{ textAlign: "center", fontSize: "1.5rem" }}
                >
                  <IonLabel>Avulso</IonLabel>
                </IonCardTitle>
                <IonCardContent>
                  <div style={{ flexDirection: "column", textAlign: "center" }}>
                    <img
                      alt="promoções"
                      src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                      width="20"
                      height="20"
                    />
                    <IonButton style={{ fontSize: "0.65rem" }}>
                      <IonLabel>Comprar</IonLabel>
                    </IonButton>
                  </div>
                </IonCardContent>
              </IonCard>
              <IonCard style={{ width: "40%" }}>
                <IonCardTitle
                  style={{ textAlign: "center", fontSize: "1.5rem" }}
                >
                  <IonLabel>Semanal</IonLabel>
                </IonCardTitle>
                <IonCardContent>
                  <div style={{ flexDirection: "column", textAlign: "center" }}>
                    <img
                      alt="promoções"
                      src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                      width="20"
                      height="20"
                    />
                    <IonButton
                      style={{ fontSize: "0.65rem" }}
                      routerLink="/home/contratante/pedidopagamento"
                      routerDirection="forward"
                    >
                      <IonLabel>Comprar</IonLabel>
                    </IonButton>
                  </div>
                </IonCardContent>
              </IonCard>
              <IonCard style={{ width: "40%" }}>
                <IonCardTitle
                  style={{ textAlign: "center", fontSize: "1.5rem" }}
                >
                  <IonLabel>Quizenal</IonLabel>
                </IonCardTitle>
                <IonCardContent>
                  <div style={{ flexDirection: "column", textAlign: "center" }}>
                    <img
                      alt="promoções"
                      src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                      width="20"
                      height="20"
                    />
                    <IonButton
                      routerLink="/home/contratante/pedidoMapa"
                      routerDirection="forward"
                      style={{ fontSize: "0.65rem", width: 80 }}
                    >
                      <IonLabel>Comprar</IonLabel>
                    </IonButton>
                  </div>
                </IonCardContent>
              </IonCard>
              <IonCard style={{ width: "40%" }}>
                <IonCardTitle
                  style={{ textAlign: "center", fontSize: "1.5rem" }}
                >
                  <IonLabel>Mensal</IonLabel>
                </IonCardTitle>
                <IonCardContent>
                  <div style={{ flexDirection: "column", textAlign: "center" }}>
                    <img
                      alt="promoções"
                      src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                      width="20"
                      height="20"
                    />
                    <IonButton
                      routerLink="/home/contratante/pedidoMapa"
                      routerDirection="forward"
                      style={{ fontSize: "0.65rem", width: 80 }}
                    >
                      <IonLabel>Comprar</IonLabel>
                    </IonButton>
                  </div>
                </IonCardContent>
              </IonCard>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PlanosPage;
