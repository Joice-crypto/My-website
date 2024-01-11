export function Header() {
    return(
        <header className=" bg-gradient-to-r from-purple-500 to-pink-900 h-20 md:max-xl:flex grid grid-rows-1 grid-flow-col"> 
            <h2 className="text-white text-xl mt-6 ml-10">Joice Cristina</h2>
            <nav className="grid grid-rows-1 grid-flow-col mt-6 ml-10">
                <a className="text-white" href="/">Inicio</a>
                <a className="text-white" href="#sobre">Sobre</a>
                <a className="text-white" href="/projetos">Projects</a>
                <a className="text-white" href="#contact">Contact</a>
            </nav>
            </header>
    );
}