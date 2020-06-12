import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FaRegCopyright, FaFileDownload} from 'react-icons/fa';
import AboutTitle from './AboutTitle';
import ModalImage from "react-modal-image";
import myPhoto from '../../assets/blank-photo.jpg';
import CV from '../../assets/cv.pdf';

export default function About() {

    return(
        
        <div>

        <div className="nav"> 

            <Link to="/">
            <div className="photo">
            </div>
            </Link>

            <div className="marker">
                <hr></hr>
                {/* <hr></hr> */}
            </div>

            <ul>
                <Link to="/">
                
                <li>Home</li>
               
                </Link>

                <Link to="/about">
               
                <li id='selected'>About</li>
        
                </Link>

                <Link to="/resume">
        
                <li>Resume</li>
               
                </Link>

                
                <Link to="/contact">
                <li>Contact</li>
                </Link>
                
            </ul>

            

            <footer>
                <FaRegCopyright size={12} color={"#4dff4d"}></FaRegCopyright>
                <span> 2020 Gabriel Silvério</span>
            </footer>
        </div>

        <div className="content">

        <AboutTitle></AboutTitle>

        <div className="bg-texture"></div>
        <div className="bg-texture"></div>
        <div className="bg-texture"></div>
        <div className="bg-texture"></div>
        <div className="bg-texture"></div>
        <div className="bg-texture"></div>
        <div className="bg-texture"></div>
        <div className="bg-texture"></div>
        <div className="bg-texture"></div>
        <div className="bg-texture"></div>

        {/* <div className="bg-element"></div>
        <div className="bg-element" id="sec"></div> */}

        <div className="bg-marker"></div>

            <div className="about-content">

            {/* <div className="full-portrait">
                <div id="layer">
                </div>
            </div> */}

            <div>
                <ModalImage
                className="full-portrait"
                small={myPhoto}
                large={myPhoto}
                />
            </div>

            <div className="details">
                <h2>Gabriel Silvério</h2>
                <hr></hr>
                <p>Desenvolvedor Web Junior</p>
                {/* <ul>
                    <li><span className="bold">Nome Completo:</span> Gabriel da Silva Silvério</li>
                    <li><span className="bold">Idade:</span> 22 anos</li>
                    <li><span className="bold">Nacionalidade:</span> Brasileiro</li>
                    <li><span className="bold">Idiomas:</span> Português e Inglês</li>
                    <li><span className="bold">Endereço:</span> Lorem ipsum dolor</li>
                </ul> */}

                <table>
                <tr>
                    <td>Nome Completo:</td>
                    <td>Gabriel Silvério</td>
                </tr>
                <tr>
                    <td>Idade:</td>
                    <td>22 anos</td>
                </tr>
                <tr>
                    <td>Nacionalidade:</td>
                    <td>Brasileiro</td>
                </tr>
                <tr>
                    <td>Idiomas:</td>
                    <td>Português e Inglês</td>
                </tr>
                <tr>
                    <td>Endereço:</td>
                    <td>Lorem Ipsum Dolor</td>
                </tr>
                </table>

                <div className="button">
                <a href={CV} download="Gabriel_Silvério-CV"><FaFileDownload size={20} /> Donwload CV </a>
                </div>

            </div>

            </div>

        </div>

        </div>

    )

}