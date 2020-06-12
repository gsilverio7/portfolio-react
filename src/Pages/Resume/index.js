import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FaRegCopyright, FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaPython, FaReact, FaNodeJs } from 'react-icons/fa';
import { DiSqllite, DiMysql, DiPhotoshop, DiBootstrap } from 'react-icons/di';
import ResumeTitle from './ResumeTitle'

export default function Resume() {
    
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
                
                <li>About</li>
                
                </Link>

                
                
                <li id='selected'>Resume</li>
                


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

        <ResumeTitle />

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

        <div className="resume-container">

            <div id="skills">

                <h2>Skills</h2>

                <hr></hr>

                <ul>
                    <li> 
                        <FaHtml5 size={30} title="HTML5" className="icon"/>
                        <div className="bar">
                            <div className="html"></div>
                        </div>
                    </li>
                    <li> 
                        <FaCss3Alt size={30} title="CSS3" className="icon"/> 
                        <div className="bar">
                            <div className="css"></div>
                        </div>
                    </li>
                    <li> 
                        <DiBootstrap size={30} title="Bootstrap" className="icon"/> 
                        <div className="bar">
                            <div className="bootstrap"></div>
                        </div>
                    </li>
                    <li> 
                        <FaJsSquare size={30} title="JavaScript" className="icon"/> 
                        <div className="bar">
                            <div className="js"></div>
                        </div>
                    </li>
                    <li> 
                        <FaPhp size={30}  title="PHP" className="icon"/> 
                        <div className="bar">
                            <div className="php"></div>
                        </div>
                    </li>
                    <li> 
                        <FaPython size={30} title="Python" className="icon"/> 
                        <div className="bar">
                            <div className="python"></div>
                        </div>
                    </li>
                    <li> 
                        <DiMysql size={30} title="MySQL" className="icon"/> 
                        <div className="bar">
                            <div className="mysql"></div>
                        </div>
                    </li>
                    <li> 
                        <DiSqllite size={30} title="SQLite" className="icon"/> 
                        <div className="bar">
                            <div className="sqlite"></div>
                        </div>
                    </li>
                    <li> 
                        <FaReact size={30} title="React" className="icon"/> 
                        <div className="bar">
                            <div className="react"></div>
                        </div>
                    </li>
                    <li> 
                        <FaNodeJs size={30} title="NodeJs" className="icon"/> 
                        <div className="bar">
                            <div className="nodejs"></div>
                        </div>
                    </li>
                    <li> 
                        <DiPhotoshop size={30} title="Photoshop" className="icon"/> 
                        <div className="bar">
                            <div className="psc6"></div>
                        </div>
                    </li>

                </ul>

            </div>

            <div id="experience">

                <h2>Experience &amp; Education</h2>

                <hr></hr>

                <ul>
                    <h4>UFFTech Empresa Júnior</h4>
                    <h5>06/19 - Atualmente</h5>
                    <li>Exercendo os cargos de coordenador de BackEnd e após diretor de Projetos.</li>

                    <h4>Bacharel em Engenharia Metalúrgica</h4>
                    <h5>Previsão de Formatura - 06/2021</h5>
                    <li>Cursando Engenharia Metalúrgica na Universidade Federal Fluminense.</li>
                </ul>
            </div>

        </div>

        </div>

        </div>
    );

}