import React from 'react';
import { FederatedFooter, Switch } from "@ama-pt/agora-design-system";
// import './styles.css';
// import {
//     CardFooterProps,
//     FederatedFooter,
//     LinkableImagesProps
// } from "@ama-pt/agora-design-system";

// export interface FooterProps extends HTMLAttributes<HTMLElement> {
//   card: CardFooterProps;
//   brandImage: LinkableImagesProps;
//   caption: string;
//   partnersLogos: LinkableImagesProps[];
//   socialsLink: LinkableImagesProps[];
//   usefulLinks: AnchorHTMLAttributes<HTMLAnchorElement>[]
// }

// const Footer = (props: FooterProps) => {
const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <p className="footer-text">Aqui está o conteúdo do footer</p>
      </footer>

      <div className="App">
        {/* teste
<Footer /> */}

        <div className="mx-auto min-h-screen flex flex-col max-w-[1440px]">
          <main className="my-64">
            <div className="container mx-auto">
              <Switch label="Clica para footer sem limite" />
            </div>
          </main>
          <footer className="mt-auto">
            <FederatedFooter
              badgeImage={{
                image: {
                  alt: "Selo de ouro de usabilidade e acessibilidade",
                  src: "/acessibilidade.png",
                },
                link: {
                  href: "https://selo.usabilidade.gov.pt/",
                  target: "_blank",
                  title: "Abre num novo separador",
                },
              }}
              brandImage={{
                image: {
                  alt: "Logótipo República Portuguesa",
                  src: "/republica-portuguesa.png",
                },
                link: {
                  href: "https://www.portugal.gov.pt/pt/gc22",
                  target: "_blank",
                  title: "Abre num novo separador",
                },
              }}
              caption="O ePortugal é financiado pelo Plano de Recuperação e Resiliência e o Next Generation EU."
              card={{
                description:
                  "Caso necessite de ajuda durante a realização do serviço, poderá utilizar qualquer um dos canais de comunicação à sua disposição e sempre que necessário esclareça todas as dúvidas ou partilhe uma sugestão.",
                links: [
                  {
                    children: "Enviar mensagem",
                    href: "?path=/docs/documentation-welcome--page",
                    target: "_self",
                  },
                  {
                    children: "Ver contactos",
                    href: "?path=/docs/documentation-welcome--page",
                    target: "_self",
                  },
                  {
                    children: "Ver locais de atendimento",
                    href: "?path=/docs/documentation-welcome--page",
                    target: "_self",
                  },
                ],
                title: "Precisa de ajuda com este serviço?",
              }}
              copyright="© 2023 República Portuguesa. Todos os direitos reservados."
              partnersLogos={[
                {
                  image: {
                    alt: "Logótipo PRR",
                    src: "/prr.svg",
                  },
                  link: {
                    href: "https://recuperarportugal.gov.pt/",
                    target: "_blank",
                    title: "Abre num novo separador",
                  },
                },
                {
                  image: {
                    alt: "Logótipo República Portuguesa",
                    src: "/republica-portuguesa.svg",
                  },
                  link: {
                    href: "https://www.portugal.gov.pt/pt/gc22",
                    target: "_blank",
                    title: "Abre num novo separador",
                  },
                },
                {
                  image: {
                    alt: "Logótipo Next Generation EU",
                    src: "/europa.svg",
                  },
                  link: {
                    href: 'https://ec.europa.eu/info/strategy/recovery-plan-europe_pt"',
                    target: "_blank",
                    title: "Abre num novo separador",
                  },
                },
              ]}
              socialsLink={[
                {
                  icon: "agora-line-linkedin",
                  iconHover: "agora-solid-linkedin",
                  link: {
                    href: "https://linkedin.com",
                    target: "_blank",
                    title: "Linkedin",
                  },
                },
                {
                  icon: "agora-line-facebook",
                  iconHover: "agora-solid-facebook",
                  link: {
                    href: "https://facebook.com",
                    target: "_blank",
                    title: "Facebook",
                  },
                },
                {
                  icon: "agora-line-twitter-x",
                  iconHover: "agora-solid-twitter-x",
                  link: {
                    href: "https://twitter.com",
                    target: "_blank",
                    title: "Twitter",
                  },
                },
                {
                  icon: "agora-line-instagram",
                  iconHover: "agora-solid-instagram",
                  link: {
                    href: "https://recuperarportugal.gov.pt/",
                    target: "_blank",
                    title: "Instagram",
                  },
                },
                {
                  icon: "agora-line-youtube",
                  iconHover: "agora-solid-youtube",
                  link: {
                    href: "https://recuperarportugal.gov.pt/",
                    target: "_blank",
                    title: "Youtube",
                  },
                },
              ]}
              usefulLinks={[
                {
                  children: "Acessibilidade",
                  href: "/acessibilidade",
                  target: "_self",
                },
                {
                  children: "Termos e Condições",
                  href: "/termos-e-condicoes",
                  target: "_self",
                },
                {
                  children: "Política de Privacidade",
                  href: "/politica-de-privacidade",
                  target: "_self",
                },
                {
                  children: "Definições de Cookies",
                  href: "/cookies",
                  target: "_self",
                },
              ]}
            />
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
