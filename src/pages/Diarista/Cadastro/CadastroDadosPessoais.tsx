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
  IonCardHeader,
  IonCardSubtitle,
  IonInput,
  IonText,
  IonToggle,
  IonRadio,
  IonRadioGroup
} from "@ionic/react";
import { arrowBack, arrowForward } from "ionicons/icons";
import React, { useState, useEffect } from "react";
import { DiaristaCadastro } from "../../../interfaces/DiaristaCadastro";
import DiaristasService from "../../../services/DiaristasService";
import { RouteComponentProps } from "react-router";

interface DiaristaDetalhesPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const CadastroDadosPessoaisPage: React.FC<DiaristaDetalhesPageProps> = ({
  match,
  history
}) => {
  const [nomeCompleto, setNomeCompleto] = useState();
  const [celular, setCelular] = useState();
  const [email, setEmail] = useState();
  const [dataNascimento, setDataNascimento] = useState();
  const [contaBancaria, setContaBancaria] = useState();
  const [internetCelular, setInternetCelular] = useState();
  const [cep, setCep] = useState();
  const [endereco, setEndereco] = useState();
  const [numero, setNumero] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const [diarista, setDiarista] = useState<DiaristaCadastro>();

  useEffect(() => {
    const CarregarDados = () =>
      DiaristasService.get(match.params.id).then(result => setDiarista(result));

    CarregarDados();
  }, []);

  const handleOnClickNext = () => gravarParcial(diarista);

  const gravarParcial = (diaristaCadastro?: DiaristaCadastro) => {
    diaristaCadastro = {
      nome: nomeCompleto,
      celular,
      email,
      dataNascimento,
      contaBancariaSeuNome: contaBancaria,
      acessoInternetCelular: internetCelular,
      cep,
      endereco,
      numero,
      cidade,
      estado
    };

    DiaristasService.saveLocal(diaristaCadastro);
  };

  const handleOnChangeNome = (e: CustomEvent) =>
    setNomeCompleto(e.detail.value);
  const handleOnChangeEmail = (e: CustomEvent) => setEmail(e.detail.value);
  const handleOnChangeCelular = (e: CustomEvent) => setCelular(e.detail.value);
  const handleOnChangeDataNascimento = (e: CustomEvent) =>
    setDataNascimento(e.detail.value);
  const handleOnChangeContaBancaria = (e: CustomEvent) =>
    setContaBancaria(e.detail.value);
  const handleOnChangeInternetCelular = (e: CustomEvent) =>
    setInternetCelular(e.detail.value);
  const handleOnChangeCep = (e: CustomEvent) => setCep(e.detail.value);
  const handleOnChangeEndereco = (e: CustomEvent) =>
    setEndereco(e.detail.value);
  const handleOnChangeNumero = (e: CustomEvent) => setNumero(e.detail.value);
  const handleOnChangeCidade = (e: CustomEvent) => setCidade(e.detail.value);
  const handleOnChangeEstado = (e: CustomEvent) => setEstado(e.detail.value);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              routerLink="/home/diarista/cadastrocomofunciona/"
              routerDirection="back"
            >
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Cadastro</IonTitle>
          <IonButtons slot="end" color="secundary">
            <IonButton
              routerDirection="forward"
              routerLink="/home/diarista/cadastrooutrosdados"
              onClick={handleOnClickNext}
            >
              <IonIcon icon={arrowForward} slot="end"></IonIcon>
              <IonLabel>2 de 8</IonLabel>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard style={{ textAlign: "center" }}>
          <IonItem lines="none" style={{ textAlign: "center" }}>
            <IonLabel style={{ fontSize: "1.2rem" }}>Dados Pessoais</IonLabel>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonLabel position="stacked">Nome Completo:</IonLabel>
            <IonInput type="text" onIonChange={handleOnChangeNome}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Celular (WhatsApp):</IonLabel>
            <IonInput
              type="text"
              placeholder="Ex. (11) 99999-9999"
              onIonChange={handleOnChangeCelular}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">E~mail</IonLabel>
            <IonInput
              type="text"
              placeholder="Ex. boo@contoso.com"
              onIonChange={handleOnChangeEmail}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Data de Nascimento</IonLabel>
            <IonInput
              type="date"
              placeholder="Ex. 99/99/9999"
              onIonChange={handleOnChangeDataNascimento}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel class="ion-text-wrap" position="stacked">
              Tem conta bancária em seu nome?
            </IonLabel>
            <IonToggle slot="end" onIonChange={handleOnChangeContaBancaria} />
          </IonItem>
          <IonItem lines="none">
            <IonLabel class="ion-text-wrap" position="stacked">
              Tem acesso a internet no seu celular ?
              <IonText color="danger">*</IonText>
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonRadioGroup
              value="1"
              onIonChange={handleOnChangeInternetCelular}
            >
              <IonItem lines="none">
                <IonLabel>Sim, só o wifi</IonLabel>
                <IonRadio slot="start" value="1" />
              </IonItem>
              <IonItem lines="none">
                <IonLabel>Sim, só 3G/4G</IonLabel>
                <IonRadio slot="start" value="2" />
              </IonItem>
              <IonItem lines="none">
                <IonLabel>Sim, wifi e 3G/4G</IonLabel>
                <IonRadio slot="start" value="3" />
              </IonItem>
              <IonItem lines="none">
                <IonLabel>Não tenho acesso</IonLabel>
                <IonRadio slot="start" value="4" />
              </IonItem>
            </IonRadioGroup>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Endereço</IonCardSubtitle>
          </IonCardHeader>
          <IonItem>
            <IonLabel position="stacked">CEP:</IonLabel>
            <IonInput type="text" onIonChange={handleOnChangeCep}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Endereço(Rua e Bairro ):</IonLabel>
            <IonInput
              type="text"
              onIonChange={handleOnChangeEndereco}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Endereço(Numero):</IonLabel>
            <IonInput
              type="number"
              onIonChange={handleOnChangeNumero}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Cidade</IonLabel>
            <IonInput type="text" onIonChange={handleOnChangeCidade}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Estado</IonLabel>
            <IonInput
              type="number"
              onIonChange={handleOnChangeEstado}
            ></IonInput>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CadastroDadosPessoaisPage;
