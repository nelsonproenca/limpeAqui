import {
  IonButtons,
  IonCard,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
  IonInput,
  IonCardTitle,
  IonAlert
} from "@ionic/react";
import { logIn, document, save, arrowBack } from "ionicons/icons";
import React, { useState } from "react";
import { RegistroUsuario } from "../interfaces/RegistroUsuario";
import UsuariosService from "../services/UsuariosService";
import { v4 as uuidv4 } from "uuid";
import { RouteComponentProps } from "react-router-dom";

interface LoginPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const RegistroPage: React.FC<LoginPageProps> = ({ match }) => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [erro, setErro] = useState(false);
  const [mensagemErro, setMensagemErro] = useState();

  const handleUsuarioClick = (e: CustomEvent) => {
    setUsuario(e.detail.value);
  };

  const handleSenhaClick = (e: CustomEvent) => {
    setSenha(e.detail.value);
  };

  const handleNomeClick = (e: CustomEvent) => {
    setNome(e.detail.value);
  };

  const handleEmailClick = (e: CustomEvent) => {
    setEmail(e.detail.value);
  };

  const handleCelularClick = (e: CustomEvent) => {
    setCelular(e.detail.value);
  };

  const handleSalvarClick = () => {
    let novoUsuario: RegistroUsuario = {
      usuario,
      senha,
      nome,
      email,
      celular,
      tipo: Number(match.params.id),
      id: uuidv4()
    };

    salvar(novoUsuario);
    limpar();
  };

  const salvar = (usuario: RegistroUsuario) => {
    UsuariosService.save(usuario).then(result => {
      setMensagemErro(result);
    });
  };

  const limpar = () => {
    setUsuario("");
    setSenha("");
    setNome("");
    setEmail("");
    setCelular("");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton routerLink="/home/login" routerDirection="back">
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Registro</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonAlert
          isOpen={erro}
          onDidDismiss={() => setErro(false)}
          header={"Erro"}
          message={mensagemErro}
          buttons={["OK"]}
        />
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <IonItem lines="full" style={{ textAlign: "right" }}>
                <IonIcon
                  icon={logIn}
                  slot="end"
                  style={{ fontSize: "2rem" }}
                ></IonIcon>
                <IonLabel style={{ fontSize: "1.5rem" }}>Login</IonLabel>
              </IonItem>
            </IonCardTitle>
          </IonCardHeader>
          <IonList lines="none">
            <IonItem>
              <IonLabel position="stacked">Usuário:</IonLabel>
              <IonInput
                type="text"
                value={usuario}
                placeholder="Entre com seu usuário."
                onIonChange={handleUsuarioClick}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Senha:</IonLabel>
              <IonInput
                type="password"
                value={senha}
                placeholder="Entre com sua senha."
                onIonChange={handleSenhaClick}
              ></IonInput>
            </IonItem>
          </IonList>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonItem lines="full" style={{ textAlign: "right" }}>
              <IonIcon
                icon={document}
                slot="end"
                style={{ fontSize: "2rem" }}
              ></IonIcon>
              <IonLabel style={{ fontSize: "1.5rem" }}>Dados</IonLabel>
            </IonItem>
          </IonCardHeader>
          <IonList lines="none">
            <IonItem>
              <IonLabel position="stacked">Nome:</IonLabel>
              <IonInput
                type="text"
                value={nome}
                placeholder="Entre com seu nome."
                onIonChange={handleNomeClick}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">E-mail:</IonLabel>
              <IonInput
                type="email"
                value={email}
                placeholder="Entre com sua e-mail."
                onIonChange={handleEmailClick}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Celular:</IonLabel>
              <IonInput
                type="tel"
                value={celular}
                placeholder="Entre com seu celular."
                pattern="^\d{3}\w\d{3}\w\d{3}"
                onIonChange={handleCelularClick}
              ></IonInput>
            </IonItem>
          </IonList>
        </IonCard>
        <IonItem lines="none">
          <IonButton
            size="default"
            color="success"
            expand="block"
            style={{ fontSize: "1.3rem", width: "100%" }}
            onClick={() => {
              handleSalvarClick();
            }}
          >
            <IonIcon icon={save} slot="end"></IonIcon>
            <IonLabel style={{ fontSize: "1rem" }}>Salvar</IonLabel>
          </IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default RegistroPage;
