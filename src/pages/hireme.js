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
          How I can help your organization
        </h2>
        <hr />
        <p style={paragraphStyles}>
          I can help bring your vision from idea to production.
          I am familiar with technologies in the entire web stack.
          I am comfortable working with databases, memory caches,
          job queues, web servers, cloud services, Linux distributions,
          containers and orchestration, Bash scripting, backend code, and frontend code.
          I have also worked extensively with REST web APIs and I have
          utilized them to integrate payment systems into web applications.
        </p>
        <h2 class="subtitle" style={titleStyle}>
          How I work
        </h2>
        <hr />
        <p style={paragraphStyles}>
          I like interactive organizational roles and I enjoy working with people and using information to provide a service.
          Cordial, considerate and consensus-driven in approach. Flexible but judicious when leading.
          Obtains agreement on policies and procedures, increases morale through participation, and facilitates a process.
          Organizes and coordinates activities and encourages cooperation to get things done.
        </p>
        <p style={paragraphStyles}>
          I strive to be flexible and I promote a team approach.
          I expect to have a definite goal and to have a say in the outcome.
          To overcome problems, I look for choices, discuss options and try to find a positive way out.
        </p>
        <p style={paragraphStyles}>
          I am motivated to anticipate potential problems and prepare for action.
          When making decisions, I guard against being surprised, build a strategy,
          and commit myself to a doable outcome.
          Under pressure, I slow my response time and look at potential choices.
          My confidence is increased by dialog to develop a reasonable position.
        </p>
        <h2 class="subtitle" style={titleStyle}>
          Skills
        </h2>
        <hr />
        <p style={paragraphStyles}>
          I have worked with many different web technologies including:
          Ruby, Rails, React, Phoenix, LiveView, Bulma, Tailwind, and Sass.
          I have worked with several different cloud platforms such as
          AWS, Azure, and Heroku.
        </p>
        <h2 class="subtitle" style={titleStyle}>
          Interests
        </h2>
        <hr />
        <p style={paragraphStyles}>
          I am very interested in web application security, cloud computing,
          and applications of blockchain.
        </p>
        <p style={paragraphStyles}>
          <Link to="/">Go home</Link>.
        </p>
      </div>
    </main>
  )
}

export default HireMePage
