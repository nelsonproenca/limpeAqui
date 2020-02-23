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
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonList,
  IonRadio,
  IonRadioGroup,
  IonCardContent
} from "@ionic/react";
import { arrowBack, add, card, cart, arrowForward } from "ionicons/icons";
import React from "react";

const PedidoPagamentoPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              routerLink="/home/contratante/pedidoresumo"
              routerDirection="back"
            >
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Pedido</IonTitle>
          <IonLabel class="ion-padding" slot="end">
            Passo 7 de 7
          </IonLabel>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard style={{ textAlign: "center" }}>
          <IonItem lines="none" style={{ textAlign: "center" }}>
            <IonLabel style={{ fontSize: "1.2rem" }}>Pagamento</IonLabel>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Adicione um meio de pagamento</IonCardSubtitle>
          </IonCardHeader>

          <IonGrid>
            <IonRow>
              <IonCol size="12">
                <IonItem>
                  <IonLabel position="stacked">Número do cartão</IonLabel>
                  <IonInput
                    type="text"
                    placeholder="Ex. 9999 9999 9999 9999"
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12">
                <IonItem>
                  <IonLabel position="stacked">Nome do titular</IonLabel>
                  <IonInput
                    type="text"
                    placeholder="Ex. Fulano de tal"
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <IonItem>
                  <IonLabel position="stacked">Validade</IonLabel>
                  <IonInput type="text" placeholder="Ex. 12/2030"></IonInput>
                </IonItem>
              </IonCol>
              <IonCol size="6">
                <IonItem>
                  <IonLabel position="stacked">CVV</IonLabel>
                  <IonInput type="number" placeholder="Ex. 030"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonButton
            size="default"
            color="warning"
            expand="block"
            style={{ fontSize: "1.3rem", width: "100%" }}
            routerDirection="forward"
            routerLink="/home/contratante/pedidotarefa"
          >
            <IonIcon icon={add} slot="end"></IonIcon>
            <IonLabel style={{ fontSize: "1rem" }}>Adicionar</IonLabel>
          </IonButton>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Selecione um meio de pagamento</IonCardSubtitle>
          </IonCardHeader>
          <IonList>
            <IonRadioGroup value="card1">
              <IonItem>
                <IonIcon icon={card} slot="start"></IonIcon>
                <IonLabel style={{ fontSize: "0.90rem" }}>
                  Cartão: 9999 9999 9999 9999
                </IonLabel>
                <IonRadio slot="end" value="card1" />
              </IonItem>
              <IonItem>
                <IonIcon icon={card} slot="start"></IonIcon>
                <IonLabel style={{ fontSize: "0.9rem" }}>
                  Cartão: 0000 0000 0000 0000
                </IonLabel>
                <IonRadio slot="end" value="card2" />
              </IonItem>
            </IonRadioGroup>
          </IonList>
        </IonCard>
        <div
          className="ion-padding"
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >
          <IonCard
            routerDirection="forward"
            routerLink="/home/planos"
            style={{ width: 130 }}
            color="success"
          >
            <IonCardContent>
              <div style={{ flexDirection: "column", textAlign: "center" }}>
                <IonIcon
                  icon={arrowForward}
                  style={{ fontSize: "2.5rem", textAlign: "center" }}
                ></IonIcon>
                <IonLabel style={{ fontSize: "0.85rem" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </IonLabel>
              </div>
            </IonCardContent>
          </IonCard>
          <IonCard
            routerLink="/home/contratante/bemvindo"
            routerDirection="forward"
            style={{ width: 130 }}
            color="success"
          >
            <IonCardContent>
              <div style={{ flexDirection: "column", textAlign: "center" }}>
                <IonIcon
                  icon={cart}
                  style={{ fontSize: "2.5rem", textAlign: "center" }}
                ></IonIcon>
                <IonLabel style={{ fontSize: "0.85rem" }}>Pagamento</IonLabel>
              </div>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PedidoPagamentoPage;
