import React from 'react';
import PersonImage from "../images/person-img.jpg";
import "../index.css";

export default function Info() {

    return(
        <div className='card'>
            <div className='card-info'>
                <img className='person-img' src={PersonImage} />
                <h3 className='person-name'>Esraa Alhussain</h3>
                <p className='person-position'>Frontend Developer</p>
                <p className='person-email'>esra.alhussain.s@gmail.com</p>
                
                <button class="email-button"> <i class="fas fa-envelope" id="evelope-icon" ></i>Email</button>
                <button class="linkedIn-button"> <i class="fab fa-linkedin" id="linkedin-icon"></i>LinkedIn</button>

            </div>
        </div>
    )
}