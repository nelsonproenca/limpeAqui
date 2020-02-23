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
  IonCardContent
} from "@ionic/react";
import { arrowBack, playCircle, save, create } from "ionicons/icons";
import React from "react";

const CadastroResumoPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              routerLink="/home/diarista/cadastrodisponibilidade"
              routerDirection="back"
            >
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Cadastro</IonTitle>
          <IonLabel class="ion-padding" slot="end">
            Passo 8 de 8
          </IonLabel>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard style={{ textAlign: "center" }}>
          <IonItem lines="none" style={{ textAlign: "center" }}>
            <IonLabel style={{ fontSize: "1.2rem" }}>Resumo</IonLabel>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonItem lines="none">
            <IonIcon icon={playCircle} slot="start"></IonIcon>
            <IonLabel
              class="ion-text-wrap"
              style={{ fontSize: "0.75rem", fontWeight: "bold" }}
            >
              Esta ciente dos ganhos e de que não tem nenhum vínculo
              empregatício?
            </IonLabel>
          </IonItem>
          <IonItem lines="full">
            <IonIcon slot="start"></IonIcon>
            <IonLabel color="secundary" style={{ fontSize: "0.85rem" }}>
              Sim ldfsdfoisdyoisodfuosufdiosudofusoufsoufdoi
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonIcon icon={playCircle} slot="start"></IonIcon>
            <IonLabel
              class="ion-text-wrap"
              style={{ fontSize: "0.75rem", fontWeight: "bold" }}
            >
              Tem interesse em fazer parte do LimpeAqui em Londrina ?
            </IonLabel>
          </IonItem>
          <IonItem lines="full">
            <IonIcon slot="start"></IonIcon>
            <IonLabel color="secundary" style={{ fontSize: "0.85rem" }}>
              Sim
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonIcon icon={playCircle} slot="start"></IonIcon>
            <IonLabel
              class="ion-text-wrap"
              style={{ fontSize: "0.75rem", fontWeight: "bold" }}
            >
              Nome Completo:
            </IonLabel>
          </IonItem>
          <IonItem lines="full">
            <IonIcon slot="start"></IonIcon>
            <IonLabel color="secundary" style={{ fontSize: "0.85rem" }}>
              Nome teste
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonIcon icon={playCircle} slot="start"></IonIcon>
            <IonLabel
              class="ion-text-wrap"
              style={{ fontSize: "0.75rem", fontWeight: "bold" }}
            >
              Celular (WhatsApp):
            </IonLabel>
          </IonItem>
          <IonItem lines="full">
            <IonIcon slot="start"></IonIcon>
            <IonLabel color="secundary" style={{ fontSize: "0.85rem" }}>
              999 999 999
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonIcon icon={playCircle} slot="start"></IonIcon>
            <IonLabel
              class="ion-text-wrap"
              style={{ fontSize: "0.75rem", fontWeight: "bold" }}
            >
              E-mail
            </IonLabel>
          </IonItem>
          <IonItem lines="full">
            <IonIcon slot="start"></IonIcon>
            <IonLabel color="secundary" style={{ fontSize: "0.85rem" }}>
              teste@contoso.com
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonIcon icon={playCircle} slot="start"></IonIcon>
            <IonLabel
              class="ion-text-wrap"
              style={{ fontSize: "0.75rem", fontWeight: "bold" }}
            >
              Data de Nascimento
            </IonLabel>
          </IonItem>
          <IonItem lines="full">
            <IonIcon slot="start"></IonIcon>
            <IonLabel color="secundary" style={{ fontSize: "0.85rem" }}>
              99/99/9999
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonIcon icon={playCircle} slot="start"></IonIcon>
            <IonLabel
              class="ion-text-wrap"
              style={{ fontSize: "0.75rem", fontWeight: "bold" }}
            >
              Endereço
            </IonLabel>
          </IonItem>
          <IonItem lines="full">
            <IonIcon slot="start"></IonIcon>
            <IonLabel
              color="secundary"
              class="ion-text-wrap"
              style={{ fontSize: "0.85rem" }}
            >
              Rua teste - Bairro teste n. 23 - Cidade - Estado
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonIcon icon={playCircle} slot="start"></IonIcon>
            <IonLabel
              class="ion-text-wrap"
              style={{ fontSize: "0.75rem", fontWeight: "bold" }}
            >
              Dias e horários disponíveis na semana?
            </IonLabel>
          </IonItem>
          <IonItem lines="full">
            <IonIcon slot="start"></IonIcon>
            <IonLabel
              color="secundary"
              class="ion-text-wrap"
              style={{ fontSize: "0.85rem" }}
            >
              Segunda(00:00 - 99:00), Terça(00:00 - 99:00), Sexta(00:00 - 99:00)
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonIcon icon={playCircle} slot="start"></IonIcon>
            <IonLabel
              class="ion-text-wrap"
              style={{ fontSize: "0.75rem", fontWeight: "bold" }}
            >
              Tem MEI (Micro Empreendedor Individual) ?
            </IonLabel>
          </IonItem>
          <IonItem lines="full">
            <IonIcon slot="start"></IonIcon>
            <IonLabel color="secundary" style={{ fontSize: "0.85rem" }}>
              Sim
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonIcon icon={playCircle} slot="start"></IonIcon>
            <IonLabel
              class="ion-text-wrap"
              style={{ fontSize: "0.75rem", fontWeight: "bold" }}
            >
              Tem acesso a internet no seu celular ?
            </IonLabel>
          </IonItem>
          <IonItem lines="full">
            <IonIcon slot="start"></IonIcon>
            <IonLabel color="secundary" style={{ fontSize: "0.85rem" }}>
              Sim, só o wifi
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonIcon icon={playCircle} slot="start"></IonIcon>
            <IonLabel
              class="ion-text-wrap"
              style={{ fontSize: "0.75rem", fontWeight: "bold" }}
            >
              Tem conta bancário em seu nome ?
            </IonLabel>
          </IonItem>
          <IonItem lines="full">
            <IonIcon slot="start"></IonIcon>
            <IonLabel color="secundary" style={{ fontSize: "0.85rem" }}>
              Sim
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonIcon icon={playCircle} slot="start"></IonIcon>
            <IonLabel
              class="ion-text-wrap"
              style={{ fontSize: "0.75rem", fontWeight: "bold" }}
            >
              Tem experiência como profissional de limpeza ?
            </IonLabel>
          </IonItem>
          <IonItem lines="full">
            <IonIcon slot="start"></IonIcon>
            <IonLabel color="secundary" style={{ fontSize: "0.85rem" }}>
              Sim, de maneira informal
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonIcon icon={playCircle} slot="start"></IonIcon>
            <IonLabel
              class="ion-text-wrap"
              style={{ fontSize: "0.75rem", fontWeight: "bold" }}
            >
              Trabalhar com a Limpe Aqui seria
            </IonLabel>
          </IonItem>
          <IonItem lines="full">
            <IonIcon slot="start"></IonIcon>
            <IonLabel color="secundary" style={{ fontSize: "0.85rem" }}>
              Renda principal
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonIcon icon={playCircle} slot="start"></IonIcon>
            <IonLabel
              class="ion-text-wrap"
              style={{ fontSize: "0.75rem", fontWeight: "bold" }}
            >
              Nos conte um pouco sobre sua experiência profisisonal no ramo de
              limpeza:
            </IonLabel>
          </IonItem>
          <IonItem lines="full">
            <IonIcon slot="start"></IonIcon>
            <IonLabel
              color="secundary"
              class="ion-text-wrap"
              style={{ fontSize: "0.85rem" }}
            >
              Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
              Bla Bla Bla Bla
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonIcon icon={playCircle} slot="start"></IonIcon>
            <IonLabel
              class="ion-text-wrap"
              style={{ fontSize: "0.75rem", fontWeight: "bold" }}
            >
              Explique DETALHADAMENTE como você limparia o banheiro e os
              produtos que utilizaria:
            </IonLabel>
          </IonItem>
          <IonItem lines="full">
            <IonIcon slot="start"></IonIcon>
            <IonLabel
              color="secundary"
              class="ion-text-wrap"
              style={{ fontSize: "0.85rem" }}
            >
              Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
              Bla Bla Bla Bla
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonIcon icon={playCircle} slot="start"></IonIcon>
            <IonLabel
              class="ion-text-wrap"
              style={{ fontSize: "0.75rem", fontWeight: "bold" }}
            >
              Por onde prefere ser avisada(o) sobre a proposta de serviço?
            </IonLabel>
          </IonItem>
          <IonItem lines="full">
            <IonIcon slot="start"></IonIcon>
            <IonLabel color="secundary" style={{ fontSize: "0.85rem" }}>
              WhatsApp
            </IonLabel>
          </IonItem>
        </IonCard>

        <div
          className="ion-padding"
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >
          <IonCard
            routerDirection="forward"
            routerLink="/home/diarista/bemvindo"
            style={{ width: 130 }}
            color="success"
          >
            <IonCardContent>
              <div style={{ flexDirection: "column", textAlign: "center" }}>
                <IonIcon
                  icon={save}
                  style={{ fontSize: "2.5rem", textAlign: "center" }}
                ></IonIcon>
                <IonLabel style={{ fontSize: "0.85rem" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Salvar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </IonLabel>
              </div>
            </IonCardContent>
          </IonCard>
          <IonCard
            routerDirection="back"
            routerLink="/home/diarista/cadastrocomofunciona"
            style={{ width: 130 }}
            color="success"
          >
            <IonCardContent>
              <div style={{ flexDirection: "column", textAlign: "center" }}>
                <IonIcon
                  icon={create}
                  style={{ fontSize: "2.5rem", textAlign: "center" }}
                ></IonIcon>
                <IonLabel style={{ fontSize: "0.85rem" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Corrigir&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </IonLabel>
              </div>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CadastroResumoPage;
