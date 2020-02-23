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
  IonItem
} from "@ionic/react";
import {
  arrowBack,
  arrowForward,
  home,
  calendar,
  list,
  document,
  cash,
  time
} from "ionicons/icons";
import React from "react";

const PedidoResumoPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              routerLink="/home/contratante/pedidoobservacoes"
              routerDirection="back"
            >
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Pedido</IonTitle>
          <IonButtons slot="end" color="secundary">
            <IonButton
              routerDirection="forward"
              routerLink="/home/contratante/pedidopagamento"
            >
              <IonIcon icon={arrowForward} slot="end"></IonIcon>
              <IonLabel>6 de 7</IonLabel>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard style={{ textAlign: "center" }}>
          <IonItem lines="none" style={{ textAlign: "center" }}>
            <IonLabel style={{ fontSize: "1.2rem" }}>Resumo</IonLabel>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonItem lines="full">
            <IonLabel
              position="stacked"
              style={{
                fontSize: "1.2rem",
                marginBottom: "3px",
                paddingTop: "4px"
              }}
            >
              Local
            </IonLabel>
            <IonIcon
              icon={home}
              style={{ fontSize: "2rem" }}
              slot="start"
            ></IonIcon>
            <IonItem>
              <IonLabel
                color="secundary"
                class="ion-text-wrap"
                style={{ fontSize: "0.85rem" }}
              >
                Rua Bento Gonçalves, 11 - Baixa da Banheira - 2835-070 - Moita
              </IonLabel>
            </IonItem>
          </IonItem>

          <IonItem>
            <IonLabel
              position="stacked"
              style={{
                fontSize: "1.2rem",
                marginBottom: "3px",
                paddingTop: "4px"
              }}
            >
              Data e Hora
            </IonLabel>
            <IonIcon
              icon={calendar}
              style={{ fontSize: "2rem" }}
              slot="start"
            ></IonIcon>
            <IonItem>
              <IonLabel
                color="secundary"
                class="ion-text-wrap"
                style={{ fontSize: "0.85rem" }}
              >
                01/01/2010 00:00:00
              </IonLabel>
            </IonItem>
          </IonItem>

          <IonItem>
            <IonLabel
              position="stacked"
              style={{
                fontSize: "1.2rem",
                marginBottom: "3px",
                paddingTop: "4px"
              }}
            >
              Tarefas
            </IonLabel>
            <IonIcon
              icon={list}
              style={{ fontSize: "2rem" }}
              slot="start"
            ></IonIcon>
            <IonItem>
              <IonLabel
                color="secundary"
                class="ion-text-wrap"
                style={{ fontSize: "0.85rem" }}
              >
                Lavar louça, lavar roupas, limpar a casa.
              </IonLabel>
            </IonItem>
          </IonItem>
          <IonItem>
            <IonLabel
              position="stacked"
              style={{
                fontSize: "1.2rem",
                marginBottom: "3px",
                paddingTop: "4px"
              }}
            >
              Total de horas
            </IonLabel>
            <IonIcon
              icon={time}
              style={{ fontSize: "2rem" }}
              slot="start"
            ></IonIcon>
            <IonItem>
              <IonLabel
                color="secundary"
                class="ion-text-wrap"
                style={{ fontSize: "0.85rem" }}
              >
                5 horas
              </IonLabel>
            </IonItem>
          </IonItem>
          <IonItem>
            <IonLabel
              position="stacked"
              style={{
                fontSize: "1.2rem",
                marginBottom: "3px",
                paddingTop: "4px"
              }}
            >
              Valor
            </IonLabel>
            <IonIcon
              icon={cash}
              style={{ fontSize: "2rem" }}
              slot="start"
            ></IonIcon>
            <IonItem>
              <IonLabel color="secundary" style={{ fontSize: "0.85rem" }}>
                R$ 150,00
              </IonLabel>
            </IonItem>
          </IonItem>
          <IonItem>
            <IonLabel
              position="stacked"
              style={{
                fontSize: "1.2rem",
                marginBottom: "3px",
                paddingTop: "4px"
              }}
            >
              Observações
            </IonLabel>
            <IonIcon
              icon={document}
              style={{ fontSize: "2rem" }}
              slot="start"
            ></IonIcon>
            <IonItem>
              <IonLabel
                color="secundary"
                class="ion-text-wrap"
                style={{ fontSize: "0.85rem" }}
              >
                Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé,
                cursus quis, vehicula ac nisi. Todo mundo vê os porris que eu
                tomo, mas ninguém vê os tombis que eu levo! Nec orci ornare
                consequat. Praesent lacinia ultrices consectetur. Sed non ipsum
                felis. Manduma pindureta quium dia nois paga.
              </IonLabel>
            </IonItem>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PedidoResumoPage;
