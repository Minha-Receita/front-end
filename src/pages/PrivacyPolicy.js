// src/pages/PrivacyPolicy.js

import React from 'react';

const PrivacyPolicy = () => (
  <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
    <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Política de Privacidade</h1>

    <section>
      <p>
        Bem-vindo ao aplicativo <strong>"ILove Receitas"</strong>. Esta Política de Privacidade descreve como coletamos,
        usamos e protegemos suas informações pessoais.
      </p>
    </section>

    <section style={{ marginTop: '1.5rem' }}>
      <h2>Informações que Coletamos</h2>
      <ul>
        <li>Nome</li>
        <li>Email</li>
        <li>Foto da conta do Google</li>
        <li>Acesso à câmera</li>
      </ul>
    </section>

    <section style={{ marginTop: '1.5rem' }}>
      <h2>Uso das Informações</h2>
      <ul>
        <li>Fornecer e melhorar nossos serviços</li>
        <li>Personalizar sua experiência</li>
        <li>Comunicar-se com você</li>
      </ul>
    </section>

    <section style={{ marginTop: '1.5rem' }}>
      <h2>Compartilhamento de Informações</h2>
      <p>
        Não compartilhamos suas informações pessoais com terceiros, exceto conforme necessário para
        fornecer nossos serviços ou conforme exigido por lei.
      </p>
    </section>

    <section style={{ marginTop: '1.5rem' }}>
      <h2>Segurança</h2>
      <p>
        Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado.
      </p>
    </section>

    <section style={{ marginTop: '1.5rem' }}>
      <h2>Seus Direitos</h2>
      <p>
        Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Para exercer esses direitos,
        entre em contato conosco.
      </p>
    </section>

    <section style={{ marginTop: '1.5rem' }}>
      <h2>Alterações nesta Política</h2>
      <p>
        Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações
        publicando a nova Política de Privacidade nesta página.
      </p>
    </section>

    <section style={{ marginTop: '1.5rem' }}>
      <h2>Contato</h2>
      <p>
        Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco pelo email:  
        <a href="mailto:mikael25informatica@gmail.com"> mikael25informatica@gmail.com</a>
      </p>
    </section>
  </div>
);

export default PrivacyPolicy;
