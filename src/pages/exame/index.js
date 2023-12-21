import React, { useState, useEffect } from 'react';
import "./exame.css";
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import { useSpring, animated } from 'react-spring';
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import WhatsApp from '../../components/whatsapp';

export default function Exames() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage2 = 5;

  const conteudos = [
    { titulo: 'Conteúdo 1', descricao: 'Descrição do conteúdo 1' },
    { titulo: 'Conteúdo 2', descricao: 'Descrição do conteúdo 2' },
    { titulo: 'Conteúdo 3', descricao: 'Descrição do conteúdo 3' },
    { titulo: 'Conteúdo 4', descricao: 'Descrição do conteúdo 4' },
    { titulo: 'Conteúdo 5', descricao: 'Descrição do conteúdo 5' },
    { titulo: 'Conteúdo 6', descricao: 'Descrição do conteúdo 6' },
    { titulo: 'Conteúdo 7', descricao: 'Descrição do conteúdo 7' },
    { titulo: 'Conteúdo 8', descricao: 'Descrição do conteúdo 8' },
    { titulo: 'Conteúdo 9', descricao: 'Descrição do conteúdo 9' },
    { titulo: 'Conteúdo 10', descricao: 'Descrição do conteúdo 10' },
  ];

  const conteudos2 = [
    { titulo: 'Conteúdo 1', descricao: 'Descrição do conteúdo 1' },
    { titulo: 'Conteúdo 2', descricao: 'Descrição do conteúdo 2' },
    { titulo: 'Conteúdo 3', descricao: 'Descrição do conteúdo 3' },
    { titulo: 'Conteúdo 4', descricao: 'Descrição do conteúdo 4' },
    { titulo: 'Conteúdo 5', descricao: 'Descrição do conteúdo 5' },
    { titulo: 'Conteúdo 6', descricao: 'Descrição do conteúdo 6' },
    { titulo: 'Conteúdo 7', descricao: 'Descrição do conteúdo 7' },
    { titulo: 'Conteúdo 8', descricao: 'Descrição do conteúdo 8' },
    { titulo: 'Conteúdo 9', descricao: 'Descrição do conteúdo 9' },
    { titulo: 'Conteúdo 10', descricao: 'Descrição do conteúdo 10' },
  ];

  const totalSlides2 = Math.ceil(conteudos2.length / itemsPerPage2);

  const slideProp2 = useSpring({
    transform: `translateX(${-currentPage * (100 / totalSlides2)}%)`,
    config: { mass: 1, tension: 50, friction: 14 } // Ajuste os valores conforme necessário
  });

  // Calcula o número total de slides para garantir que seja múltiplo do número de itens por página
  const totalSlides = Math.ceil(conteudos.length);

  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 768px)').matches);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const slidesToShow = isMobile ? 1 : 5;

  const slideProps = useSpring({
    transform: `translateX(${-currentPage * (100 / totalSlides)}%)`,
    config: { mass: 1, tension: 120, friction: 14 },
  });
  return (
    <div>
      <Cabecalho />
      <div className='container-exames'>
        <ul className="listaMarcadores">
          <li>Radiografia</li>
          <li>Exames Clínicos</li>
          <li>Exames Laboratoriais</li>
        </ul>
        <div className='marque-exame'>
          <label>MARQUE SEU EXAME CONOSCO!</label>
          <button><a href="https://wa.me/556798602778?text=Ol%C3%A1+gostaria+de+marcar+um+exame" target="blanck" className="color-a">MARCAR EXAME</a></button>
        </div>
      </div>
      <WhatsApp />
      <div className="tipos-exames">
        <h1>Nossos Exames</h1>
        <label>Valores que cabem no seu bolso!</label>

        <div className='carrosel-mobile'>
        <div className='carrosel-pax2' style={{ overflow: 'hidden' }}>
          <animated.div style={{ display: 'flex', width: `${totalSlides * 100}%`, ...slideProps }}>
            {conteudos.map((conteudo, index) => (
              <div className='tipo-conteudo' key={index} style={{ width: `${100 / slidesToShow}%` }}>
                <h3>{conteudo.titulo}</h3>
                <p>{conteudo.descricao}</p>
                <button>AGENDAR</button>
              </div>
            ))}
          </animated.div>
        </div>
        <div className="passa-slide">
          <button onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 0))}>
            <IoMdArrowDropleftCircle size={18} />
          </button>
          <button onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalSlides - 1))}>
            <IoMdArrowDroprightCircle size={18} />
          </button>
        </div>
        </div>
        

        <div className='carrosel-desktop'>
          <div className='carrosel-pax3' style={{ overflow: 'hidden' }}>
            <animated.div style={{ display: 'flex', width: `${totalSlides2 * 100}%`, ...slideProp2 }}>
              {conteudos.map((conteudo, index) => (
                <div className='tipo-conteudo' key={index} style={{ width: `${100 / itemsPerPage2}%` }}>
                  <h3>{conteudo.titulo}</h3>
                  <p>{conteudo.descricao}</p>
                  <button>AGENDAR</button>
                </div>
              ))}
            </animated.div>
          </div>
          <div className="passa-slide">
            <button onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 0))}>
              <IoMdArrowDropleftCircle size={18} />
            </button>
            <button onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalSlides - 1))}>
              <IoMdArrowDroprightCircle size={18} />
            </button>
          </div>
        </div>

      </div>
      <Rodape />
    </div>
  );
}
