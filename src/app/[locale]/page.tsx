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
      <div className="flex justify-center  p-10">
        <Image
          className=" rounded-full"
          src={joice}
          alt=""
          width="150"
          height="00"
        />

        <p className=" ml-10 text-violet-800 text-3xl">{t('Hello')}</p>
        <p className=" mt-2 ml-1 text-xl">{t('Joice')}</p>
         
      </div>
    <section id="sobre">

   
      <div className=" bg-slate-900 grid grid-flow-col  py-10">
        <div className="grid grid-flow-row  mr-5 justify-center">
          <h1 className="text-white text-xl">{a('Sobre-mim')}</h1>
          <p className="text-white w-80 text-justify mt-5">
          {a('texto-sobre-mim')}
          </p>
          <a href="/projetos"><button  className="text-white m-3 p-1 shadow-xl rounded-md w-44 hover:bg-fuchsia-700 bg-fuchsia-800" >{a('projetos')}</button> </a>     
        </div>

        <div className="">
          <p className="text-white text-xl text-center mb-5">{a('skills')}</p>
          <div id="skilss" className="grid grid-cols-3 ml-5 gap-y-3  mt-5">
          <div className="">
          <Image
          className="object-cover hover:scale-125"
          src={html}
          alt=""
          width="50"
          height="48"
        />

          <p className="text-white ml-2">Html</p>
          </div>

          <div>
          <Image
          className="object-cover hover:scale-125"
          src={css}
          alt=""
          width="50"
          height="48"
        />

          <p className="text-white ml-2">CSS</p>
          </div>

          <div>
          <Image
          className="object-cover hover:scale-125"
          src={js}
          alt=""
          width="50"
          height="48"
        />

          <p className="text-white mt-2">JavaScript</p>
          </div>

          <div>
          <Image
          className="object-cover hover:scale-125"
          src={ts}
          alt=""
          width="50"
          height="48"
        />

          <p className="text-white mt-2  ">TypeScript</p>
          </div>
         
          <div>
          <Image
          className="object-cover hover:scale-125"
          src={react}
          alt=""
          width="50"
          height="48"
        />

          <p className="text-white mt-2  ">ReactJS</p>
          </div>

          <div>
          <Image
          className="object-cover hover:scale-125"
          src={next}
          alt=""
          width="50"
          height="48"
        />

          <p className="text-white mt-2  ">NextJS</p>
          </div>

          <div>
          <Image
          className="object-cover hover:scale-125"
          src={node}
          alt=""
          width="50"
          height="48"
        />

          <p className="text-white mt-2  ">NodeJs</p>
          </div>

          <div>
          <Image
          className="object-cover hover:scale-125"
          src={python}
          alt=""
          width="50"
          height="48"
        />

          <p className="text-white mt-2  ">Python</p>
          </div>



          <div>
          <Image
          className="object-cover hover:scale-125"
          src={mysql}
          alt=""
          width="50"
          height="48"
        />

          <p className="text-white mt-2  ">MySQL</p>
          </div>

          <div>
          <Image
          className="object-cover hover:scale-125"
          src={postgresql}
          alt=""
          width="50"
          height="48"
        />

          <p className="text-white mt-2  ">PostgreSQL</p>
          </div>

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

