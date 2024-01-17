/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */


import Image from "next/image";
import joice from "../../assets/Eu.jpeg";
import joice2 from "../../assets/eu2.jpeg";
import html from "../../assets/skills/icons8-html-50.png";
import css from "../../assets/skills/icons8-css-50.png";
import js from "../../assets/skills/icons8-javascript-50.png";
import react from "../../assets/skills/icons8-react-native-34.png";
import ts from "../../assets/skills/icons8-typescript-48.png";
import next from "../../assets/skills/icons8-nextjs-48.png";
import mysql from "../../assets/skills/icons8-mysql-50.png";
import postgresql from "../../assets/skills/icons8-postgreesql-50.png";
import node from "../../assets/skills/icons8-nodejs-64.png";
import python from "../../assets/skills/icons8-python-50.png";
import { SendEmail } from "@/components/SendEmail";
import {unstable_setRequestLocale} from 'next-intl/server';
import { useTranslations } from "next-intl";

export default function Home({params: {locale}} : {
  params: any
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('IndexPage');
  const a = useTranslations('Sobre-mim');
  

  return (
    <>
    <div className="grid grid-flow-col grid-cols-2   ">

  
      <div className=" justify-center h-80 flex ">
      <Image
          className=" rounded-full my-10 "
          src={joice}
          alt=""
          width="200"
          height="10"
        />
        
      </div>
      <div className=" ">
      <p className="   w-max text-center h-20 mt-20 font-serif text-violet-800 text-3xl">{t('Hello')}</p>
      <p className=" font-serif text-wrap w-9/12 h-max mb-5 text-xl "> {t('apresentacao')}</p>
      <a href={`/${locale}/projetos`}><button  className="text-white m-3 p-1 font-titles text-lg shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300    bg-gradient-to-r  rounded-md w-44 hover:bg-fuchsia-700 bg-fuchsia-800" >{a('projetos')}</button> </a>     
      </div>
     

      </div>
    <section id="sobre">

   
      <div className=" bg-slate-900 mt-10  h-[30rem] py-10">
  
          <p className="text-white text-2xl font-titles text-center mb-5">{a('skills')}</p>
          <div id="skilss" className="grid grid-cols-4 ml-40 gap-y-4 justify-center   mt-10">
          <div className="">
          <Image
          className="object-cover transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125  duration-300 "
          src={html}
          alt=""
          width="50"
          height="48"
        />

          <p className="text-white font-serif ml-2">Html</p>
          </div>

          <div>
          <Image
          className="object-cover transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125 duration-300"
          src={css}
          alt=""
          width="50"
          height="48"
        />

          <p className="text-white font-serif ml-2">CSS</p>
          </div>

          <div>
          <Image
          className="object-cover transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125 duration-300"
          src={js}
          alt=""
          width="50"
          height="48"
        />

          <p className="text-white font-serif mt-2">JavaScript</p>
          </div>

          <div>
          <Image
          className="object-cover transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125 duration-300"
          src={ts}
          alt=""
          width="50"
          height="48"
        />

          <p className="text-white mt-2 font-serif ">TypeScript</p>
          </div>
         
          <div>
          <Image
          className="object-cover transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125 duration-300" 
          src={react}
          alt=""
          width="50"
          height="48"
        />

          <p className="text-white mt-2 font-serif ">ReactJS</p>
          </div>

          <div>
          <Image
          className="object-cover transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125 duration-300"
          src={next}
          alt=""
          width="50"
          height="48"
        />

          <p className="text-white mt-2 font-serif ">NextJS</p>
          </div>

          <div>
          <Image
          className="object-cover transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125 duration-300"
          src={node}
          alt=""
          width="50"
          height="48"
        />

          <p className="text-white mt-2 font-serif ">NodeJs</p>
          </div>

          <div>
          <Image
          className="object-cover transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125 duration-300"
          src={python}
          alt=""
          width="50"
          height="48"
        />

          <p className="text-white mt-2 font-serif ">Python</p>
          </div>



          <div>
          <Image
          className="object-cover transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125 duration-300"
          src={mysql}
          alt=""
          width="50"
          height="48"
        />

          <p className="text-white mt-2 font-serif ">MySQL</p>
          </div>

          <div>
          <Image
          className="object-cover transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125 duration-300"
          src={postgresql}
          alt=""
          width="50"
          height="48"
        />

          <p className="text-white mt-2 font-serif ">PostgreSQL</p>
          </div>

          </div>
          
      
        
      </div>
      </section>
      <section id="contact">
     <SendEmail></SendEmail>
      </section>
     
    </>
  );


}

