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
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const paragraphStyles = {
  marginBottom: 48,
  fontSize: "1.2em",
  textAlign: "center",
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not Found</title>
      <div class="box">
        <h1 style={headingStyles}>Page Not Found</h1>
        <hr />
        <p style={paragraphStyles}>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </div>
    </main>
  )
}

export default NotFoundPage
