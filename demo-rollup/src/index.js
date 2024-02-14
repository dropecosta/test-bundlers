import React from 'react';
import ReactDOM from 'react-dom';
import { PublicFooter } from '@ama-pt/agora-design-system';
import '@ama-pt/agora-design-system/dist/index.css';

const args = {
  brandImage: {
    link: {
      title: 'Abre num novo separador',
      href: 'https://www.portugal.gov.pt/pt/gc22',
      target: '_blank'
    },
    image: {
      src: 'republica-portuguesa.png',
      alt: 'Logótipo República Portuguesa'
    }
  },
  caption: 'O ePortugal é financiado pelo Plano de Recuperação e Resiliência e o Next Generation EU.',
  partnersLogos: [
    {
      link: {
        title: 'Abre num novo separador',
        href: 'https://recuperarportugal.gov.pt/',
        target: '_blank'
      },
      image: {
        src: 'prr.svg',
        alt: 'Logótipo PRR'
      }
    },
    {
      link: {
        title: 'Abre num novo separador',
        href: 'https://www.portugal.gov.pt/pt/gc22',
        target: '_blank'
      },
      image: {
        src: 'republica-portuguesa.svg',
        alt: 'Logótipo República Portuguesa'
      }
    },
    {
      link: {
        title: 'Abre num novo separador',
        href: 'https://ec.europa.eu/info/strategy/recovery-plan-europe_pt"',
        target: '_blank'
      },
      image: {
        src: 'europa.svg',
        alt: 'Logótipo Next Generation EU'
      }
    }
  ],

  copyright: '© 2023 República Portuguesa. Todos os direitos reservados.'
};

function App() {
  return (
    <div className="App">
      <footer className="mt-auto">
        <PublicFooter {...args} />
    </footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));