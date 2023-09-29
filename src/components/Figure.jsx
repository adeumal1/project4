import React from 'react'

const Figure = ({ APOD }) => {
  return (
    <div>
      <img src={APOD.url} alt={APOD.title} />
      <h2>{APOD.title}</h2>
      <p>Status: {APOD.explanation}</p>
    </div>
  )
}

export default Figure