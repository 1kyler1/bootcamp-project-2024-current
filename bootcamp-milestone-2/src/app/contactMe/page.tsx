 
"use client";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './contactMe.module.css'; // Import the CSS module

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();

    //     const templateParams = {
    //         name,
    //         email,
    //         message,
    //     };

    //     emailjs
    //         .send(
    //             "service_rdan99y",     // Replace with your EmailJS service ID
    //             'template_5sczqnr',     // Replace with your EmailJS template ID
    //             templateParams,
    //             'jD9PqXtcSdBX4t4-X'          // Replace with your EmailJS user ID
    //         )
    //         .then(
    //             (response: { status: any; text: any; }) => {
    //                 console.log('SUCCESS!', response.status, response.text);
    //                 alert('Your message has been sent successfully!');
    //             },
    //             (error: any) => {
    //                 console.log('FAILED...', error);
    //                 alert('An error occurred, please try again.');
    //             }
    //         );

    //     // Clear form fields
    //     setName('');
    //     setEmail('');
    //     setMessage('');
    // };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        const templateParams = {
            name,
            email,
            message,
        };
    
        emailjs
            .send(
                "service_rdan99y",
                'template_5sczqnr',
                templateParams,
                'jD9PqXtcSdBX4t4-X'
            )
            .then(
                (response: { status: number; text: string }) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Your message has been sent successfully!');
                },
                (error: unknown) => {
                    if (error instanceof Error) {
                        console.log('FAILED...', error.message);
                        alert('An error occurred, please try again.');
                    } else {
                        console.log('FAILED...', error);
                        alert('An unexpected error occurred.');
                    }
                }
            );
    
        setName('');
        setEmail('');
        setMessage('');
    };
    

    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>CONTACT ME</h1>
            <main className={styles.main}>
                <h3 className={styles.formTitle}>Contact Form</h3>
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <button className={styles.submitButton} type="submit">Submit</button>
                </form>
            </main>
        </div>
    );
};

export default ContactMe;



