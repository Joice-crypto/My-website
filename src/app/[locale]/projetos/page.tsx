import Image from "next/image";
import bemestar from "../../../assets/bemestar.png";
import futebol from "../../../assets/fotebollFocus.png";
import {unstable_setRequestLocale} from 'next-intl/server';
import { useTranslations } from "next-intl";

export default function Projects({params: {locale}} : {
  params: any
}) {

  unstable_setRequestLocale(locale);
  const t = useTranslations('Projetos');
   
  return (
    <>
      <div className="bg-slate-900 ">
        <h1 className="text-white text-center text-2xl p-5">{t('titulo')}</h1>

        <div className=" grid-flow-row   ml-20 grid">
        <Image
            className="object-cover  py-5"
            src={futebol}
            alt=""
            width="400"
            height="350"
          />
         
         
        </div>
        <p className="text-white py-2 ml-20 font-semibold  text-xl ">FootBall Focus</p>
       
          <p className="text-black my-2 ml-20 bg-blue-500 rounded-xl w-44 p-1 h-7 text-center">
          {t('emDesen')}
          </p>
        <p className="text-white py-3 text-justify mr-10 ml-20">{t('Fotebol')}</p>
        <div className=" grid-flow-col grid-cols-12  py-3 ml-20 grid">
          <div className="border-white rounded-full w-max border-2">
            <p className="text-white p-2 ">TypeScript</p>
          </div>
          <div className="border-white rounded-full ml-5 w-max border-2">
            <p className="text-white p-2 ">NextJS</p>
          </div>
          <div className="border-white rounded-full ml-5  w-max border-2">
            <p className="text-white p-2 ">ReactJS</p>
          </div>
          <div className="border-white rounded-full ml-5  w-max border-2">
            <p className="text-white p-2 ">NodeJS</p>
          </div>
          <div className="border-white rounded-full ml-5  w-max border-2">
            <p className="text-white p-2 ">PostgreSQL</p>
          </div>
          <div className="border-white rounded-full ml-10  w-max border-2">
            <p className="text-white p-2 ">TailwindCSS</p>
          </div>
          <div className="border-white rounded-full ml-16  w-max border-2">
            <p className="text-white p-2 ">Auth0</p>
          </div>
        </div>
        <a  target="_blank" href="https://github.com/Joice-crypto/TpBD"><button className=" ml-20 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300    bg-gradient-to-r  bg-fuchsia-800 hover:bg-fuchsia-700  rounded-full p-2 w-max h-max">{t('acessar')}</button></a>

      <hr className=" border-1 mx-20 py-3 mt-10" />
      

 {/* Segundo projeto */}

        <div className=" grid-flow-row   ml-20 grid">
        <Image
            className="object-cover  py-5"
            src={bemestar}
            alt=""
            width="320"
            height="250"
          />
         
         
        </div>
        <p className="text-white py-2 ml-20 font-semibold  text-xl ">Bem Estar</p>
       
          <p className="text-black my-2 ml-20 bg-green-button rounded-xl w-24 p-1 h-7 text-center">
          {t('concluido')}
          </p>
        <p className="text-white py-3 text-justify mr-10 ml-20">{t('BemEstar')}</p>
        <div className=" grid-flow-col grid-cols-12  py-3 ml-20 grid">
          <div className="border-white rounded-full w-max border-2">
            <p className="text-white p-2 ">TypeScript</p>
          </div>
          <div className="border-white rounded-full ml-5 w-max border-2">
            <p className="text-white p-2 ">NextJS</p>
          </div>
          <div className="border-white rounded-full ml-5  w-max border-2">
            <p className="text-white p-2 ">ReactJS</p>
          </div>
          <div className="border-white rounded-full ml-5  w-max border-2">
            <p className="text-white p-2 ">NodeJS</p>
          </div>
          <div className="border-white rounded-full ml-5  w-max border-2">
            <p className="text-white p-2 ">Prisma</p>
          </div>
        </div>
        <a  target="_blank" href="https://github.com/Joice-crypto/BemEstar"><button className=" ml-20 text-white transition ease-in-out delay-150 mb-10 hover:-translate-y-1 hover:scale-110  duration-300    bg-gradient-to-r  bg-fuchsia-800 hover:bg-fuchsia-700  rounded-full p-2 w-max h-max">{t('acessar')}</button></a>

    
      </div>
      
    </>
  );
}
