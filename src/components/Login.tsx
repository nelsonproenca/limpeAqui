import {
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
  IonInput,
  IonAlert,
  IonCardTitle,
  IonCardContent
} from "@ionic/react";
import { logoFacebook, logoGoogle, logIn } from "ionicons/icons";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import UsuariosService from "../services/UsuariosService";
import { RegistroUsuario } from "../interfaces/RegistroUsuario";

interface LoginPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const LoginPage: React.FC<LoginPageProps> = ({ match, history }) => {
  const handleEntrarClick = (login: string, senha: string) => {
    if (
      login === undefined ||
      senha === undefined ||
      login.trim().length === 0 ||
      senha.trim().length === 0
    ) {
      setErro(true);
      setMensagemErro("Usuario/Senha não podem ser vazio.");
      setSenha("");
      setUsuario("");
      return;
    }
    buscarUsuario(login, senha);
  };

  const buscarUsuario = (login: string, senha: string) => {
    let usuarios: RegistroUsuario[] = [];

    UsuariosService.load().then(result => {
      usuarios = result;
      if (usuarios.length > 1) {
        usuarios.map(usuario => {
          if (usuario.usuario === login && usuario.senha === senha) {
            if (usuario.tipo === 1) {
              history.push(`/home/contratante/bemvindo/${usuario.id}`);
            } else if (usuario.tipo === 2) {
              history.push(`/home/diarista/bemvindo/${usuario.id}`);
            }
          }
        });
      } else {
        alert("Usuario/Senha não encontrado.");
      }
      return;
    });
  };

  const [usuario, setUsuario] = useState();
  const [senha, setSenha] = useState();
  const [erro, setErro] = useState(false);
  const [mensagemErro, setMensagemErro] = useState();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Login</IonTitle>
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
            <IonCardSubtitle>Faça seu login</IonCardSubtitle>
          </IonCardHeader>
          <IonList lines="none">
            <IonItem>
              <IonLabel position="stacked">Usuário:</IonLabel>
              <IonInput
                type="text"
                placeholder="Entre com seu usuário."
                value={usuario}
                onIonChange={e => {
                  setUsuario(e.detail.value);
                }}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Senha:</IonLabel>
              <IonInput
                type="password"
                placeholder="Entre com sua senha."
                value={senha}
                onIonChange={e => {
                  setSenha(e.detail.value);
                }}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonButton
                size="default"
                color="warning"
                expand="block"
                style={{ fontSize: "1.3rem", width: "100%", height: 50 }}
                onClick={() => {
                  handleEntrarClick(usuario, senha);
                }}
              >
                <IonIcon icon={logIn} slot="start"></IonIcon>
                <IonLabel style={{ fontSize: "0.85rem" }}>Entrar</IonLabel>
              </IonButton>
            </IonItem>
            <IonItem>
              <IonButton
                slot="end"
                size="small"
                color="light"
                routerDirection="back"
                routerLink={`/home/registro/${match.params.id}`}
              >
                <IonLabel>Registre-se</IonLabel>
              </IonButton>
            </IonItem>
          </IonList>
        </IonCard>
        <IonList lines="none">
          <IonListHeader style={{ textAlign: "center" }}>
            <IonLabel>Ou</IonLabel>
          </IonListHeader>
        </IonList>
        <IonCard className="welcome-card">
          <IonList lines="none">
            <IonItem>
              <IonButton
                size="default"
                expand="block"
                style={{ fontSize: "1.3rem", width: "100%", height: 50 }}
              >
                <IonIcon icon={logoFacebook} slot="end"></IonIcon>
                <IonLabel style={{ fontSize: "0.65rem" }}>
                  Faça o login pelo Facebook
                </IonLabel>
              </IonButton>
            </IonItem>
            <IonItem>
              <IonButton
                size="default"
                color="danger"
                expand="block"
                style={{ fontSize: "1.3rem", width: "100%", height: 50 }}
              >
                <IonLabel style={{ fontSize: "0.65rem" }}>
                  Faça o login pelo Google
                </IonLabel>
                <IonIcon icon={logoGoogle} slot="end"></IonIcon>
              </IonButton>
            </IonItem>
          </IonList>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
