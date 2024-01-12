import LocaleSwitcher from "./LocaleSwitcher";
import {useTranslations} from 'next-intl';

export function Header( ) {
    const t = useTranslations('Header');
    return(
        <header className=" bg-gradient-to-r from-purple-500 to-pink-900 h-20 md:max-xl:flex grid grid-rows-1 grid-flow-col"> 
            <h2 className="text-white text-xl mt-6 ml-10">Joice Cristina</h2>
            <nav className="grid grid-rows-1 grid-flow-col mt-6 ml-10">
                <a className="text-white" href="/">{t('Inicio')}</a>
                <a className="text-white" href="#sobre">{t('Sobre')}</a>
                <a className="text-white" href="/projetos">{t('Projetos')}</a>
                <a className="text-white" href="#contact">{t('Contato')}</a>
                <LocaleSwitcher />
            </nav>
            </header>
    );
}