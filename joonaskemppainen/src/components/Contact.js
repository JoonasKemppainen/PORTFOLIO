import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import me from '../resources/me.jpg';

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      toast.success('Message sent successfully!', { position: toast.POSITION.BOTTOM_RIGHT });
      form.current.reset();
    } catch (error) {
      toast.error('An error occurred. Please try again later.', { position: toast.POSITION.BOTTOM_RIGHT });
    }

    setIsSending(false);
  };

  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <br />
      <div className="contact-container">
        <div className="contact-image">
          <img src={me} alt="me" />
        </div>
        <div className="contact-info">
          <div className="looking-for">
            <h3>What am I looking for?</h3>
            <br />
            <p>
              As a frontend developer, I'm passionate about challenging projects that create exceptional user
              experiences. Continuous learning and staying up-to-date with the latest tools and frameworks are
              priorities for me. Let's connect and create amazing experiences together if you have an opportunity
              that aligns with my goals.
            </p>
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" required />
              <label>Email</label>
              <input type="email" name="user_email" required />
              <label>Message</label>
              <textarea name="message" rows={5} required />
              <input type="submit" value={isSending ? 'Sending...' : 'Send'} disabled={isSending} />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default Contact;