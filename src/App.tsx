import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { AppPage } from "./declarations";

import Menu from "./components/Menu";
import Home from "./pages/Home";
import { home } from "ionicons/icons";

import dotenv from "dotenv";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import BemVindoPage from "./pages/Contratante/BemVindo";
import PedidoMapaPage from "./pages/Contratante/Pedido/PedidoMapa";
import PedidoDataPage from "./pages/Contratante/Pedido/PedidoData";
import PedidoServicoPage from "./pages/Contratante/Pedido/PedidoServico";
import PedidoTarefaPage from "./pages/Contratante/Pedido/PedidoTarefa";
import PedidoObservacoesPage from "./pages/Contratante/Pedido/PedidoObservacoes";
import PedidoResumoPage from "./pages/Contratante/Pedido/PedidoResumo";
import PedidoPagamentoPage from "./pages/Contratante/Pedido/PedidoPagamento";
import DuvidasPage from "./pages/Duvidas/Duvidas";
import VantagensPage from "./pages/Vantagens/Vantagens";
import PlanosPage from "./pages/Planos/Planos";
import LoginPage from "./components/Login";
import RegistroPage from "./components/Registro";
import BemVindoDiaristaPage from "./pages/Diarista/BemVindo";
import CadastroComoFuncionaPage from "./pages/Diarista/Cadastro/CadastroComoFunciona";
import CadastroDadosPessoaisPage from "./pages/Diarista/Cadastro/CadastroDadosPessoais";
import CadastroExperienciaPage from "./pages/Diarista/Cadastro/CadastroExperiencia";
import CadastroDisponibilidadePage from "./pages/Diarista/Cadastro/CadastroDisponibilidade";
import CadastroMapaPage from "./pages/Diarista/Cadastro/CadastroMapa";
import CadastroResumoPage from "./pages/Diarista/Cadastro/CadastroResumo";
import CadastroOutrosDadosPage from "./pages/Diarista/Cadastro/CadastroOutrosDados";
import AgendaPage from "./pages/Diarista/Agenda/Agenda";
import AgendaAgendadosPage from "./pages/Diarista/Agenda/Agenda.Agendados";
import AgendaRealizadosPage from "./pages/Diarista/Agenda/Agenda.Realizados";
import CadastroDocumentosPage from "./pages/Diarista/Cadastro/CadastroDocumentos";
import AgendaAvaliacaoPage from "./pages/Diarista/Agenda/Agenda.Avaliacao";
import ContratanteDadosPage from "./pages/Contratante/ContratanteDados";
import IndiquePage from "./pages/Indique/Indique";

dotenv.config();

const appPages: AppPage[] = [
  {
    title: "Home",
    url: "/home",
    icon: home
  }
];

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonRouterOutlet id="main">
          <Route path="/home" component={Home} exact={true} />
          <Route path="/home/duvidas" component={DuvidasPage} exact={true} />
          <Route path="/home/planos" component={PlanosPage} exact={true} />
          <Route
            path="/home/vantagens"
            component={VantagensPage}
            exact={true}
          />
          <Route path="/home/login/:id" component={LoginPage} exact={true} />
          <Route
            path="/home/registro/:id"
            component={RegistroPage}
            exact={true}
          />
          <Route
            path="/home/contratante/bemvindo/:id"
            component={BemVindoPage}
            exact={true}
          />
          <Route
            path="/home/contratante/dados"
            component={ContratanteDadosPage}
            exact={true}
          />
          <Route
            path="/home/contratante/pedidomapa"
            component={PedidoMapaPage}
            exact={true}
          />
          <Route
            path="/home/contratante/pedidodata"
            component={PedidoDataPage}
            exact={true}
          />
          <Route
            path="/home/contratante/pedidoservico"
            component={PedidoServicoPage}
            exact={true}
          />
          <Route
            path="/home/contratante/pedidotarefa"
            component={PedidoTarefaPage}
            exact={true}
          />
          <Route
            path="/home/contratante/pedidoobservacoes"
            component={PedidoObservacoesPage}
            exact={true}
          />
          <Route
            path="/home/contratante/pedidoresumo"
            component={PedidoResumoPage}
            exact={true}
          />
          <Route
            path="/home/contratante/pedidopagamento"
            component={PedidoPagamentoPage}
            exact={true}
          />
          <Route
            path="/home/diarista/bemvindo/:id"
            component={BemVindoDiaristaPage}
            exact={true}
          />
          <Route
            path="/home/diarista/cadastrocomofunciona/:id"
            component={CadastroComoFuncionaPage}
            exact={true}
          />
          <Route
            path="/home/diarista/cadastrodadospessoais"
            component={CadastroDadosPessoaisPage}
            exact={true}
          />
          <Route
            path="/home/diarista/cadastrooutrosdados"
            component={CadastroOutrosDadosPage}
            exact={true}
          />
          <Route
            path="/home/diarista/cadastrodocumentos"
            component={CadastroDocumentosPage}
            exact={true}
          />
          <Route
            path="/home/diarista/cadastroexperiencia"
            component={CadastroExperienciaPage}
            exact={true}
          />
          <Route
            path="/home/diarista/cadastromapa"
            component={CadastroMapaPage}
            exact={true}
          />
          <Route
            path="/home/diarista/cadastrodisponibilidade"
            component={CadastroDisponibilidadePage}
            exact={true}
          />
          <Route
            path="/home/diarista/cadastroresumo"
            component={CadastroResumoPage}
            exact={true}
          />
          <Route
            path="/home/diarista/agenda"
            component={AgendaPage}
            exact={true}
          />
          <Route
            path="/home/diarista/agenda/agendados"
            component={AgendaAgendadosPage}
            exact={true}
          />
          <Route
            path="/home/diarista/agenda/realizados"
            component={AgendaRealizadosPage}
            exact={true}
          />
          <Route
            path="/home/diarista/agenda/avaliacao"
            component={AgendaAvaliacaoPage}
            exact={true}
          />
          <Route path="/home/indique" component={IndiquePage} exact={true} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
