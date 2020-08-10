import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://scontent.fcgh5-1.fna.fbcdn.net/v/t1.0-9/s960x960/117299272_3115187391911330_837538954971185477_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_eui2=AeFbZCY7BWb11XPI1LsNpvrQEFLSOqM2DvsQUtI6ozYO-4JpGZT0oqRaXc3jR2mhy87UTNZLqeq7lv3Bjix37Ib8&_nc_ohc=vS9nybOAIKAAX-nqLWE&_nc_ht=scontent.fcgh5-1.fna&_nc_tp=7&oh=35647a937cbede1aea85134d04ddecaa&oe=5F56593F" alt="Giovanna"/>
            <div>
                <strong>Giovanna Bastos</strong>
                <span>Matemática</span>

            </div>
        </header>

        <p>
            Entusiasta das mais loucas e teorias já inventadas.
            <br/><br/>
            Professora de Matemática na faculdade federal de abobrinhas do sul, apaixonada por gatos e GIN, 
            mais de 1000 alunos já foram ensinados
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 20,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Entrar em contato"/>
                Entrar em contato
            </button>  
        </footer>
    </article>
    )
}

export default TeacherItem;