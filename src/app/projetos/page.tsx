import Image from "next/image";
import bemestar from "../../assets/bemestar.png";

export default function Projects() {
  return (
    <>
      <div className="bg-gray-dark">
        <h1 className="text-white text-center text-2xl p-5">Projects</h1>

        <div className=" grid-flow-col grid-cols-5  ml-20 grid">
        <Image
            className="object-cover  py-5"
            src={bemestar}
            alt=""
            width="320"
            height="250"
          />
          <a  target="_blank" href="https://github.com/Joice-crypto/BemEstar"><button className="text-white ml-4 mt-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300    bg-gradient-to-r  bg-fuchsia-800 hover:bg-fuchsia-700  rounded-full p-2 w-max h-max">Acessar o projeto</button></a>
         
        </div>
        <p className="text-white py-2 ml-20 font-semibold  text-xl ">Bem Estar</p>
          <p className="text-black my-2 ml-20 bg-green-button rounded-xl w-24 p-1 h-7 text-center">
            Concluído
          </p>
        <p className="text-white ml-20">Descrição breve do projeto</p>
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

        {/* Segundo projeto */}

        <div className=" grid-flow-col grid-cols-5  ml-20 grid">
        <Image
            className="object-cover  py-5"
            src={bemestar}
            alt=""
            width="320"
            height="250"
          />
          <button className="text-white ml-4 mt-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300    bg-gradient-to-r  bg-fuchsia-800 hover:bg-fuchsia-700  rounded-full p-2 w-max h-max">Acessar o projeto</button>
         
        </div>
        <p className="text-white py-2 ml-20 font-semibold  text-xl ">Bem Estar</p>
          <p className="text-black my-2 ml-20 bg-green-button rounded-xl w-24 p-1 h-7 text-center">
            Concluído
          </p>
        <p className="text-white ml-20">Descrição breve do projeto</p>
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
      </div>
      
    </>
  );
}
