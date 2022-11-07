import ProfilePic from "../images/ProfilePic.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="row">
        <div className="col-6 d-flex  align-items-center">
          <img src={ProfilePic} className="profilePicContact" alt="" />
        </div>
        <div className="col-6 d-flex flex-column align-items-center contactLinks">
          <h1>Let's Get in Touch!</h1>
          <h3>Email</h3>
          <a
            href="mailto:neumann.jessica42@gmail.com"
            target="_top"
            rel="noreferrer"
          >
            neumann.jessica42@gmail.com
          </a>
          <h3>Twitter</h3>
          <a
            href="https://twitter.com/enigmajess"
            target="_blank"
            rel="noreferrer"
          >
            @enigmajess
          </a>
          <h3>Instagram</h3>
          <a
            href="https://www.instagram.com/enigma_jess/?next=%2Fenigmajess%2F"
            rel="noreferrer"
            target="_blank"
          >
            @enigma_jess
          </a>

          <h3>Linkedin</h3>
          <a
            href="https://www.linkedin.com/in/jessica-neumann-998305192/"
            rel="noreferrer"
            target="_blank"
          >
            Jessica Neumann
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
