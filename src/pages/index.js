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
      "Email me at: tacoda@hey.com",
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
          </div>
        </div>
      <hr />
      <div>
        <p style={paragraphStyles}>
          I am a full-stack web developer with a penchant for Ruby on Rails and React.<br />
          I also really enjoy working with the Rust programming language.<br />
          I have worked with linux, docker, kubernetes and serveral cloud services.<br />
          Additionally, I contribute to open source projects.<br />
          Recently, I started my journey into learning about Web3.
        </p>
        <hr />
        <div class="columns">
          {links.map(link => (
            <div class="column is-one-fourth">
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
      </div>
    </main>
  )
}

export default IndexPage
