import React from 'react';
import logoImg from "../../assets/images/logo.svg"

function Landing(){
    return(
        <div id="page-ladin">
            <div id="page-landing-content" className="container">
                <div id="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudo online</h2>
                </div>
            </div>
        </div>

    )

}

export default Landing;