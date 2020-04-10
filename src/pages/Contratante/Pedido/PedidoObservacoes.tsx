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
  IonTextarea,
  IonList,
  IonToggle,
  IonRadioGroup,
  IonRadio
} from "@ionic/react";
import { arrowBack, arrowForward, paw } from "ionicons/icons";
import React from "react";

const PedidoObservacoesPage: React.FC = () => {
  const itens = [
    { id: 1, val: "Chave está embaixo do tapete.", isChecked: true },
    { id: 2, val: "Chave está na portaria.", isChecked: false },
    { id: 3, val: "Estarei em casa.", isChecked: false }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              routerLink="/home/contratante/pedidotarefa"
              routerDirection="back"
            >
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Pedido</IonTitle>
          <IonButtons slot="end" color="secundary">
            <IonButton
              routerDirection="forward"
              routerLink="/home/contratante/pedidoresumo"
            >
              <IonIcon icon={arrowForward} slot="end"></IonIcon>
              <IonLabel>5 de 7</IonLabel>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard style={{ textAlign: "center" }}>
          <IonItem lines="none" style={{ textAlign: "center" }}>
            <IonLabel style={{ fontSize: "1.5rem" }}>Observações</IonLabel>
          </IonItem>
        </IonCard>
        <div className="ion-padding">
          <IonItem>
            <IonTextarea
              rows={5}
              placeholder="Entre com mais informações..."
            ></IonTextarea>
          </IonItem>
        </div>

        <IonCard>
          <IonList>
            <IonRadioGroup>
              {itens.map(iten => (
                <IonItem key={iten.id}>
                  <IonLabel>{iten.val}</IonLabel>
                  <IonRadio
                    slot="start"
                    value={iten.id.toString()}
                    defaultChecked={iten.isChecked}
                  />
                </IonItem>
              ))}
            </IonRadioGroup>
          </IonList>
        </IonCard>
        <IonCard>
          <IonItem>
            <IonIcon icon={paw} slot="start"></IonIcon>
            <IonLabel>Existe algum pet ?</IonLabel>
            <IonToggle value="sim" onChange={() => {}} />
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PedidoObservacoesPage;
