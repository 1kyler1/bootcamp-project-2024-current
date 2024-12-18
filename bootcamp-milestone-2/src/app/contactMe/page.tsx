
// "use client";
// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// const ContactMe = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();

//         const templateParams = {
//             name,
//             email,
//             message,
//         };

//         emailjs
//             .send(
//                 "service_rdan99y",     // Replace with your EmailJS service ID
//                 'template_5sczqnr',     // Replace with your EmailJS template ID
//                 templateParams,
//                 'jD9PqXtcSdBX4t4-X'          // Replace with your EmailJS user ID
//             )
//             .then(
//                 (response: { status: any; text: any; }) => {
//                     console.log('SUCCESS!', response.status, response.text);
//                     alert('Your message has been sent successfully!');
//                 },
//                 (error: any) => {
//                     console.log('FAILED...', error);
//                     alert('An error occurred, please try again.');
//                 }
//             );

//         // Clear form fields
//         setName('');
//         setEmail('');
//         setMessage('');
//     };

//     return (
//         <div>
//             <h1 className="page-title">CONTACT ME</h1>
//             <main>
//                 <h3 id="contact">Contact Form</h3>
//                 <form id="contact_form" onSubmit={handleSubmit}>
//                     <label htmlFor="name" id="contact">Name</label>
//                     <input
//                         type="text"
//                         id="contact"
//                         name="name"
//                         placeholder="Name"
//                         required
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                     />
                    
//                     <label htmlFor="email" id="contact">Email</label>
//                     <input
//                         type="email"
//                         id="contact"
//                         name="email"
//                         placeholder="Email"
//                         required
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
                    
//                     <label htmlFor="message" id="contact">Message</label>
//                     <textarea
//                         id="contact"
//                         name="message"
//                         placeholder="Message"
//                         required
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                     ></textarea>
                    
//                     <button id="contact" type="submit">Submit</button>
//                 </form>
//             </main>
            
//         </div>
//     );
// };

// export default ContactMe;
    
  
"use client";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactMe.module.css'; // Import the CSS module

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const templateParams = {
            name,
            email,
            message,
        };

        emailjs
            .send(
                "service_rdan99y",     // Replace with your EmailJS service ID
                'template_5sczqnr',     // Replace with your EmailJS template ID
                templateParams,
                'jD9PqXtcSdBX4t4-X'          // Replace with your EmailJS user ID
            )
            .then(
                (response: { status: any; text: any; }) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Your message has been sent successfully!');
                },
                (error: any) => {
                    console.log('FAILED...', error);
                    alert('An error occurred, please try again.');
                }
            );

        // Clear form fields
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