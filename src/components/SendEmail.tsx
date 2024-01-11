import emailjs from '@emailjs/browser';
import React, { useRef, FormEvent } from 'react';
import  { EmailJSResponseStatus } from 'emailjs-com';


export function SendEmail(){


   function HundleSubmitEmail(event: FormEvent<HTMLFormElement>) {

    event.preventDefault()
    
    if (event.currentTarget) {
        emailjs
          .sendForm(
            'service_vglvowk',
            'template_kz5641k',
            event.currentTarget,
            'BORHvOFipPS0rAL31'
          )
          .then(
            (result: EmailJSResponseStatus) => {
              window.alert("Mensagem enviada com sucesso!")
              
            },
            (error: EmailJSResponseStatus) => {
              console.log(error.text);
            }
          );
      }
      
    
    
    }
    
 

    return(
        <div className=" bg-gray-dark  justify-items-center  pt-10  ">
        <h1 className="text-white text-center text-xl">Contact</h1>
          <form className=" p-5 grid grid-flow-row w-7/12 ml-64 grid-cols-1 " onSubmit={HundleSubmitEmail}>
            <label className="text-white pb-3"   htmlFor="nome">Nome:</label>
            <input className="rounded-md" name="user_name" type="text" />
            <label className="text-white  py-3 "   htmlFor="email">Email:</label>
            <input className="rounded-md" name="user_name" type="email" />
            <label className="text-white mt-5" htmlFor="mensagem">Digite sua mensagem:</label>
            <textarea name="message" className=" h-32 mt-5 rounded-md"></textarea>
            <button type='submit' className='mt-7 w-40 bg-fuchsia-800 hover:bg-fuchsia-700 shadow-xl ml-80 text-white rounded-lg py-2 '>
                Enviar
            </button>
           
          </form>
        </div>
    )


}