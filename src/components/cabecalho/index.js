import React, { useState, useEffect } from 'react';
import Logo from "../../imagens/logo_espaco_primavera.png";
import Logo2 from "../../imagens/logo_espaco_primavera.png";
import PhoneIcon from "@mui/icons-material/Phone";
import "./cabecalho.css";
import PersonIcon from "@mui/icons-material/Person";
import { Link, useLocation } from "react-router-dom";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Cabecalho() {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="container-principal">
      <div className="menu-mobile">
        <div className="imagem-logo">
          <img src={Logo} width={50}></img>
        </div>
        <button
          aria-controls="menu-mobile"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <DensitySmallIcon fontSize="small" />
        </button>
        <Menu
          id="menu-mobile"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {/* Adicione aqui os itens do submenu */}
          <MenuItem ><a href='/' className='menu-mobile'>HOME</a></MenuItem>
          <MenuItem ><a href='/exames' className='menu-mobile'>EXAMES</a></MenuItem>
          <MenuItem ><a href='/estetica' className='menu-mobile'>ESTÉTICA</a></MenuItem>
          <MenuItem ><a href='/odontologia' className='menu-mobile'>ODONTOLOGIA</a></MenuItem>
          <MenuItem ><a href='/academia' className='menu-mobile'>ACADEMIA</a></MenuItem>
          <MenuItem ><a href='/sobre-nos' className='menu-mobile'>SOBRE NÓS</a></MenuItem>
          <MenuItem ><a href='/contato' className='menu-mobile'>CONTATO</a></MenuItem>
          <MenuItem ><a href='/trabalhe-conosco' className='menu-mobile'>TRABALHE CONOSCO</a></MenuItem>
        </Menu>
      </div>


      <div className="navegacao">

        <ul className="navbar">
          <li><a href='/'><img src={Logo2} className='img-logo' width={100}></img></a></li>
          <li className='conteudo-navbar'>
            <Link
              className={location.pathname === "/" ? "perso-bot" : "nav"}
              to="/"
            >
              HOME
            </Link>
          </li>
          <li className='conteudo-navbar'>
            <Link
              className={location.pathname === "/exames" ? "perso-bot" : "nav"}
              to="/exames"
            >
              EXAMES
            </Link>
          </li>
          
          <li className='conteudo-navbar'>
            <Link
              className={location.pathname === "/estetica" ? "perso-bot" : "nav"}
              to="/estetica"
            >
              ESTÉTICA
            </Link>
          </li>
          <li className='conteudo-navbar'>
            <Link
              className={
                location.pathname === "/odontologia" ? "perso-bot" : "nav"
              }
              to="/odontologia"
            >
              ODONTOLOGIA
            </Link>
          </li>
          <li className='conteudo-navbar'>
            <Link
              className={
                location.pathname === "/academia" ? "perso-bot" : "nav"
              }
              to="/academia"
            >
              ACADEMIA
            </Link>
          </li>

          <li className='conteudo-navbar'>
            <Link
              className={
                location.pathname === "/sobre-nos" ? "perso-bot" : "nav"
              }
              to="/sobre-nos"
            >
              SOBRE NÓS
            </Link>
          </li>
          <li className='conteudo-navbar'>
            <Link
              className={location.pathname === "/contato" ? "perso-bot" : "nav"}
              to="/contato"
            >
              CONTATO
            </Link>
          </li>
          <li className='conteudo-navbar'>
            <Link
              className={
                location.pathname === "/trabalhe-conosco" ? "perso-bot" : "nav"
              }
              to="/trabalhe-conosco"
            >
              TRABALHE CONOSCO
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
