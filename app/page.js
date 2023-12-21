import Appbar from '@/components/Appbar';
import Button from '@/components/Button';
import Main from '@/components/Main';
import Image from 'next/image'

async function loadPost ( ){
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
  return res.json();
}

export default async function Home() {
  const post = await loadPost();

  return (
   <div className="h-screen w-full flex flex-col  items-center justify-center">
  <Main />
   
   </div>
  )
  }
