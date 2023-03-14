import React from 'react'

export default function Video () {

  return (
    <div className='video'>
        <iframe
        width="1000"
        height="480"
        src="https://www.youtube.com/embed/fZNczvxSKWs"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}
