import {
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonMenuButton,
  IonCardTitle
} from "@ionic/react";
import React from "react";

const VantagensPage: React.FC = () => {
  const textoProfissionaisVerificados =
    "As diaristas cadastradas no Limpe Aqui são qualificadas e possuem experiência comprovada, todas são verificadas, as diaristas são avaliadas após cada limpeza.";
  const textoContratePorHora =
    "Você escolhe entre as opções que vão de 1 até 8 horas de duração. Defina o melhor dia e horário para você. Os dias disponíveis para os serviços são de segunda à segunda das 7h às 21h";
  const textoPagamentoSeguro =
    "No valor da limpeza estão inclusos o serviço prestado, transporte e alimentação do profissional. Você pode pagar com Boleto Bancário, Depósito em Conta ou Paypal.";

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Vantagens</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader style={{ textAlign: "center" }}>
            <IonCardTitle>COMO FUNCIONA</IonCardTitle>
            <IonCardSubtitle>
              Uma contratação, muitas vantagens!
            </IonCardSubtitle>
          </IonCardHeader>
          <IonList lines="none">
            <IonItem>
              <IonLabel style={{ fontWeight: "bold", fontSize: "1rem" }}>
                Profissionais Verificados
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel
                class="ion-text-wrap"
                color="secundary"
                style={{ fontSize: "0.8rem" }}
              >
                {textoProfissionaisVerificados}
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonLabel style={{ fontWeight: "bold", fontSize: "1rem" }}>
                Contrate por Hora
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel
                color="secundary"
                class="ion-text-wrap"
                style={{ fontSize: "0.8rem" }}
              >
                {textoContratePorHora}
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonLabel style={{ fontWeight: "bold", fontSize: "1rem" }}>
                Pagamento Seguro
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonLabel
                color="secundary"
                class="ion-text-wrap"
                style={{ fontSize: "0.8rem" }}
              >
                {textoPagamentoSeguro}
              </IonLabel>
            </IonItem>
          </IonList>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default VantagensPage;
