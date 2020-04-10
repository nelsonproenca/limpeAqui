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
import { arrowBack, arrowForward, home } from "ionicons/icons";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import { Pedido } from "../../../interfaces/Pedido";
import PedidosService from "../../../services/PedidosService";

interface PedidosPageProps
  extends RouteComponentProps<{
    idPedido: string;
  }> {}

const PedidoDataPage: React.FC<PedidosPageProps> = ({ match, history }) => {
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

  const [dia, setDia] = useState(0);
  const [mes, setMes] = useState(0);
  const [ano, setAno] = useState(0);
  const [hora, setHora] = useState<string>("00:00");
  const [nomeMes, setNomeMes] = useState("");

  const handleClickNext = () => {
    gravarParcial();
    history.push(`/home/contratante/pedidoservico/${match.params.idPedido}`);
  };

  const handleClickBack = () => {
    history.push(`/home/contratante/pedidomapa/${match.params.idPedido}`);
  };

  const handleChangeHora = (e: CustomEvent) => setHora(e.detail.value);

  const gravarParcial = () => {
    debugger;

    let dataServico = `${ano}-${mes}-${dia}`;

    let pedido: Pedido = {
      id: match.params.idPedido,
      dataServico,
      horaServico: hora,
      diaSemanaServico: new Date(dataServico).getDay().toString()
    };

    PedidosService.saveLocal(pedido);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={handleClickBack} routerDirection="back">
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
            <IonDatetime
              pickerOptions={{
                buttons: [
                  {
                    text: "Selecionar",
                    handler: e => {
                      console.log(e);
                      let mes = e.month.value;
                      let nomeMes = meses[mes - 1 < 0 ? 0 : mes - 1];

                      setNomeMes(nomeMes);
                      setAno(e.year.value);
                      setMes(e.month.value);
                      setDia(e.day.value);
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
              min="2020-03-01"
              placeholder="Escolha a data do serviço."
            ></IonDatetime>
          </IonItem>
          <IonCard style={{ height: 50, textAlign: "center" }}>
            <IonItem lines="none" style={{ textAlign: "center" }}>
              <IonLabel style={{ fontSize: "1rem" }}>
                {nomeMes.length === 0 ? "" : nomeMes + "/" + ano}.
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
              <IonInput
                type="time"
                value={hora}
                style={{ fontSize: "3rem" }}
                onIonChange={handleChangeHora}
              />
            </IonItem>
          </IonCard>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PedidoDataPage;
