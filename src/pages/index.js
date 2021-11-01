import * as React from "react"
import avatar from "../images/tacoda.png"
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
    text: "Exercism",
    url: "https://exercism.org/profiles/tacoda",
    description:
      "Learning and mentorship",
  },
  {
    text: "Dev.to",
    url: "https://dev.to/tacoda",
    description:
      "My writings",
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
      <div class="columns is-mobile">
        <div class="column is two-thirds">
          <h1 class="title">
            Ian Johnson
          </h1>
        </div>
        <div class="column is-one-third">
          <img
            alt="TacodaKitty"
            src={avatar}
            class="image is-96x96"
          />
        </div>
      </div>
      <div>
        <p style={paragraphStyles}>
          I am a full-stack web developer with a penchant for Ruby on Rails and React.<br />
          I also have an unhealthy obsession with the Rust programming language.<br />
          Recently, I started my journey into learning more about Web3 and the blockchain.
        </p>
        <ul style={listStyles}>
          {links.map(link => (
            <li key={link.url} style={{ ...listItemStyles}}>
              <span>
                <a
                  style={linkStyle}
                  href={`${link.url}`}
                >
                  {link.text}
                </a>
                <p style={descriptionStyle}>{link.description}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default IndexPage
