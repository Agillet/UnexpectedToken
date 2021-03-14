import React from 'react'

function NavArrows({ onPrevious, onNext }) {
  return (
    <>
      <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true" focusable="false">
        <linearGradient id="my-cool-gradient" x2="1" y2="1">
          <stop offset="0%" stopColor="#659999" />
          <stop offset="100%" stopColor="#f4791f" />
          <stop offset="100%" stopColor="#659999" />
        </linearGradient>
      </svg>
      <div className="arrow-wrapper previous" onClick={onPrevious}>
        <svg viewBox="0 0 16 16" className="arrow previous bi bi-chevron-left" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
        </svg>
      </div>
      <div className="arrow-wrapper next" onClick={onNext}>
        <svg viewBox="0 0 16 16" className="arrow next bi bi-chevron-right" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>
    </>
  )
}

export default NavArrows
