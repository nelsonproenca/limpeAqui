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
  IonFab,
  IonFabButton,
  IonInput
} from "@ionic/react";
import { pin, arrowBack, arrowForward } from "ionicons/icons";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import { Pedido } from "../../../interfaces/Pedido";
import PedidosService from "../../../services/PedidosService";
import { v4 as uuidv4 } from "uuid";

interface PedidoPageProps extends RouteComponentProps<{ id: string }> {}

const PedidoMapaPage: React.FC<PedidoPageProps> = ({ match, history }) => {
  const [localServico, setLocalServico] = useState();
  const [pedidoId, setPedidoId] = useState();

  const handleLocalServicoChange = (e: CustomEvent) =>
    setLocalServico(e.detail.value);

  const handleOnclickNext = () => {
    gravarParcial();
    history.push(`/home/contratante/pedidodata/${pedidoId}`);
  };

  const handleOnclickBack = () => {
    history.push(`/home/contratante/bemvindo/{${match.params.id}`);
  };

  const gravarParcial = () => {
    setPedidoId(uuidv4());
    let pedido: Pedido = {
      id: pedidoId,
      localServico,
      contratanteId: match.params.id
    };

    PedidosService.saveLocal(pedido);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton routerDirection="back" onClick={handleOnclickBack}>
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Pedido</IonTitle>
          <IonButtons slot="end" color="secundary">
            <IonButton routerDirection="forward" onClick={handleOnclickNext}>
              <IonIcon icon={arrowForward} slot="end"></IonIcon>
              <IonLabel>1 de 7</IonLabel>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent style={{ textAlign: "center" }}>
        <IonItem lines="none" class="ion-padding">
          <img
            src="/assets/advance-card-map-madison.png"
            alt="mapa"
            style={{ height: "400px", width: "100%" }}
          />

          <IonFab vertical="top" horizontal="end">
            <IonFabButton>
              <IonIcon icon={pin}></IonIcon>
            </IonFabButton>
          </IonFab>
        </IonItem>
        <IonCard>
          <IonItem lines="none">
            <IonLabel
              class="ion-text-wrap"
              position="stacked"
              style={{ fontSize: "1.2rem" }}
            >
              Selecione um local no mapa. Ou digite um local abaixo.
            </IonLabel>
            <IonInput
              type="text"
              value={localServico}
              onIonChange={handleLocalServicoChange}
            ></IonInput>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PedidoMapaPage;
