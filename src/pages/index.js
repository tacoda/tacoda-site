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

// data
const links = [
  {
    text: "GitHub",
    url: "https://github.com/tacoda",
    description:
      "My code repositories",
  },
  {
    text: "Dev.to",
    url: "https://dev.to/tacoda",
    description:
      "My blog posts",
  },
  {
    text: "Stack Overflow",
    url: "https://stackoverflow.com/story/tacoda",
    description:
      "My developer story",
  },
  {
    text: "Twitter",
    url: "https://twitter.com/tacoda_dev",
    description:
      "My twitter profile",
  },
  {
    text: "Email",
    url: "mailto:tacoda@hey.com",
    description:
      "tacoda@hey.com",
  },
]

const projects = [
  {
    text: "fd",
    labels: ["open-source"],
    url: "https://github.com/sharkdp/fd",
    description:
      "Find entries in your filesystem",
  },
  {
    text: "Jaws",
    labels: ["open-source", "owner"],
    url: "https://github.com/tacoda/jaws",
    description:
      "Interact with AWS resources",
  },{
    text: "Caml",
    labels: ["open-source", "owner"],
    url: "https://rubygems.org/gems/caml",
    description:
      "Build CLI apps using declarative yaml",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Ian Johnson</title>
        <div class="box">
          <div>
              <figure class="image is-128x128" style={centered}>
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
                🔒 Web Security Specialist<br />
                🛤⚛️ Rails &amp; React Developer<br />
                🐍 Pythonista<br />
                💎 Rubyist<br />
                💧 Alchemist<br />
                🦀 Rustacean<br />
                👽 Lisp Lover<br />
                📖 OSS Contributor<br />
                🤓 Crypto Nerd<br />
              </div>
          </div>
        </div>
      <div>
        <h2 class="subtitle" style={titleStyle}>
          About Me
        </h2>
        <hr />
        <p style={paragraphStyles}>
          I am a fullstack web developer with a penchant for <a href="https://rubyonrails.org/">Ruby on Rails</a> and <a href="https://reactjs.org/">React</a>.<br />
          My favorite programming language is <a href="https://en.wikipedia.org/wiki/Lisp_(programming_language)">Lisp</a>.<br />
          I also really enjoy working with <a href="https://www.python.org/">Python</a>, <a href="https://www.ruby-lang.org/">Ruby</a>, <a href="https://elixir-lang.org/">Elixir</a>,and <a href="https://www.rust-lang.org/">Rust</a>.<br />
          I have worked with <a href="https://en.wikipedia.org/wiki/Linux">Linux</a>, <a href="https://www.docker.com/">Docker</a>, and <a href="https://kubernetes.io/">Kubernetes</a>.<br />
          I have worked with serveral <a href="https://en.wikipedia.org/wiki/Cloud_computing">cloud</a> service vendors, including <a href="https://aws.amazon.com/">AWS</a> and <a href="https://azure.microsoft.com/">Azure</a>.<br />
          Additionally, I contribute to <a href="https://en.wikipedia.org/wiki/Open-source_software">open source</a> projects.<br />
          From time to time, I write blog posts on the <a href="https://dev.to/">DEV Community</a>.<br />
          Recently, I started my journey into learning about <a href="https://en.wikipedia.org/wiki/Web3">Web3</a>.
        </p>
        <div class="columns">
          {links.map(link => (
            <div class="column is-one-fifth">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    <a
                      style={linkStyle}
                      href={`${link.url}`}
                    >
                      {link.text}
                    </a>
                  </p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <p style={descriptionStyle}>{link.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 class="subtitle" style={titleStyle}>
          Projects
        </h2>
        <hr />
        <div class="columns">
          {projects.map(project => (
            <div class="column is-one-third">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    <a
                      style={linkStyle}
                      href={`${project.url}`}
                    >
                      {project.text}
                    </a>
                  </p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <p style={descriptionStyle}>{project.description}</p>
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
