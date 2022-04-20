import * as React from "react"
import 'bulma/css/bulma.css'

// styles
const pageStyles = {
  backgroundColor: "#f7f7f7",
  color: "#3c3c3c",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
  fontSize: "1.2em",
  textAlign: "center",
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const centered = {
  margin: "0 auto",
}

const titleStyle = {
  textAlign: "center",
}

const navLinkStyle = {
  color: "#8954A8",
  textAlign: "center",
}

const descriptionStyle = {
  color: "#5e5e5e",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const headingStyles = {
  marginTop: 32,
  marginBottom: 64,
  maxWidth: 320,
}

const navStyle = {
  marginBottom: 64,
}

// data
const links = [
  {
    text: "GitHub",
    url: "https://github.com/tacoda",
  },
  {
    text: "Contact Me",
    url: "https://14c3lb7tvwf.typeform.com/to/A6wavkIt",
  },
  {
    text: "Curriculum Vitae",
    url: "/cv.pdf",
  },
]

const projects = [
  {
    text: "wl",
    url: "https://github.com/tacoda/wl",
    description:
      "WhoIs Lookup Tool",
  },
  {
    text: "Roarum",
    url: "https://github.com/tacoda/roarum",
    description:
      "Web Forum",
  },
  {
    text: "Jaws",
    url: "https://github.com/tacoda/jaws",
    description:
      "AWS Command Line Tool",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Ian Johnson</title>
      <div class="box">
        <div>
          <figure class="image is-96x96" style={centered}>
            <img
              alt="Gravatar"
              src="http://gravatar.com/avatar/0a09dcb201b488dece3b9e47e3f2443b"
              class="is-rounded"
            />
          </figure>
          <h1 class="title" style={titleStyle}>
            Ian Johnson
          </h1>
          <hr />
          <div class="container" style={titleStyle}>
            🌐 Fullstack Web Engineer<br />
            ☁️ Cloud Architect<br />
            🔒 Web Application Security Specialist<br />
            💎🛤⚛️ Ruby on Rails &amp; React Developer<br />
            🦀 Rustacean<br />
            👽 Lisp Lover<br />
            📞 OTP Enthusiast<br />
            📖 Open Source Contributor<br />
          </div>
        </div>
      </div>
      <nav style={navStyle}>
        <div class="columns">
          {links.map(link => (
            <div class="column is-one-third">
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <a
                      style={linkStyle}
                      href={`${link.url}`}
                    >
                      <h2 style={navLinkStyle}>{link.text}</h2>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </nav>
      <div>
        <h2 class="subtitle" style={titleStyle}>
          About Me
        </h2>
        <hr />
        <p style={paragraphStyles}>
          I am a fullstack web developer with a penchant for Ruby on Rails and React.
          Web application security is very interesting to me. The ways in which web applications
          switch language contexts allows for a very interesting attack surface that tends to be
          very impactful to business operations given the ubiquity of the internet.
          I am always interested in learning more about security and cloud computing.
        </p>
        <p style={paragraphStyles}>
          Technologies that I have used include Bash, Ruby, JavaScript, Elixir, Clojure, Rust,
          Rails, Phoenix, React, LiveView, Sass, Bootstrap, jQuery, Bulma, Tailwind, Font Awesome,
          Git, Linux, Docker, Kubernetes, Azure, AWS, and Heroku. I have also contributed to open source projects.
        </p>
        <h2 class="subtitle" style={titleStyle}>
          Projects
        </h2>
        <hr />
        <div class="columns">
          {projects.map(proj => (
            <div class="column is-one-third">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    <a
                      style={linkStyle}
                      href={`${proj.url}`}
                    >
                      {proj.text}
                    </a>
                  </p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <p style={descriptionStyle}>{proj.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default IndexPage
