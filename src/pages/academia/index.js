import React from 'react'
import "./academia.css"
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import ImagemLinha from '../../imagens/imagem-linha.png'
import Supino from '../../imagens/supino.png'
import Legpress from '../../imagens/legpress.png'
import Esteira from '../../imagens/esteira.png'
import Agachamento from '../../imagens/agachamento.png'
import { FaRegClock } from "react-icons/fa";
import WhatsApp from '../../components/whatsapp';

export default function Academia() {

  return (
    <div className='cont-academia'>
      <Cabecalho />
      <div className='container-academia'>
        <h1>Academia</h1>
        <label>A sua melhor opção na hora de levar uma vida + saudável, com os melhores equipamentos, infraestrutura e muito mais com mensalidades acessíveis.
        </label>
        <button><a href="https://wa.me/556798602778?text=Ol%C3%A1+gostaria+de+ver+o+convenio+com+academia" target="blanck" className="color-a">QUERO CONVÊNIO</a></button>
      </div>
      <div className='personal-trainer'>
        <h1>Personal<br></br> Trainer</h1>
        <label>Profissionais na área de musculação e desenvolvimento, totalmente especializados com objetivo de trazer o melhor resultado para nossos clientes !
        </label>
        <button><a href="https://wa.me/556798602778?text=Ol%C3%A1+gostaria+de+fazer+acompanhamento+com+personal+trainer" target="blanck" className="color-a">FAZER ACOMPANHAMENTO</a></button>
      </div>
      <div className='estrutura-moderna'>
        <div className='estrutura-moderna2'>
          <h1>Estrutura Moderna</h1>
          <label>Temos os melhores equipamentos da última geração, oferecemos a melhor performance para nossos alunos e zelando sempre pela segurança.
          </label>
          <div className='exercicios-tipos-pax'>
            <img src={Esteira}></img>
            <img src={Supino}></img>
            <img src={Legpress}></img>
            <img src={Agachamento}></img>
          </div>
          <button><a href="https://wa.me/556798602778?text=Ol%C3%A1+gostaria+de+conhecer+a+academia" target="blanck" className="color-a">CONHECER ACADEMIA</a></button>
        </div>
      </div>
      <WhatsApp />
      <div className='estrutura-horario'>
        <div className='clock-gym2'></div>
        <div className='clock-gym'>
          <h1>Horário de Funcionamento</h1>
          <label>De segunda a sexta das 06:00 horas até as 18:00 horas e aos sábados das 06:00 horas  até as 11:00 horas. Agende um horário com a gente, temos uma equipe especial para te atender!</label> 
          <button><a href="https://wa.me/556798602778?text=Ol%C3%A1+gostaria+de+agendar+um+horario+na+academia" target="blanck" className="color-a">AGENDAR HORÁRIO</a></button>              
        </div>

      </div>
      <div className="servico-complementares">
        <h1>Serviços Complementares</h1>
      </div>

      <div className='dois-serviços'>
        <div className='nutricionista'>
          <div className='fundo-profissionais'>
            <h1>Nutricionista</h1>
            <button><a href="https://wa.me/556798602778?text=Ol%C3%A1+gostaria+de+marcar+uma+consulta+com+nutricionista" target="blanck" className="color-a">MARCAR CONSULTA</a></button>
          </div>
        </div>
        <div className='fisioterapeuta'>
          <div className='fundo-profissionais'>
            <h1>Fisioterapeuta</h1>
            <button><a href="https://wa.me/556798602778?text=Ol%C3%A1+gostaria+de+marcar+uma+consulta+com+fisioterapeuta" target="blanck" className="color-a">MARCAR CONSULTA</a></button>
          </div>

        </div>
      </div>
      <Rodape />
    </div>
  )
}