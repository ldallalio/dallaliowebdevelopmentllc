import React from 'react'

type Props = {}

const SocialLinks = (props: Props) => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        backgroundColor: "#f4f4f4",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#333" }}>
        Social Links
      </h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        <span style={{ marginRight: "0.5rem", color: "#666" }}>
          Follow us:
        </span>
        <a
          href="https://www.facebook.com/Dallalio-Web-Dev-102343332101311"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#3b5998", textDecoration: "none", fontWeight: "bold" }}
        >
          Facebook
        </a>
        <a
          href="https://twitter.com/DallalioWeb"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#1da1f2", textDecoration: "none", fontWeight: "bold" }}
        >
          Twitter
        </a>
        <a
          href="https://www.instagram.com/dallaliowebdev/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#e1306c", textDecoration: "none", fontWeight: "bold" }}
        >
          Instagram
        </a>
      </div>
    </section>
  )
}

export default SocialLinks
