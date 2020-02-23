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
  IonCheckbox,
  IonCardContent,
  IonCardHeader,
  IonInput,
  IonText,
  IonRadioGroup,
  IonRadio,
  IonCardSubtitle,
  IonList
} from "@ionic/react";
import { arrowBack, arrowForward } from "ionicons/icons";
import React from "react";

const CadastroDisponibilidadePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              routerLink="/home/diarista/cadastromapa"
              routerDirection="back"
            >
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Cadastro</IonTitle>
          <IonButtons slot="end" color="secundary">
            <IonButton
              routerDirection="forward"
              routerLink="/home/diarista/cadastroresumo"
            >
              <IonIcon icon={arrowForward} slot="end"></IonIcon>
              <IonLabel>7 de 8</IonLabel>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent style={{ textAlign: "center" }}>
        <IonCard style={{ textAlign: "center" }}>
          <IonItem lines="none" style={{ textAlign: "center" }}>
            <IonLabel style={{ fontSize: "1.2rem" }}>Disponibilidade</IonLabel>
          </IonItem>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>
              Quais dias e horários disponíveis na semana ?
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonCheckbox slot="start" value="1" checked={false} />
              <IonLabel style={{ width: 120 }}>Segunda</IonLabel>
              <IonInput type="time" style={{ width: 100 }} />
              <IonInput type="time" style={{ width: 100 }} />
            </IonItem>
            <IonItem>
              <IonCheckbox slot="start" value="1" checked={false} />
              <IonLabel style={{ width: 120 }}>Terça</IonLabel>
              <IonInput type="time" style={{ width: 100 }} />
              <IonInput type="time" style={{ width: 100 }} />
            </IonItem>
            <IonItem>
              <IonCheckbox slot="start" value="1" checked={false} />
              <IonLabel style={{ width: 120 }}>Quarta</IonLabel>
              <IonInput type="time" style={{ width: 100 }} />
              <IonInput type="time" style={{ width: 100 }} />
            </IonItem>
            <IonItem>
              <IonCheckbox slot="start" value="1" checked={false} />
              <IonLabel style={{ width: 120 }}>Quinta</IonLabel>
              <IonInput type="time" style={{ width: 100 }} />
              <IonInput type="time" style={{ width: 100 }} />
            </IonItem>
            <IonItem>
              <IonCheckbox slot="start" value="1" checked={false} />
              <IonLabel style={{ width: 120 }}>Sexta</IonLabel>
              <IonInput type="time" style={{ width: 100 }} />
              <IonInput type="time" style={{ width: 100 }} />
            </IonItem>
            <IonItem>
              <IonCheckbox slot="start" value="1" checked={false} />
              <IonLabel style={{ width: 120 }}>Sábado</IonLabel>
              <IonInput type="time" style={{ width: 100 }} />
              <IonInput type="time" style={{ width: 100 }} />
            </IonItem>
            <IonItem>
              <IonCheckbox slot="start" value="1" checked={false} />
              <IonLabel style={{ width: 120 }}>Domingo</IonLabel>
              <IonInput type="time" style={{ width: 100 }} />
              <IonInput type="time" style={{ width: 100 }} />
            </IonItem>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonLabel class="ion-text-wrap" style={{ fontSize: "0.85rem" }}>
              Por onde prefere ser avisada (o) sobre a proposta de serviço ?
              <IonText color="danger">*</IonText>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonList lines="none">
              <IonRadioGroup value="biff">
                <IonItem>
                  <IonLabel>WhatsApp</IonLabel>
                  <IonRadio slot="start" value="biff" />
                </IonItem>
                <IonItem>
                  <IonLabel>SMS</IonLabel>
                  <IonRadio slot="start" value="griff" />
                </IonItem>
                <IonItem>
                  <IonLabel>E-mail</IonLabel>
                  <IonRadio slot="start" value="buford" />
                </IonItem>
                <IonItem>
                  <IonLabel>Todos</IonLabel>
                  <IonRadio slot="start" value="buford" />
                </IonItem>
              </IonRadioGroup>
            </IonList>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CadastroDisponibilidadePage;
