import insta from "../assets/icons8-instagram-48.png";
import github from "../assets/icons8-github-50.png";
import linkedin from "../assets/icons8-linkedin-48.png";
import Image from "next/image";
import React from 'react';
import {useTranslations} from 'next-intl';


export function Footer() {

  const t = useTranslations('Footer');
  return (
    <footer className=" bg-black h-44 bottom-0 md:max-xl:flex grid grid-rows-1 grid-flow-row">
      
      <ul className="grid grid-rows-2  ml-20 grid-flow-col">
        <p className="text-white font-bold mt-7">Joice Cristina</p>
       <a className="text-white mt-6" href="mailto:joicecristina059@gmail.com">
        joicecristina059@gmail.com
        </a>

        <h2 className="text-white mt-7 ml-96 font-bold">{t('Midias')}</h2>
        <div className=" grid grid-flow-col mt-5 ml-96 justify-start ">
          <a href="https://www.instagram.com/joice_crsilva/">
            <Image
              className="object-cover  "
              src={insta}
              alt=""
              width="32"
              height="40"
            />
          </a>

          <a href="https://www.linkedin.com/in/joice-cristina-3451851a4/">
            <Image
              className="object-cover mr-2 "
              src={linkedin}
              alt=""
              width="32"
              height="40"
            />
          </a>
          <a href="https://github.com/Joice-crypto">
            <Image
              className="object-cover mr-2 "
              src={github}
              alt=""
              width="32"
              height="40"
            />
          </a>
        </div>
      </ul>
      
        <div className=" mt-5 grid grid-flow-col">
        <hr className=" bg-white ml-10 mr-10" />
        </div>
     

      <p className="text-white mb-9 mt-5 text-center ">
        &copy; Copyright 2024. {t('Feito-por')}
      </p>
    </footer>
  );
}
