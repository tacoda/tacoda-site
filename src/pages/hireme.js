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

const badgesListStyle = {
  margin: "0 auto",
  textAlign: "center",
  marginBottom: "2rem",
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
  backgroundColor: "#8954A8",
  border: "1px solid #8954A8",
  fontSize: "1rem",
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
          utilized them to integrate third-party systems into web applications.
        </p>
        <h2 class="subtitle" style={titleStyle}>
          How I work
        </h2>
        <hr />
        <p style={paragraphStyles}>
          I like interactive organizational roles and I enjoy working with people and using information to provide a service.
          My approach is cordial, considerate and consensus-driven. When leading, I am flexible but judicious.
          My strategy is to organize and coordinate activities and encourage cooperation to get things done.
        </p>
        <p style={paragraphStyles}>
          I strive to be flexible and I promote a team approach.
          To overcome problems, I look for choices, discuss options and try to find a positive way out.
          I am motivated to anticipate potential problems and prepare for action.
          When making decisions, I guard against being surprised, build a strategy, and commit myself to a doable outcome.
          My confidence is increased by dialog to develop a reasonable position.
        </p>
        <h2 class="subtitle" style={titleStyle}>
          Skills
        </h2>
        <hr />
        <p style={paragraphStyles}>
          I have worked with many different languages and paradigms.
        </p>
        <div style={badgesListStyle}>
          <span style={badgeStyle}>
            Ruby
          </span>
          <span style={badgeStyle}>
            Python
          </span>
          <span style={badgeStyle}>
            PHP
          </span>
          <span style={badgeStyle}>
            JavaScript
          </span>
          <span style={badgeStyle}>
            CoffeeScript
          </span>
          <span style={badgeStyle}>
            TypeScript
          </span>
          <span style={badgeStyle}>
            Elixir
          </span>
          <span style={badgeStyle}>
            Haskell
          </span>
          <span style={badgeStyle}>
            OCaml
          </span>
          <span style={badgeStyle}>
            Clojure
          </span>
          <span style={badgeStyle}>
            Scheme
          </span>
          <span style={badgeStyle}>
            C
          </span>
          <span style={badgeStyle}>
            Rust
          </span>
          <span style={badgeStyle}>
            Nim
          </span>
          <span style={badgeStyle}>
            Zig
          </span>
        </div>
        <p style={paragraphStyles}>
          I have worked with a variety of web technologies.
        </p>
        <div style={badgesListStyle}>
          <span style={badgeStyle}>
            NodeJS
          </span>
          <span style={badgeStyle}>
            Express
          </span>
          <span style={badgeStyle}>
            Rails
          </span>
          <span style={badgeStyle}>
            Flask
          </span>
          <span style={badgeStyle}>
            Laravel
          </span>
          <span style={badgeStyle}>
            Actix
          </span>
          <span style={badgeStyle}>
            Rocket
          </span>
          <span style={badgeStyle}>
            Phoenix
          </span>
          <span style={badgeStyle}>
            OTP
          </span>
          <span style={badgeStyle}>
            React
          </span>
          <span style={badgeStyle}>
            LiveView
          </span>
          <span style={badgeStyle}>
            Elm
          </span>
          <span style={badgeStyle}>
            Vue
          </span>
          <span style={badgeStyle}>
            Svelte
          </span>
          <span style={badgeStyle}>
            Bootstrap
          </span>
          <span style={badgeStyle}>
            Bulma
          </span>
          <span style={badgeStyle}>
            Tailwind
          </span>
          <span style={badgeStyle}>
            Sass
          </span>
        </div>
        <p style={paragraphStyles}>
          I have worked extensively with Linux systems.
        </p>
        <div style={badgesListStyle}>
          <span style={badgeStyle}>
            Debian
          </span>
          <span style={badgeStyle}>
            Ubuntu
          </span>
          <span style={badgeStyle}>
            Fedora
          </span>
          <span style={badgeStyle}>
            CentOS
          </span>
        </div>
        <p style={paragraphStyles}>
          I have worked with several different cloud platforms.
        </p>
        <div style={badgesListStyle}>
          <span style={badgeStyle}>
            AWS
          </span>
          <span style={badgeStyle}>
            Azure
          </span>
          <span style={badgeStyle}>
            Heroku
          </span>
          <span style={badgeStyle}>
            Terraform
          </span>
        </div>
        <p style={paragraphStyles}>
          I am very comfortable working with operational tools, databases, caches, and other services.
        </p>
        <div style={badgesListStyle}>
          <span style={badgeStyle}>
            Apache
          </span>
          <span style={badgeStyle}>
            Nginx
          </span>
          <span style={badgeStyle}>
            Kafka
          </span>
          <span style={badgeStyle}>
            Cassandra
          </span>
          <span style={badgeStyle}>
            Mesos
          </span>
          <span style={badgeStyle}>
            MySQL
          </span>
          <span style={badgeStyle}>
            PostgreSQL
          </span>
          <span style={badgeStyle}>
            Memcached
          </span>
          <span style={badgeStyle}>
            Redis
          </span>
          <span style={badgeStyle}>
            Docker
          </span>
          <span style={badgeStyle}>
            Kubernetes
          </span>
          <span style={badgeStyle}>
            Consul
          </span>
          <span style={badgeStyle}>
            Nix
          </span>
          <span style={badgeStyle}>
            Datadog
          </span>
          <span style={badgeStyle}>
            Grafana
          </span>
          <span style={badgeStyle}>
            Sentry
          </span>
          <span style={badgeStyle}>
            Splunk
          </span>
        </div>
        <h2 class="subtitle" style={titleStyle}>
          Interests
        </h2>
        <hr />
        <p style={paragraphStyles}>
          My interests include web application security, cloud computing, and applications of blockchain.
        </p>
        <p style={paragraphStyles}>
          <Link to="/">Home</Link>
        </p>
      </div>
    </main>
  )
}

export default HireMePage
