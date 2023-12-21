import React from 'react'
import Image from 'next/image';

const Main = () => {
  return (
    <div className="contenedor">
    <div className="mitad izquierda">
      <Image
        src="https://i.imgur.com/IMoapoY.png"
        alt=""
        width={1200}
        height={200}
      />
    </div>
    <div className="mitad derecha">
      <h2>Hola Soy <span className="gradient">Sebastián Mella</span></h2>
      <p>Soy un publicista que quiso aprender sobre programación y comenzar su camino en este entretenido mundo.</p>
    </div>
  </div>
  )
}

export default Main