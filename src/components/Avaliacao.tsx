import { IonIcon } from "@ionic/react";
import React from "react";
import { star } from "ionicons/icons";

interface AvaliacaoProps {
  avaliacao: number;
}

const Avaliacao: React.FunctionComponent<AvaliacaoProps> = ({ avaliacao }) => {
  let stars: any = [];

  for (let index = 0; index < avaliacao; index++) {
    stars.concat(<IonIcon icon={star} />);
  }
  return <h6>{stars}</h6>;
};

export default Avaliacao;
