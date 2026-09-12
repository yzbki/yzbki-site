import { Link, NavLink, Route, Routes } from "react-router-dom";
import Piggy from "./Piggy";

const GITHUB_URL = "https://github.com/yzbki";
const GITHUB_MUDIR_URL = "https://github.com/yzbki/mudir-app";
const GITHUB_NIDHAM_URL = "https://github.com/yzbki/nidham-app";
const PLAYSTORE_NIDHAM_URL = "https://play.google.com/store/apps/details?id=com.youzbaki.nidham"
const LINKEDIN_URL = "https://linkedin.com/in/mus-alyouzbaki";
const EMAIL_URL = "mailto:mus.alyouzbaki@gmail.com";

function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand">
          M<span>.</span>A<span>.</span>
        </Link>

        <nav className="navigation">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/projects">
            Projects
          </NavLink>

          <NavLink to="/experience">
            Experience
          </NavLink>
        </nav>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mus.alyouzbaki@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="contact-pill"
        >
          Contact
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} Mustafa Al-Youzbaki
        </span>

        <div className="footer-links">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a href={EMAIL_URL}>
            Email ↗
          </a>
        </div>
      </div>
    </footer>
  );
}

function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}

/* =========================================================
   HOME
========================================================= */

function Home() {
  return (
    <Layout>
      <section className="hero container">
        <div className="eyebrow">
          <span className="status-dot" />
          Open to software opportunities
        </div>

        <div className="hero-profile">
          <img
            src="/portrait.jpg"
            alt="Mustafa Al-Youzbaki"
            className="portrait"
          />

          <div>
            <h1>
              Mustafa{" "}
              <span className="name-nowrap">Al-Youzbaki</span>
              <br />
              <em>I build software.</em>
            </h1>

            <p className="hero-copy">
              Computing graduate building practical software
              across web, mobile, and AI.
            </p>
          </div>
        </div>
        <div className="hero-actions">
          <Link
            to="/projects"
            className="button button-primary"
          >
            View my work
            <span>→</span>
          </Link>

          <Link
            to="/experience"
            className="button button-secondary"
          >
            Experience
          </Link>
        </div>

        <div className="quick-stats">
          <div>
            <strong>2026</strong>
            <span>Queen’s Computing</span>
          </div>

          <div>
            <strong>3</strong>
            <span>Featured projects</span>
          </div>

          <div>
            <strong>9+</strong>
            <span>Languages & technologies</span>
          </div>
        </div>
      </section>

      <section className="home-strip">
        <div className="container strip-grid">
          <div>
            <p className="section-label">Currently building</p>

            <h2>Mudir</h2>

            <p>
              A full-stack business management platform for
              small and mid-sized businesses.
            </p>
          </div>

          <Link
            to="/projects"
            className="text-link"
          >
            See projects
            <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="home-about container">
        <div className="about-label">
          <p className="section-label">A little about me</p>
        </div>

        <div className="about-content">
          <h2>
            I enjoy turning ideas into
            <span> useful software.</span>
          </h2>

          <p>
            My background spans software development,
            artificial intelligence, mobile development,
            and full-stack applications. I like working on
            projects where I can understand the problem,
            design the system, and build the product myself.
          </p>

          <Link
            to="/experience"
            className="text-link"
          >
            More about my background
            <span>↗</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    number: "01",
    title: "Mudir",
    subtitle: "Business Management Platform",
    description:
      "A full-stack platform for managing employee records, inventory, and task workflows for small and mid-sized businesses. Designed around role-based access and business-specific data isolation.",
    stack: [
      "React",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "JPA / Hibernate",
    ],
    status: "In development",
    githubUrl: GITHUB_MUDIR_URL,
  },

  {
    number: "02",
    title: "Nidham",
    subtitle: "Checklist Management App",
    description:
      "An independently designed, built, and published Android application supporting dynamic checklists, import/export, sorting, undo functionality, and AI-powered list generation.",
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Firebase",
      "Node.js",
      "OpenAI API",
    ],
    status: "Published",
    githubUrl: GITHUB_NIDHAM_URL,
    playStoreUrl: PLAYSTORE_NIDHAM_URL,
  },

  {
    number: "03",
    title: "Fake News Classifier",
    subtitle: "Machine Learning Project",
    description:
      "A team-built fake-news classifier trained on 72,000 labelled news articles using a multi-layer feedforward neural network. The model achieved 88.9% test accuracy.",
    stack: [
      "Python",
      "PyTorch",
      "NumPy",
      "Neural Networks",
      "Git",
    ],
    status: "Completed",
  },
];

