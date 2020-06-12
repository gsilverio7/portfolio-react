import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FaRegCopyright, FaGithubSquare } from 'react-icons/fa';
import Titulo from './HomeTitle';


export default function Home() { 
    
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
                
                <li id='selected'>Home</li>
                
                </Link>

                <Link to="/about">
                
                <li>About</li>
               
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


        <div className="bn-bg">
            01001100 01101111 01110010 01100101 01101101 00100000 01101001 01101001
        </div>

        <div className="bn-bg" id="bg2">
            01001100 01101111 01110010 01100101 01101101 00100000 01101001 01101001
        </div>

        <div className="bn-bg" id="bg3">
            01001100 01101111 01110010 01100101 01101101 00100000 01101001 01101001
        </div>

        <div className="bn-bg" id="bg4">
            01001100 01101111 01110010 01100101 01101101 00100000 01101001 01101001
        </div>

        <div className="bn-bg" id="bg5">
            01001100 01101111 01110010 01100101 01101101 00100000 01101001 01101001
        </div>

        <div className="bn-bg" id="bg6">
            01001100 01101111 01110010 01100101 01101101 00100000 01101001 01101001
        </div>

        <div className="bn-bg" id="bg6">
            01001100 01101111 01110010 01100101 01101101 00100000 01101001 01101001
        </div>

        <div className="bn-bg" id="bg7">
            01001100 01101111 01110010 01100101 01101101 00100000 01101001 01101001
        </div>

        <div className="bn-bg" id="bg8">
            01001100 01101111 01110010 01100101 01101101 00100000 01101001 01101001
        </div>

        <div className="bn-bg" id="bg9">
            01001100 01101111 01110010 01100101 01101101 00100000 01101001 01101001
        </div>

        <div className="bn-bg" id="bg10">
            01001100 01101111 01110010 01100101 01101101 00100000 01101001 01101001
        </div>

        <div className="bn-bg" id="bg11">
            01001100 01101111 01110010 01100101 01101101 00100000 01101001 01101001
        </div>

        <Titulo></Titulo>

        <div className="description">
            <p>Sou estudante de engenharia metalúrgica pela UFF e um desenvolvedor web.</p>
        </div>

        <div className="git-logo"> 
            <a href="https://github.com/gsilverio7" target="blank"> 
                <FaGithubSquare size={50} title="Acesse meu portfólio no GitHub"/> 
            </a> 
        </div>
        
        {/* <div className="bg-element"></div>
        <div className="bg-element" id="sec"></div> */}

        {/* <div className="bg-pulse"></div> */}
        
        </div>

        </div>

    );

}