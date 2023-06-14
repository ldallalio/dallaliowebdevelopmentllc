import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './header'
import SVGSpinner from './assests/Rectangle.gif'
import Portrait from './assests/portrait.svg'
import Instagram from './assests/instagram.svg'
import Facebook from './assests/facebook-square.svg'
import Twitter from './assests/twitter-square.svg'
import Copyright from './assests/copyright.svg'
import { useForm, ValidationError } from '@formspree/react';

export default function Home() {
  const [state, handleSubmit] = useForm("xeqropoy");
  if (state.succeeded) {
    return (<div className={ "flex flex-col m-auto p-3 container  relative justify-self-center w-auto h-[100vh]  items-center " }>

      <Head>
        <title>Dallalio Web Development</title>
        <meta name="description" content="Application and Creative Business" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex container  justify-between items-center w-full ">
        <div className="btn btn-md btn-outline btn-primary   font-light  border-w-1">Dallalio Web Development</div>
        <Image src={ SVGSpinner } width={ 120 } height={ 120 } className={ "flex justify-end invert" } />
      </div>

      <div className="flex flex-col container max-w-full place-self-center place-content-center">
        <h1 className="tracking-widest text-center text-[85px]  font-thin text-primary  font-sans" >COMING SOON</h1>
      </div>

      <div className="flex min-w-[200px] max-w-[550px] text-primary flex-col bg-slate-300/10  backdrop-blur-2xl place-self-center p-7 rounded-lg mt-10">

        <form onSubmit={ handleSubmit }>


          <p>Thanks for signing up!</p>
          <div className="flex container sm:flex-row flex-col flex-row mt-3 mb-3">

            <div className="container relative mr-10 mb-3">
              <input placeholder="Type here" className="input w-[100%]  text-gray-600 bg-slate-200  pl-10" id="email"
                type="email"
                name="email" />
              <Image src={ Portrait } id='inputIcon' className='absolute center top-3.5 left-2' />
            </div>
            <button type="submit" className='btn btn-outline btn-info mb-3' disabled={ state.submitting }>Sign Up</button>

          </div>
        </form>

      </div>

      <div className="flex items-center  justify-around font-light container w-full absolute   text-center  text-primary bottom-0">
        <div className="container flex flex-row justify-evenly w-[300px] ">
          <a href="https://www.facebook.com/dallaliowebdev/" target='_blank'>
            <Image src={ Facebook } className='hover:animate-spin' />
          </a>
          <a href="https://www.instagram.com/dallalio.web.development/" target='_blank'>

            <Image src={ Instagram } className='hover:animate-bounce' />
          </a>
          <a href="https://twitter.com/DallalioWebDev" target='_blank'>

            <Image src={ Twitter } className='hover:animate-spin' />
          </a>
        </div>
        <div className="flex flex-row container justify-center w-[300px] ">
          <Image src={ Copyright } />
          <p className='ml-3'>Dallalio Web Development LLC</p>
        </div>
        <div className="container  w-[300px]">
          <a href="mailto:logan@dallalioweb.dev" target='_blank'>

            <p className='hover:animate-pulse'>logan@dallalioweb.dev</p>
          </a>
        </div>
      </div>

    </div >)
  }
  return (
    <div className={ "flex flex-col m-auto p-3 container  relative justify-self-center w-auto h-[95vh]  items-center " }>

      <Head>
        <title>Dallalio Web Development</title>
        <meta name="description" content="Application and Creative Business" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex container  justify-between items-center w-full ">
        <div className="btn btn-md btn-outline btn-primary   font-light  border-w-1">Dallalio Web Development</div>
        <Image src={ SVGSpinner } width={ 120 } height={ 120 } className={ "flex justify-end invert" } />
      </div>

      <div className="flex flex-col container max-w-full place-self-center place-content-center">
        <h1 className="tracking-widest text-center md:text-[85px] text-[40px] min-md:text-[10px] font-thin text-primary  font-sans" >COMING SOON</h1>
      </div>

      <div className="flex min-w-[200px] max-w-[550px] text-primary flex-col bg-slate-300/10  backdrop-blur-2xl place-self-center p-7 rounded-lg mt-10">

        <form onSubmit={ handleSubmit }>

          <p className='font-light mt-3 mb-3'>Uh oh! We haven’t quite finished yet.  Sign up for email notifications below.  We look forward to working with you!</p>
          <div className="flex container sm:flex-row flex-col flex-row mt-3 mb-3">

            <div className="container relative mr-10 mb-3">
              <input placeholder="YourEmail@gmail.com" className="input w-[100%]  text-gray-600 bg-slate-200  pl-10" id="email"
                type="email"
                name="email" />
              <Image src={ Portrait } id='inputIcon' className='absolute center top-3.5 left-2' />
            </div>
            <button type="submit" className='btn btn-outline btn-info mb-3' disabled={ state.submitting }>Sign Up</button>

          </div>
        </form>

      </div>

      <div className="flex footer items-center lg:flex-row flex-col justify-around font-light container w-full absolute   text-center  text-primary bottom-0" id='footer'>
        <div className="container flex flex-row justify-evenly w-[300px] ">
          <a href="https://www.facebook.com/dallaliowebdev/" target='_blank'>
            <Image src={ Facebook } className='hover:animate-spin' />
          </a>
          <a href="https://www.instagram.com/dallalio.web.development/" target='_blank'>

            <Image src={ Instagram } className='hover:animate-bounce' />
          </a>
          <a href="https://twitter.com/DallalioWebDev" target='_blank'>

            <Image src={ Twitter } className='hover:animate-spin' />
          </a>
        </div>
        <div className="flex flex-row container justify-center w-[300px] ">
          <Image src={ Copyright } />
          <p className='ml-3'>Dallalio Web Development LLC</p>
        </div>
        <div className="flex justify-center container  w-[300px]">
          <a href="mailto:logan@dallalioweb.dev" target='_blank'>

            <p className='hover:animate-pulse'>logan@dallalioweb.dev</p>
          </a>
        </div>
      </div>

    </div >
  )
}
