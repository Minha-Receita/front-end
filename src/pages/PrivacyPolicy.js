// src/pages/PrivacyPolicy.js

import React from 'react';

const PrivacyPolicy = () => (
  <div style={styles.container}>
    <div style={styles.card}>
      <h1 style={styles.title}>Política de Privacidade</h1>
      <p style={styles.date}>Data efetiva: {new Date().toLocaleDateString()}</p>

      <p style={styles.description}>
        Bem-vindo ao <strong>Minha Receita</strong>. Esta política explica como coletamos, usamos e protegemos suas informações pessoais.
      </p>

      <div style={styles.section}>
        <h2 style={styles.subtitle}>📌 Informações que Coletamos</h2>
        <ul style={styles.list}>
          <li>📛 Nome</li>
          <li>📧 Email</li>
          <li>🖼️ Foto da conta do Google</li>
          <li>📷 Acesso à câmera</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subtitle}>📌 Como Usamos Suas Informações</h2>
        <ul style={styles.list}>
          <li>🔹 Melhorar nossos serviços</li>
          <li>🔹 Personalizar sua experiência</li>
          <li>🔹 Comunicação e suporte</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subtitle}>📌 Segurança</h2>
        <p style={styles.paragraph}>
          Implementamos medidas avançadas para proteger suas informações contra acesso não autorizado.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subtitle}>📌 Seus Direitos</h2>
        <p style={styles.paragraph}>
          Você pode acessar, corrigir ou excluir suas informações. Entre em contato conosco para mais detalhes.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subtitle}>📌 Alterações na Política</h2>
        <p style={styles.paragraph}>
          Podemos atualizar esta política periodicamente. Notificaremos você sobre quaisquer mudanças.
        </p>
      </div>

      <div style={styles.contact}>
        <h2 style={styles.subtitle}>📌 Contato</h2>
        <p style={styles.paragraph}>
          Tem dúvidas? Entre em contato pelo e-mail: <a href="mailto:suporte@minhareceita.com" style={styles.link}>suporte@minhareceita.com</a>
        </p>
      </div>
    </div>
  </div>
);

// 🎨 Estilos
const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #ffecd2, #fcb69f)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    fontFamily: "'Poppins', sans-serif",
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
    maxWidth: '700px',
    width: '100%',
    padding: '2rem 2.5rem',
    textAlign: 'center',
    animation: 'fadeIn 1s ease-in-out',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '0.5rem',
  },
  date: {
    fontSize: '1rem',
    color: '#7f8c8d',
    marginBottom: '1.5rem',
  },
  description: {
    fontSize: '1.2rem',
    color: '#34495e',
    marginBottom: '1.5rem',
  },
  section: {
    marginTop: '2rem',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: '1.6rem',
    fontWeight: '600',
    color: '#e67e22',
    marginBottom: '1rem',
  },
  list: {
    paddingLeft: '1.2rem',
    fontSize: '1.1rem',
    color: '#2c3e50',
    lineHeight: '1.8',
  },
  paragraph: {
    fontSize: '1.1rem',
    color: '#34495e',
    lineHeight: '1.6',
  },
  contact: {
    marginTop: '2rem',
  },
  link: {
    color: '#e67e22',
    fontWeight: '600',
    textDecoration: 'none',
  },
};

export default PrivacyPolicy;
