import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './header'
import SVGSpinner from './assests/Rectangle.gif'
import Portrait from './assests/portrait.svg'

export default function Home() {
  return (
    <div className={ "flex flex-col m-auto p-3 container justify-self-center w-auto " }>

      <Head>
        <title>Dallalio Web Development</title>
        <meta name="description" content="Application and Creative Business" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex container  justify-between items-center w-full">
        <div className="btn btn-md btn-outline btn-primary   font-light  border-w-1">Dallalio Web Development</div>
        <Image src={ SVGSpinner } width={ 120 } height={ 120 } className={ "flex justify-end invert" } />
      </div>

      <div className="flex flex-col container max-w-full place-self-center place-content-center">
        <h1 className="tracking-widest text-center text-[85px]  font-thin text-primary  font-sans" >COMING SOON</h1>
      </div>

      <div className="flex min-w-[200px] max-w-[550px] text-primary flex-col bg-slate-300/10  backdrop-blur-2xl place-self-center p-7 rounded-lg mt-10">
        <p className='font-light mt-3 mb-3'>Uh oh! We haven’t quite finished yet.  Sign up for email notifications below.  We look forward to working with you!</p>
        <div className="flex container sm:flex-row flex-col flex-row mt-3 mb-3">

          <div className="container relative mr-10 mb-3">
            <input type="text" placeholder="Type here" className="input w-[100%]  text-gray-600 bg-slate-200  pl-10" />
            <Image src={ Portrait } id='inputIcon' className='absolute center top-3.5 left-2' />
          </div>
          <button type="submit" className='btn btn-outline btn-info mb-3'>Sign Up</button>

        </div>

      </div>

    </div >
  )
}
