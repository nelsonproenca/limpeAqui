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
  IonTextarea
} from "@ionic/react";
import { arrowBack, arrowForward } from "ionicons/icons";
import React from "react";

const CadastroExperienciaPage: React.FC = () => {
  const textoLimparBanheiro =
    "Ao chegar na casa do cliente, você vê que o banheiro está com as paredes e teto com mofo, o vidro do box, a pia e o vaso sanitário também estão sujos. Você precisa deixar o banheiro limpo e organizado como na foto abaixo e deixá-lo perfumado. *Explique DETALHADAMENTE como você limparia o banheiro e os produtos que utilizaria: ";

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              routerLink="/home/diarista/cadastrooutrosdados"
              routerDirection="back"
            >
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Cadastro</IonTitle>
          <IonButtons slot="end" color="secundary">
            <IonButton
              routerDirection="forward"
              routerLink="/home/diarista/cadastromapa"
            >
              <IonIcon icon={arrowForward} slot="end"></IonIcon>
              <IonLabel>5 de 8</IonLabel>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent style={{ textAlign: "center" }}>
        <IonCard style={{ textAlign: "center" }}>
          <IonItem lines="none" style={{ textAlign: "center" }}>
            <IonLabel style={{ fontSize: "1.2rem" }}>Experiências</IonLabel>
          </IonItem>
        </IonCard>
        <IonCard>
          <IonItem lines="none">
            <IonLabel class="ion-text-wrap" style={{ fontSize: "0.85rem" }}>
              Nos conte um pouco sobre sua experiência profisisonal no ramo de
              limpeza: Quanto tempo? Onde já trabalhou?
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonTextarea rows={4} placeholder="Sua resposta"></IonTextarea>
          </IonItem>
          <IonItem lines="none">
            <img
              alt="imagem banheiro"
              src="/assets/banheiro-finalizado-1167790.jpg"
              width="100"
            />
          </IonItem>
          <IonItem lines="none">
            <IonLabel class="ion-text-wrap" style={{ fontSize: "0.85rem" }}>
              {textoLimparBanheiro}
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonTextarea rows={4} placeholder="Sua resposta"></IonTextarea>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CadastroExperienciaPage;
