import React from "react";
import "./home.css";
import Cabecalho from "../../components/cabecalho";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import imagem01 from "../../imagens/profissional01.png";
import imagem02 from "../../imagens/profissional02.png";
import imagem03 from "../../imagens/profissional03.png";
import imagem05 from "../../imagens/imagem01-mobile.png";
import imagem06 from "../../imagens/imagem16-mobile.png";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Rodape from "../../components/rodape";
import WhatsApp from '../../components/whatsapp';

export default function Home() {

  return (
    <div>
      <Cabecalho />
      <div className="slide">
        <div className="espaco-primavera1">
        </div>
        <div className="info-espaco">
          <div className="espaco-primavera2">
            <div className="primavera1">
              <h1>Espaço Primavera</h1>
              <p><LocalHospitalIcon fontSize="small" /></p>
            </div>
            <div className="primavera2">
              <label>Nossa clínica espaço primavera possui diversos tipo de atendimentos para nossos pacientes, com os melhores profissionais!</label>
            </div>
          </div>
          <button><a href="https://api.whatsapp.com/send?phone=556798602778&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Espaço%20Primavera" target="blanck" className="color-a">SAIBA MAIS</a></button>
        </div>
      </div>
      <WhatsApp />
      <div className="slide-mobile">
        <div className="espaco-primavera1">
        </div>
        <div className="info-espaco">
          <div className="espaco-primavera2">
            <div className="primavera1">
              <h1>Espaço Primavera</h1>
              <p><LocalHospitalIcon fontSize="small" /></p>
            </div>
            <div className="primavera2">
              <label>Nossa clínica espaço primavera possui diversos tipo de atendimentos para nossos pacientes, com os melhores profissionais!</label>
            </div>
          </div>
          <button><a href="https://api.whatsapp.com/send?phone=556798602778&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Espaço%20Primavera" target="blanck" className="color-a">SAIBA MAIS</a></button>
        </div>
      </div>

      <div className="profissionais-especialistas">
        <h1>Profissionais Qualificados</h1>
        <label>Possuímos os melhores profissionais qualificados na área de saúde, buscando sempre trazer o melhor atendimento e uma melhor saúde para nossos pacientes!</label>
        <button><a href="https://wa.me/556798602778?text=Ol%C3%A1+gostaria+de+marcar+uma+consulta" target="blanck" className="color-a">MARCAR CONSULTA</a></button>
      </div>

      <div className="plano-home">
        <div className="tipos-atendimentos">
          <h1>Tipos de <br></br>Atendimentos</h1>
          <label>Realizamos diversos tipo de atendimentos médicos,
            com uma moderna estrutura e profissionais renomados
            para atender nossos pacientes, com uma infinidade de procedimentos clínicos,
            entre em contato agora mesmo conosco e marque uma consulta!</label>
            <button><a href="https://wa.me/556798602778?text=Ol%C3%A1+gostaria+de+marcar+uma+consulta" target="blanck" className="color-a">MARCAR CONSULTA</a></button>
        </div>

        <div className="atendimentos-pax">
          <div className="clinica1">
            <label>Exames Laboratoriais</label>
            <label>Exames Clínicos</label>
            <label>Radiografia</label>
          </div>
          <div className="clinica2">
            <label>Clínico Geral</label>
            <label>Consultas</label>
            <label>Ortopedia</label>
            <label>Pediatria</label>
          </div>
          <div className="clinica3">
            <label>Cirurgia Cardiovascular</label>
            <label>Cirurgia Oncológica</label>
            <label>Cirurgia Geral</label>
          </div>
        </div>
      </div>

      <div className="plano-home-mobile">
        <h1>Profissionais Qualificados</h1>
        <label>Possuímos os melhores profissionais qualificados na área de saúde, buscando sempre trazer o melhor atendimento e uma melhor saúde para nossos pacientes!</label>
        <button><a href="https://wa.me/556798602778?text=Ol%C3%A1+gostaria+de+marcar+uma+consulta" target="blanck" className="color-a">MARCAR CONSULTA</a></button>

        <div className="profissionais-pax">
          <img src={imagem01}></img>
          <div className="tipo-exames-pax">
            <label>Exames Laboratoriais</label>
            <label>Exames Clínicos</label>
            <label>Radiografia</label>
          </div>
        </div>

        <div className="profissionais-pax">
          <img src={imagem02}></img>
          <div className="tipo-exames-pax">
            <label>Clínico Geral</label>
            <label>Consultas</label>
            <label>Ortopedia</label>
            <label>Pediatria</label>
          </div>
        </div>

        <div className="profissionais-pax">
          <img src={imagem03}></img>
          <div className="tipo-exames-pax">
            <label>Ciru. Cardiovascular</label>
            <label>Cirurgia Oncológica</label>
            <label>Cirurgia Geral</label>
          </div>
        </div>
      </div>

      <div className="associado-pax">
        <div className="fundo-associado">
          <h1>MARQUE UMA CONSULTA</h1>
          <label>Entre em contato conosco agora mesmo, traremos o melhor<br></br> tratamento para você cuidar da sua saúde!</label>
          <button><a href="https://wa.me/556798602778?text=Ol%C3%A1+gostaria+de+marcar+uma+consulta" target="blanck" className="color-a">MARCAR CONSULTA</a></button>
        </div>
      </div>
      <Rodape />
    </div>
  );
}
