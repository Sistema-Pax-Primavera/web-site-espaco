import React from "react";
import "./odontologia.css";
import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import Imagem01 from "../../imagens/background13.png"
import Imagem02 from "../../imagens/imagem11.png"
import Imagem03 from "../../imagens/imagem12.png"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WhatsApp from '../../components/whatsapp';

export default function Odontologia() {
  return (
    <div>
      <Cabecalho />
      <div className='container-odontologia'>
        <h2>Odontologia & Dentista</h2>
        <h1>Odontologia <br></br> & Dentista</h1>
        <label>Garantir o bem estar do paciente tendo a tecnologia e a excelência profissional como aliadas é o pilar do atendimento odontológico proposto.</label>
        <button><a href="https://wa.me/556798602778?text=Ol%C3%A1+gostaria+de+marcar+uma+consulta" target="blanck" className="color-a">MARCAR CONSULTA</a></button>
      </div>
      <div className="tratamentos-odontologicos">
        <div className="odontologicos">
          <img src={Imagem01}></img>
        </div>
        <div className="odontologicos2">
          <h1>Diversos<br></br> Tratamentos<br></br> Odontológicos</h1>
          <div className="tipos-odonto">
            <div className="right">
              <CheckCircleOutlineIcon />
              <label>Cirurgias</label>
            </div>
            <div className="right">
              <CheckCircleOutlineIcon />
              <label>Saúde Bucal</label>
            </div>
            <div className="right">
              <CheckCircleOutlineIcon />
              <label>Restauração</label>
            </div>
            <div className="right">
              <CheckCircleOutlineIcon />
              <label>Implantes</label>
            </div>
            <div className="right">
              <CheckCircleOutlineIcon />
              <label>Exames</label>
            </div>

          </div>
        </div>
      </div>

      <div className="avaliação">
        <div className="container-avaliacao">
          <h1>Avaliação</h1>
          <label>Marque uma avaliação agora mesmo, traremos o melhor tratamento para você cuidar da sua saúde bucal!</label>
          <button><a href="https://wa.me/556798602778?text=Ol%C3%A1+gostaria+de+marcar+uma+avaliacao" target="blanck" className="color-a">MARCAR AVALIAÇÃO</a></button>
        </div>
      </div>
      <WhatsApp />
      <Rodape />
    </div>
  );
}
