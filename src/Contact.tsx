import React from 'react';
import { contactData, navHeaderData } from './constants';
import './Contact.css';
import { FaGithub, FaPhone, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Contact() {
    const { label } = navHeaderData.data['contact'];
    const { email, phone, github, linkedIn } = contactData;
    return (
        <div id="contact">
            <header>
                <span>{label}</span>
            </header>
            <main>
                <div id="photo">
                    <img src="pic.png"></img>
                </div>
                <div id="contact-details">
                    <div id="email">
                        <MdEmail />
                        <span>{email.id}</span>
                    </div>
                    <div>
                        <FaPhone />
                        <span>{phone.id}</span>
                    </div>
                    <div id="github">
                        <FaGithub />
                        <span><a href={github.url} target="_blank">{github.id}</a></span>
                    </div>                    
                    <div>
                        <FaLinkedin />
                        <span><a href={linkedIn.url} target="_blank">{linkedIn.id}</a></span>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default Contact;
