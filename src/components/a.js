import React from "react"

export default function A(props) {
  return (
    <a
      className={props.className}
      href={props.href}
      aria-label={props.label}
      target="_blank"
      rel="noreferrer"
    >
      {props.text}
    </a>
  )
}