function Projects() {
  return (
    <Layout>
      <section className="page-hero container">
        <p className="section-label">
          Selected work
        </p>

        <h1>Projects</h1>

        <p>
          A selection of software I've built across
          full-stack development, mobile, and machine
          learning.
        </p>
      </section>

      <section className="container project-list">
        {projects.map((project) => (
          <article
            className="project-card"
            key={project.title}
          >
            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>

              <span className="project-status">
                {project.status}
              </span>
            </div>

            <h2>{project.title}</h2>

            <p className="project-subtitle">
              {project.subtitle}
            </p>

            <p className="project-description">
              {project.description}
            </p>

            <div className="tags">
              {project.stack.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <div className="project-links">
              {project.githubUrl && (
                <a
                  className="text-link"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub
                  <span>↗</span>
                </a>
              )}

              {project.playStoreUrl && (
                <a
                  className="text-link"
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Play Store
                  <span>↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="project-note">
        <div className="container project-note-inner">
          <p className="section-label">
            More coming soon
          </p>

          <h2>
            I’m always building something.
          </h2>

          <p>
            New projects and experiments will be added
            here as they develop.
          </p>
        </div>
      </section>
    </Layout>
  );
}

/* =========================================================
   EXPERIENCE
========================================================= */

function Experience() {
  return (
    <Layout>
      <section className="page-hero container">
        <p className="section-label">
          Background
        </p>

        <h1>Experience</h1>

        <p>
          Education and work experience that shaped how
          I approach software, problem-solving, and
          working with others.
        </p>
      </section>

      <section className="container timeline-section">
        <div className="timeline-heading">
          Education
        </div>

        <article className="timeline-item">
          <div className="timeline-date">
            2020 — 2026
          </div>

          <div>
            <h2>Queen’s University</h2>

            <p className="muted">
              Bachelor of Computing (Hons.)
              <br />
              Specialization in Cognitive Science
            </p>

            <p>
              Completed a Bachelor of Computing with a
              specialization in Cognitive Science. Relevant
              coursework included Artificial Intelligence,
              Software Development, Data Structures &
              Algorithms, Neural Networks, Reinforcement
              Learning, Data Analytics, Discrete Mathematics,
              Linear Algebra, and Genetic Models.
            </p>
          </div>
        </article>

        <div className="timeline-heading work-heading">
          Work
        </div>

        <article className="timeline-item">
          <div className="timeline-date">
            Aug 2026 — Present
          </div>

          <div>
            <h2>Marine Tavern</h2>

            <p className="muted">
              Line Cook / Prep Cook · Oakville, ON
            </p>

            <p>
              Cook orders across fryer, grill, pan, and
              cold stations while completing daily prep
              work and maintaining food quality, cleanliness,
              and organization in a fast-paced kitchen.
            </p>
          </div>
        </article>

        <article className="timeline-item">
          <div className="timeline-date">
            Jun 2023 — Oct 2023
          </div>

          <div>
            <h2>Kelsey’s Original Roadhouse</h2>

            <p className="muted">
              Line Cook · Burlington, ON
            </p>

            <p>
              Prepared and cooked high-volume orders while
              coordinating with cooks, servers, and
              management. Demonstrated reliability,
              adaptability, and consistent quality service
              under pressure.
            </p>
          </div>
        </article>

        <article className="timeline-item">
          <div className="timeline-date">
            Apr 2022 — Sep 2022
          </div>

          <div>
            <h2>The Brass Pub</h2>

            <p className="muted">
              Line Cook · Kingston, ON
            </p>

            <p>
              Cross-trained across fry, grill, and prep
              stations in a small team. Managed closing
              responsibilities including cleaning,
              restocking, and equipment maintenance.
            </p>
          </div>
        </article>
      </section>

      <section className="skills-section">
        <div className="container">
          <p className="section-label">
            Toolkit
          </p>

          <h2>Technical skills</h2>

          <div className="skills-grid">
            <div>
              <h3>Programming</h3>

              <p>
                Java · TypeScript · JavaScript · Kotlin ·
                Python · SQL · C++ · C# · HTML/CSS
              </p>
            </div>

            <div>
              <h3>Frameworks & Tools</h3>

              <p>
                React · Spring Boot · Spring Data JPA ·
                Node.js · Jetpack Compose · Firebase · Git ·
                RESTful APIs
              </p>
            </div>

            <div>
              <h3>Languages</h3>

              <p>
                English · Arabic · French
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* =========================================================
   APP / ROUTING
========================================================= */

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/projects"
        element={<Projects />}
      />

      <Route
        path="/experience"
        element={<Experience />}
      />

      <Route
        path="/piggy"
        element={<Piggy />}
      />

      <Route
        path="*"
        element={<Home />}
      />
    </Routes>
  );
}