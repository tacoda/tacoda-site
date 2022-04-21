import * as React from "react"
import { Link } from "gatsby"
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

// markup
const HireMePage = () => {
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
            🥞 Fullstack Web Engineer<br />
            ☁️ Cloud Architect<br />
            🔒 Web Application Security Specialist<br />
            📖 Open Source Contributor<br />
          </div>
        </div>
      </div>
      <div>
        <h2 class="subtitle" style={titleStyle}>
          About Me
        </h2>
        <hr />
        <p style={paragraphStyles}>
          I am a fullstack web developer with a penchant for Ruby on Rails and React.
          Web application security is extremely interesting to me. Web applications have
          a very unique attack surface, which has a large impact on business operations.
          I am always interested in learning more about security and cloud computing.
          I also enjoy contributing to open source projects.
        </p>
        <h2 class="subtitle" style={titleStyle}>
          Projects
        </h2>
        <hr />
        <p style={paragraphStyles}>
          I am a fullstack web developer with a penchant for Ruby on Rails and React.
          Web application security is extremely interesting to me. Web applications have
          a very unique attack surface, which has a large impact on business operations.
          I am always interested in learning more about security and cloud computing.
          I also enjoy contributing to open source projects.
        </p>
        <p style={paragraphStyles}>
          <Link to="/">Go home</Link>.
        </p>
      </div>
    </main>
  )
}

export default HireMePage
