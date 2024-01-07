/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import joice from "../assets/Eu.jpeg";
import html from "../assets/skills/icons8-html-50.png";
import css from "../assets/skills/icons8-css-50.png";
import js from "../assets/skills/icons8-javascript-50.png";
import react from "../assets/skills/icons8-react-native-34.png";
import ts from "../assets/skills/icons8-typescript-48.png";
import next from "../assets/skills/icons8-nextjs-48.png";
import mysql from "../assets/skills/icons8-mysql-50.png";
import postgresql from "../assets/skills/icons8-postgreesql-50.png";
import node from "../assets/skills/icons8-nodejs-64.png";
import python from "../assets/skills/icons8-python-50.png";

export default function Home() {
  return (
    <>
      <div className="flex justify-center p-10">
        <Image
          className="object-cover"
          src={joice}
          alt=""
          width="150"
          height="0"
        />

        <p className="text-3xl ml-10">Hello</p>
        <p className="text-xl mt-1 "> , I'm Joice!</p>
      </div>

      <div className=" bg-slate-900 grid grid-flow-col  py-10">
       
        <div className="grid grid-flow-row  mr-5 justify-center">
          <h1 className="text-white text-xl">About Me</h1>
          <p className="text-white w-80 text-justify mt-5">
            Olá, sou Joice uma estudante de graduação em Ciência da Computação
            super empolgada em me tornar uma desenvolvedora full stack. Adoro construir sites que fazem a diferença para o sucesso geral do
            produto. Vcoê pode da uma olhada nos meus trabalhos na aba
            'Projetos'. Além disso, sou entusiasta em criar conteúdos online
            para ajudar iniciantes no desenvolvimento web. Conferira meu canal
            no YouTube aqui{" "}
          </p>
          <a href="/projetos"><button  className="text-white m-3 p-1 shadow-xl rounded-md w-44 hover:bg-fuchsia-700 bg-fuchsia-800" >Acessar Projetos</button> </a>     
        </div>

        <div className="">
          <p className="text-white text-xl text-center mb-5">My Skills</p>
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

    <div className=" bg-gray-dark  justify-items-center  pt-10  ">
    <h1 className="text-white text-center text-xl">Contact</h1>
      <form className=" p-5 grid grid-flow-row w-7/12 ml-64 grid-cols-1 " action="">
        <label className="text-white pb-3" htmlFor="nome">Nome:</label>
        <input className="rounded-md" type="text" />
        <label className="text-white  py-3 " htmlFor="email">Email:</label>
        <input className="rounded-md" type="email" />
        <label className="text-white mt-5" htmlFor="mensagem">Digite sua mensagem:</label>
        <textarea className=" h-32 mt-5 rounded-md"></textarea>
        <input className=" mt-7 w-40 bg-fuchsia-800 hover:bg-fuchsia-700 shadow-xl ml-80 text-white rounded-lg py-2  " type="button" value="Enviar" />
      </form>
    </div>

    </>
  );
}
