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
  IonDatetime,
  IonInput
} from "@ionic/react";
import { arrowBack, arrowForward } from "ionicons/icons";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";

interface PedidosPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const PedidoDataPage: React.FC<PedidosPageProps> = ({ match, history }) => {
  const [dia, setDia] = useState(0);
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState(0);
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
  ];

  const handleClickNext = () => {
    history.push("/home/contratante/pedidoservico");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              routerLink="/home/contratante/pedidomapa"
              routerDirection="back"
            >
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Pedido</IonTitle>
          <IonButtons slot="end" color="secundary">
            <IonButton onClick={handleClickNext}>
              <IonIcon icon={arrowForward} slot="end"></IonIcon>
              <IonLabel>2 de 7</IonLabel>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard style={{ textAlign: "center" }}>
          <IonItem
            lines="none"
            class="ion-padding"
            style={{ textAlign: "center" }}
          >
            <IonLabel
              class="ion-text-wrap"
              position="stacked"
              style={{ fontSize: "1.2rem" }}
            >
              Selecione a data do serviço.
            </IonLabel>
            <IonDatetime
              pickerOptions={{
                buttons: [
                  {
                    text: "Selecionar",
                    handler: ({ day, month, year }) => {
                      let mes = month.value;
                      let nomeMes = meses[mes - 1 < 0 ? 0 : mes - 1];

                      setAno(year.value);
                      setMes(nomeMes);
                      setDia(day.value);
                    }
                  },
                  {
                    text: "Cancelar",
                    handler: e => {
                      console.log(e);
                      console.log("Clicked Log. Do not Dismiss.");
                    }
                  }
                ]
              }}
              displayFormat="DD/MM/YYYY"
              placeholder="Escolha a data do serviço."
            ></IonDatetime>
          </IonItem>
          <IonCard style={{ height: 50, textAlign: "center" }}>
            <IonItem lines="none" style={{ textAlign: "center" }}>
              <IonLabel style={{ fontSize: "1rem" }}>
                {mes.length === 0 ? "" : mes + "/" + ano}.
              </IonLabel>
            </IonItem>
          </IonCard>
          <IonCard>
            <IonItem lines="none" style={{ textAlign: "center" }}>
              <IonLabel style={{ fontSize: "5rem" }}>{dia}</IonLabel>
            </IonItem>
          </IonCard>
          <IonCard>
            <IonItem lines="none" style={{ textAlign: "center" }}>
              <IonLabel>A partir das </IonLabel>
            </IonItem>
            <IonItem lines="none" style={{ textAlign: "center" }}>
              <IonInput type="time" style={{ fontSize: "3rem" }} />
            </IonItem>
          </IonCard>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PedidoDataPage;
