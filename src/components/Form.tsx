'use client'

import { EmailJSResponseStatus } from "emailjs-com";
import { FormEvent } from "react";
import emailjs from '@emailjs/browser';

export function HundleSubmitEmail(event: FormEvent<HTMLFormElement>) {

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



