import { useRef } from "react";
import emailjs from "@emailjs/browser"; 
import { Toaster, toast } from "react-hot-toast";
import "../styles/contact.css";
import github from "../images/github-white-icon.svg";
import linkedin from "../images/linkedin-white-icon.svg";

function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!form.current) return;

      toast.promise(
      emailjs.sendForm(
        "service_eh713pj",
        "template_tsb0g5q",
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ),
      {
        loading: "Envoi en cours...",
        success: "Message envoyé avec succès !",
        error: "Erreur lors de l'envoi.",
      }
    ).then(() => {
        form.current?.reset();
      });
    };

    return (
    <>
    <section id="contact">  
      <h3 className="contact">
        Contact
      </h3>
        <div className="contact-section">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Nom</label>
          <input type="text" name="user_name" required />

          <label>Email</label>
          <input type="email" name="user_email" required />

          <label>Message</label>
          <textarea name="message" required />

          <button type="submit">Envoyer</button>
          <Toaster
            position="bottom-right"
            reverseOrder={false}
          />
        </form>
        <div className="icons-intro">
          <a href="https://github.com/Marina-404" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/marina-saraiva-9a593b341/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
        </div>
    </section>  
    </>
    );
}

export default Contact;