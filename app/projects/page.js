import React from 'react'
import Image from 'next/image';



const page = ({ imageUrl, text, button1Url, button2Url }) => {
  return (
    <div className="flex justify-center items-center space-x-8 p-8">
      <div>
        Estos son los proyectos que realice durante este año 2023(hecho para hormigas ojo)
      </div>
      {/* Primera Columna - Imagen */}
      <div className="max-w-full h-auto rounded-md">
        <Image
          src="https://i.imgur.com/DETuQYJ.png"
          alt=""
          width={200}
          height={200}
        />
      </div>
      {/* Segunda Columna - Texto y Botones */}
      <div>
        <p className="text-xl font-bold mb-4">{text}</p>
        <div className="space-x-4">
          <a href="https://github.com/Sebamellam/Proyecto-2-CRUD" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md">Repositorío</a>
          <a href="https://sebamellam.github.io/Proyecto-2-CRUD/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md">Html</a>
        </div>
      </div>
      <div className="max-w-full h-auto rounded-md">
        <Image
          src="https://i.imgur.com/zNHLVoC.png"
          alt=""
          width={200}
          height={200}
        />
      </div>

      {/* Segunda Columna - Texto y Botones */}
      <div>
        <p className="text-xl font-bold mb-4">{text}</p>
        <div className="space-x-4">
          <a href="https://github.com/marcelopaivag/dashBeta" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md">Repositorío</a>
          <a href="https://marcelopaivag.github.io/dashBeta/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md">Html</a>
        </div>
      </div>
      <div className="max-w-full h-auto rounded-md">
        <Image
          src="https://i.imgur.com/iE6JoWH.png"
          alt=""
          width={200}
          height={200}
        />
      </div>

      {/* Segunda Columna - Texto y Botones */}
      <div>
        <p className="text-xl font-bold mb-4">{text}</p>
        <div className="space-x-4">
          <a href="https://github.com/Sebamellam/proyecto4" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md">Repositorío</a>
          <a href="https://sebamellam.github.io/proyecto4/agenda" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md">Html</a>
        </div>
      </div>
      <div className="max-w-full h-auto rounded-md">
        <Image
          src="https://i.imgur.com/nl0rpd2.png"
          alt=""
          width={200}
          height={200}
        />
      </div>

      {/* Segunda Columna - Texto y Botones */}
      <div>
        <p className="text-xl font-bold mb-4">{text}</p>
        <div className="space-x-4">
          <a href="https://github.com/Sebamellam/client" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md">Repositorío</a>
          <a href="https://sebamellam.github.io/client/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md">Html</a>
        </div>
      </div>


    </div>

  );
};

export default page;


