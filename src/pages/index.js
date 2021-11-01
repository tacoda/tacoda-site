import * as React from "react"
import avatar from "../images/tacoda.png"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
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

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
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

const avatarStyle = {
  borderRadius: 2,
  height: "10%",
  width: "10%",
  float: "left",
  display: "inline",
}

const headingStyles = {
  marginTop: 32,
  marginBottom: 64,
  maxWidth: 320,
  float: "left",
  display: "inline",
}

const container = {
  clear: "both",
}

// data
const links = [
  {
    text: "GitHub",
    url: "https://github.com/tacoda",
    description:
      "My code repositories",
    color: "#E95800",
  },
  {
    text: "Exercism",
    url: "https://exercism.org/profiles/tacoda",
    description:
      "Learning and mentorship",
    color: "#1099A8",
  },
  {
    text: "Dev.to",
    url: "https://dev.to/tacoda",
    description:
      "My writings",
    color: "#BC027F",
  },
  {
    text: "Stack Overflow",
    url: "https://stackoverflow.com/story/tacoda",
    description:
      "My developer story",
    color: "#0D96F2",
  },
  {
    text: "Twitter",
    url: "https://twitter.com/tacoda_dev",
    description:
      "My twitter profile",
    color: "#8EB814",
  },
  {
    text: "Email",
    url: "mailto:tacoda@hey.com",
    description:
      "Email me at: tacoda@hey.com",
    color: "#34B8DE",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Ian Johnson</title>
      <img
        alt="TacodaKitty"
        src={avatar}
        style={avatarStyle}
      />
      <h1 style={headingStyles}>
        Ian Johnson
      </h1>
      <nav>
      </nav>
      <div style={container}>
        <p style={paragraphStyles}>
          I am a full-stack web developer with a penchant for Ruby on Rails and React.
          I also have an unhealthy obsession with the Rust programming language.
          Recently, I started my journey into learning more about Web3 and the blockchain.
        </p>
        <ul style={listStyles}>
          {links.map(link => (
            <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
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
