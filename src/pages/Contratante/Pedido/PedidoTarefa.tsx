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
  IonList,
  IonCheckbox,
  IonRange
} from "@ionic/react";
import { arrowBack, arrowForward } from "ionicons/icons";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";

interface PedidosPageProps
  extends RouteComponentProps<{ idPedido: string; tipoServico: string }> {}

const PedidoTarefaPage: React.FC<PedidosPageProps> = ({ match, history }) => {
  const [total, setTotal] = useState(0);
  const [horas, setHoras] = useState(0);

  const handleOnChange = (e: CustomEvent) => {
    debugger;
    let parcial = 0;

    if (e.detail.checked) {
      parcial = total + parseInt(e.detail.value);
    } else {
      parcial = total - parseInt(e.detail.value);
    }

    let horas = parcial % 60;
    setHoras(horas);
    setTotal(parcial);

    if (horas > 12) {
      setHoras(0);
      alert("Numero de horas inváliudo");
    }

    console.log(horas);
    e.detail.checked = true;
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              routerLink={`/home/contratante/pedidoservico/${match.params.idPedido}`}
              routerDirection="back"
            >
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Pedido</IonTitle>
          <IonButtons slot="end" color="secundary">
            <IonButton
              routerDirection="forward"
              routerLink="/home/contratante/pedidoobservacoes"
            >
              <IonIcon icon={arrowForward} slot="end"></IonIcon>
              <IonLabel>4 de 7</IonLabel>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard style={{ textAlign: "center" }}>
          <IonItem lines="none" style={{ textAlign: "center" }}>
            <IonLabel style={{ fontSize: "1.2rem" }}>Tarefas</IonLabel>
          </IonItem>
        </IonCard>

        <IonCard style={{ textAlign: "center" }}>
          <IonList>
            <IonItem>
              <IonLabel>Limpar o quarto</IonLabel>
              <IonCheckbox
                slot="start"
                value="60"
                checked={false}
                onIonChange={handleOnChange}
              />
            </IonItem>
            <IonItem>
              <IonLabel>Limpar a cozinha</IonLabel>
              <IonCheckbox
                slot="start"
                value="60"
                checked={false}
                onIonChange={handleOnChange}
              />
            </IonItem>
            <IonItem>
              <IonLabel>Lavar louça</IonLabel>
              <IonCheckbox
                slot="start"
                value="60"
                checked={false}
                onIonChange={handleOnChange}
              />
            </IonItem>
            <IonItem>
              <IonLabel>Limpar o banheiro</IonLabel>
              <IonCheckbox
                slot="start"
                value="60"
                checked={false}
                onIonChange={handleOnChange}
              />
            </IonItem>
            <IonItem>
              <IonLabel>Limpar as janelas</IonLabel>
              <IonCheckbox
                slot="start"
                value="60"
                checked={false}
                onIonChange={handleOnChange}
              />
            </IonItem>
            <IonItem lines="none">
              <IonLabel>Lavar Roupas</IonLabel>
              <IonCheckbox
                slot="start"
                value="60"
                checked={false}
                onIonChange={handleOnChange}
              />
            </IonItem>
          </IonList>
        </IonCard>
        <IonCard>
          <IonItem>
            <IonLabel>Total das tarefas:</IonLabel>
            <IonLabel>{horas} Horas</IonLabel>
          </IonItem>
          <IonItem>
            <IonRange color="danger" min={1} max={12} pin={true}>
              <IonLabel slot="start">1</IonLabel>
              <IonLabel slot="end">12</IonLabel>
            </IonRange>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PedidoTarefaPage;
