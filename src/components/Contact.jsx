import githubLogo from "/home/yerayafonso/Northcoders/frontend/nc-news/src/assets/github.svg";
import linkedinLogo from "/home/yerayafonso/Northcoders/frontend/nc-news/src/assets/linkedin.svg";

function Contact() {
  return (
    <main className="contact-page">
      <h2>LinkedIn</h2>
      <a href="https://www.linkedin.com/in/yeray-afonso/" target="_blank">
        <img src={linkedinLogo} className="linkedin" />
      </a>
      <h2>GitHub</h2>
      <a href="https://github.com/yerayafonso" target="_blank">
        <img src={githubLogo} className="linkedin" />
      </a>
    </main>
  );
}

export default Contact;
