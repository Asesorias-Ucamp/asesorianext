import React from 'react'
import Link from 'next/link';
import Jumbotron from '../components/home/jumbotron';

const hola = () => {
  return (
    <div>
      <Jumbotron />
      <h1>
        hola
      </h1>
      <Link href="/">
        <a> Home </a>
      </Link>
    </div>
  )
}

export default hola