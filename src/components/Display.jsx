import React from 'react'

export default function Display(props) {
  return (
    <>
      <textarea id="textarea" value={props.text}  ></textarea>
    </>
  )
}
