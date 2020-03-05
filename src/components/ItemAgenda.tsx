import { IonIcon, IonItem, IonLabel, IonCard, IonAvatar } from "@ionic/react";
import React from "react";
import { ItemAgenda } from "../interfaces/ItemAgenda";
import Avaliacao from "./Avaliacao";

interface ItemAgendaProps {
  itemAgenda: ItemAgenda;
}

const ItemAgenda: React.FunctionComponent<ItemAgendaProps> = ({
  itemAgenda
}) => (
  <IonCard
    style={{
      fontSize: "1.3rem",
      height: 185,
      paddingTop: "3%"
    }}
  >
    <IonItem lines="none">
      <IonAvatar slot="start" style={{ width: 75, height: 75 }}>
        <img alt="foto" src={itemAgenda.imagem} />
        <IonLabel
          class="ion-text-wrap"
          style={{
            marginTop: "5px",
            textAlign: "center",
            fontSize: "0.40rem"
          }}
        >
          <h6>{itemAgenda.nome}</h6>
          {itemAgenda.avaliacao > 0 && (
            <Avaliacao avaliacao={itemAgenda.avaliacao} />
          )}
        </IonLabel>
      </IonAvatar>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <IonLabel
          style={{
            marginTop: "2px",
            marginBottom: "7px",
            textAlign: "right",
            marginRight: "20px"
          }}
        >
          <h1>{itemAgenda.dataServico}</h1>
        </IonLabel>
        <IonLabel
          style={{
            marginBottom: "7px",
            fontWeight: "bold"
          }}
        >
          <h2 style={{ fontWeight: "bold" }}>{itemAgenda.tipoServico}</h2>
        </IonLabel>
        <IonLabel style={{ marginBottom: "5px" }}>
          <h4>
            <span style={{ fontWeight: "bold" }}>Horas contratadas:</span>
            &nbsp;{itemAgenda.horasContratadas} horas
          </h4>
        </IonLabel>
        <IonLabel class="ion-text-wrap" style={{ marginBottom: "5px" }}>
          <h4>
            <span style={{ fontWeight: "bold" }}>Local:</span>&nbsp;
            {itemAgenda.localServico}
          </h4>
        </IonLabel>
        <IonLabel
          style={{
            marginTop: "2px",
            marginBottom: "2px",
            textAlign: "right",
            marginRight: "20px"
          }}
        >
          <h1>Valor: {itemAgenda.valorServico}</h1>
        </IonLabel>
      </div>
    </IonItem>
  </IonCard>
);

export default ItemAgenda;
