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
  IonToggle,
  IonMenuButton,
  IonButton,
  IonIcon
} from "@ionic/react";
import { chatbubbles } from "ionicons/icons";
import React, { useState } from "react";

const DuvidasPage: React.FC = () => {
  const textoDanosAvarias =
    "Infelizmente, todo serviço de limpeza envolve algum risco de que objetos sejam danificados. Para prevenir esse tipo de problema, orientamos as profissionais autônomas credenciadas em nossa plataforma para que tenham o máximo de cuidado e zelo durante a prestação do serviço. Também recomendamos fortemente aos contratantes que guardem seus pertences e objetos de maior valor em um local seguro e fora do alcance. Com isso, tanto os clientes quanto as profissionais ficam protegidos, minimizando os riscos. Mas, ainda assim, alguns incidentes isolados podem ocorrer e, nesses casos, procuramos prestar toda a atenção e assistência que estiver ao nosso alcance. Se um objeto vier a ser danificado pela profissional responsável pelo serviço, você deverá reportar o problema à nossa equipe de atendimento até 24 horas após o término da prestação de serviço. Ao fazer a reclamação, será necessário também que você apresente notas fiscais, fotos e outros possíveis registros documentais do objeto em questão para que possamos analisar o caso e auxiliar na mediação de sua queixa junto à profissional. Caso fique comprovada a responsabilidade da profissional, conforme nossos termos de serviço caberá à própria profissional, e não ao Limpe Aqui, ressarcir quaisquer valores ou responder pelo caso, uma vez que, enquanto licenciadores do sistema utilizado para a contratação do serviço, não somos responsáveis por esse tipo de ocorrência.";
  const textoAProfissionalAtrasou =
    "Os profissionais na nossa plataforma costumam chegar às limpezas com 15 minutos de antecedência, caso isso não ocorra, nós pedimos que você: 1. Aguarde 15 minutos de tolerância após o horário de início da limpeza; 2. Se o profissional não tiver comparecido, comunique o atraso através do Suporte ao Cliente via WhatsApp (43) 99652-3023. Em caso de atrasos ou faltas por parte dos profissionais, nós oferecemos o reagendamento prioritário, a substituição por outro profissional ou a devolução do valor pago. Em todos os casos, nosso Suporte ao Cliente irá lhe auxiliar para a melhor resolução da situação.";
  const textoBeneficiosLimpeAqui =
    "Você só tem benefícios contratando com a Limpe Aqui, dê uma olhada: – Não precisa perder tempo procurando indicações, perguntando por telefones de profissionais, fazendo entrevistas e pedindo orçamentos. Nós fazemos tudo isso por você. – Pode contratar o serviço que quiser; na hora que quiser, diretamente no nosso site. – Tem acesso aos melhores profissionais. Além disso, somente os melhores prestadores continuam na nossa plataforma, mediante as avaliações de seus clientes. – Conta com nossa Central de Atendimento, via WhatsApp. Nosso time está pronto para tirar suas dúvidas e resolver qualquer problema. – Tem acesso à Garantia de Satisfação. Se alguma coisa no serviço não te agradar, conte para nós que iremos resolver o seu problema.";
  const textoServicosLimpeza =
    "Não exatamente. A Limpa Aqui ajuda seus usuários finais a contratarem serviços de limpeza que são prestados diretamente pelas profissionais autônomas cadastradas em nossa plataforma. Elas são as responsáveis pela prestação do serviço de limpeza. Como uma empresa de tecnologia, nosso objetivo é facilitar a vida dos clientes e das profissionais que contratam o serviço através do nosso sistema, simplificando os processos de contratação, agendamento e cobrança e oferecendo suporte e atendimento personalizado para ajudar seus usuários a resolverem eventuais problemas.";

  const [mostrarDanos, setMostrarDanos] = useState(true);
  const [mostrarProfissional, setMostrarProfissional] = useState(true);
  const [mostrarBeneficios, setMostrarBeneficios] = useState(true);
  const [mostrarServicos, setMostrarServicos] = useState(true);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Duvidas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>
              Saiba mais como o LimpeAqui funciona.
            </IonCardSubtitle>
          </IonCardHeader>
          <IonList>
            <IonItem>
              <IonLabel style={{ fontSize: "0.85rem", fontWeight: "bold" }}>
                DANOS E AVARIAS
              </IonLabel>
              <IonToggle
                onIonChange={() => {
                  setMostrarDanos(!mostrarDanos);
                }}
              />
            </IonItem>

            <IonItem
              style={{
                display: mostrarDanos ? "none" : "block",
                visibility: mostrarDanos ? "hidden" : "visible"
              }}
            >
              <IonLabel
                color="secundary"
                class="ion-text-wrap"
                style={{ fontSize: "0.8rem" }}
              >
                {textoDanosAvarias}
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel
                class="ion-text-wrap"
                style={{ fontSize: "0.85rem", fontWeight: "bold" }}
              >
                A PROFISSIONAL ATRASOU, E AGORA?
              </IonLabel>
              <IonToggle
                onIonChange={() => {
                  setMostrarProfissional(!mostrarProfissional);
                }}
              />
            </IonItem>
            <IonItem
              style={{
                display: mostrarProfissional ? "none" : "block",
                visibility: mostrarProfissional ? "hidden" : "visible"
              }}
            >
              <IonLabel
                color="secundary"
                class="ion-text-wrap"
                style={{ fontSize: "0.8rem" }}
              >
                {textoAProfissionalAtrasou}
              </IonLabel>{" "}
            </IonItem>

            <IonItem>
              <IonLabel
                class="ion-text-wrap"
                style={{ fontSize: "0.75rem", fontWeight: "bold" }}
              >
                QUAIS OS BENEFÍCIOS DE CONTRATAR A LIMPE AQUI ?
              </IonLabel>
              <IonToggle
                onIonChange={() => {
                  setMostrarBeneficios(!mostrarBeneficios);
                }}
              />
            </IonItem>

            <IonItem
              style={{
                display: mostrarBeneficios ? "none" : "block",
                visibility: mostrarBeneficios ? "hidden" : "visible"
              }}
            >
              <IonLabel
                color="secundary"
                class="ion-text-wrap"
                style={{ fontSize: "0.8rem" }}
              >
                {textoBeneficiosLimpeAqui}
              </IonLabel>{" "}
            </IonItem>

            <IonItem>
              <IonLabel
                class="ion-text-wrap"
                style={{ fontSize: "0.75rem", fontWeight: "bold" }}
              >
                A LIMPE AQUI PRESTA SERVIÇOS DE LIMPEZA ?
              </IonLabel>
              <IonToggle
                onIonChange={() => {
                  setMostrarServicos(!mostrarServicos);
                }}
              />
            </IonItem>

            <IonItem
              style={{
                display: mostrarServicos ? "none" : "block",
                visibility: mostrarServicos ? "hidden" : "visible"
              }}
            >
              <IonLabel
                color="secundary"
                class="ion-text-wrap"
                style={{ fontSize: "0.8rem" }}
              >
                {textoServicosLimpeza}
              </IonLabel>
            </IonItem>
          </IonList>
        </IonCard>
        <IonCard>
          <IonItem>
            <IonLabel class="ion-text-wrap" style={{ fontSize: "0.75rem" }}>
              Outras duvidas ou mais informações? Contacte o nosso suporte.
            </IonLabel>
            <IonButton size="default" color="light">
              <IonIcon icon={chatbubbles}></IonIcon>
            </IonButton>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default DuvidasPage;
