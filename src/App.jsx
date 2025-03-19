import "./App.css";
import "./mediaqueries.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function App() {
  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    menu.classList.toggle("active");
  };

  //*************** */
  const [theme, setTheme] = useState("light");

  // Cambia el tema y guarda la preferencia en localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Aplica el tema almacenado cuando se carga la app
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  //****** */

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container"
    >
      <nav id="desktop-nav">
        <div className="logo">Aldair Broncano</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <motion.li
              className="tema"
              onClick={toggleTheme}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </motion.li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Aldair Broncano</div>
        <div className="hamburger-menu">
          <div className="hamburge-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="menu-links">
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                {" "}
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                {" "}
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                {" "}
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>

      <section id="profile">
        <div className="section__pic-container">
          <img
            src="./images/profile-pic.png"
            alt="Aldair Broncano profile picture"
          />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>

          <h1 className="title">Aldair Broncano</h1>

          <p className="section__text__p1">Java Developer</p>

          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => window.open("./images/AldairBroncanoSotelo.pdf")}
            >
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onClick={() =>
                window.open("mailto:aldairbroncanosotelo@gmail.com")
              }
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <motion.img
              src="./images/linkedin.png"
              alt="My LinkedIn profile"
              className="icon"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/aldair-broncano-98327221b",
                  "_blank"
                )
              }
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.4 }}
              transition={{ duration: 0.4 }}
            ></motion.img>
            <motion.img
              src="./images/github.png"
              alt="My Github profile"
              className="icon"
              onClick={() =>
                window.open("https://github.com/AldairBroncano", "_blank")
              }
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.4 }}
              transition={{ duration: 0.4 }}
            ></motion.img>
          </div>
        </div>
      </section>

      <section id="about">
        <p className="section__text__p1">Get to Know more</p>
        <h1 className="title">About me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src="./images/about-pic.jpg"
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src="./images/experience.png"
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>
                  Freelancer 1+ years <br />
                  Backend Development
                </p>
              </div>

              <div className="details-container">
                <img
                  src="./images/education.png"
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>Computer and Informatics student</p>
              </div>
            </div>

            <div className="text-container">
              <p>
                Hi everyone, I'm Aldair Broncano from Lima, Peru. A student in
                the final cycles of Computer Science and Informatics at the
                Higher Institute of Technology, Cibertec (Peru). Currently, I'm
                strengthening my skills in Full Stack development with Java and
                other technologies.
              </p>
            </div>
          </div>
        </div>
        <img
          src="./images/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onclick="location.href='./#experience'"
        />
      </section>
      <section id="experience">
        <p className="section__text__p1">Explore my</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src="./images/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./images/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./images/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./images/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Bootsstrap</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./images/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>React</h3>
                    <p>Basic</p>
                  </div>
                </article>
              </div>
            </div>

            <div className="details-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src="./images/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Java</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./images/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Spring</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./images/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>MySQL</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./images/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>SQL server</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./images/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./images/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onclick="location.href='./#projects'"
        />
      </section>

      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <motion.div
              onClick={toggleTheme}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.4 }}
              transition={{ duration: 0.4 }}
              className="details-container color-container"
            >
              <div className="article-container">
                <img
                  src="./images/project-1.png"
                  alt="Project 1"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Project One
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open("https://github.com/AldairBroncano", "_blank")
                  }
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Live Demo
                </button>
              </div>
            </motion.div>

            <motion.div
              onClick={toggleTheme}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.4 }}
              transition={{ duration: 0.4 }}
              className="details-container color-container"
            >
              <div className="article-container">
                <img
                  src="./images/project-2.png"
                  alt="Project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Project Two
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Live Demo
                </button>
              </div>
            </motion.div>
            <motion.div
              onClick={toggleTheme}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.4 }}
              transition={{ duration: 0.4 }}
              className="details-container color-container"
            >
              <div className="article-container">
                <img
                  src="./images/project-3.png"
                  alt="Project 3"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Project Three
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Live Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        <img
          src="./images/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onclick="location.href='./#contact'"
        />
      </section>

      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src="./images/email.png"
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <a href="mailto:aldairbroncanosotelo@gmail.com">
                aldairbroncanosotelo@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src="./images/linkedin.png"
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p>
              <a href="https://www.linkedin.com/in/aldair-broncano-98327221b">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2023 John Doe. All Rights Reserved.</p>
      </footer>
      <script src="script.js"></script>
    </motion.div>
  );
}

export default App;
