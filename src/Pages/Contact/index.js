import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FaRegCopyright } from 'react-icons/fa';
import ContactTitle from './ContactTitle';
import { RiMailSendLine, RiMapPin2Line, RiPhoneLine, RiMailLine } from 'react-icons/ri';


export default function Contact() { 
    
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

                <Link to="/resume">
           
                <li>Resume</li>
                
                </Link>


                <li id='selected'>Contact</li>
                
                
            </ul>

            
            <footer>
                <FaRegCopyright size={12} color={"#4dff4d"}></FaRegCopyright>
                <span> 2020 Gabriel Silvério</span>
            </footer>
        </div>

        <div className="content">
        
        {/* <div className="circle-container">
            <div className="circle"></div>
        </div> */}

        <div className="bg-marker"></div>
        {/* <div className="bg-marker" id="mk2"></div>
        <div className="bg-marker" id="mk3"></div>
        <div className="bg-marker" id="mk4"></div>
        <div className="bg-marker" id="mk5"></div> */}

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

        <ContactTitle></ContactTitle>

        <div className="contact-container">

            <div className="form">
                <form action="">

                    <input type="text" placeholder="Nome"/>

                    <input type="email" placeholder="Email"/>

                    <input type="text" placeholder="Assunto"/>

                    <textarea placeholder="Mensagem">

                    </textarea>
                    
                    <button>
                        <RiMailSendLine size={27.5} className="icon"/>
                        <span> Enviar </span>
                    </button>

                </form>
            </div>

            <div className="info">
                
                <div>
                    <RiPhoneLine size={50} color={'#a4acc4'} className="info-icon"/>
                    <hr></hr>
                    <span> (99) 9 9999 9999 </span>
                </div>

                <div>
                    <RiMailLine size={50} color={'#a4acc4'} className="info-icon"/>
                    <hr></hr>
                    <span> example@email.com </span> 
                </div>

                <div>
                    <RiMapPin2Line size={50} color={'#a4acc4'} className="info-icon"/>
                    <hr></hr>
                    <span>
                    Lorem Ipsum Dolor sit Amet
                    Lorem Ipsum - Lorem Impsum
                    </span>
                </div>

            </div>

        </div>
        
        
        </div>

        </div>

    );

}