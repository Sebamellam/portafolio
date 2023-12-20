"use client";

import React, { useState } from 'react'

const Button = () => {

  const [click, setClick] = useState('Haz CLick');

  return (
    <div>
      <button onClick={() => setClick('Hice click')}>Click</button>
      <h1>{click}</h1>
    </div>
  );
};

export default Button;