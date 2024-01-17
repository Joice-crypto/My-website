import LocaleSwitcher from "./LocaleSwitcher";
import {useTranslations} from 'next-intl';

export function Header( ) {



    const t = useTranslations('Header');
    return(
        <header className=" bg-gradient-to-r from-purple-500 to-pink-900 h-20 md:max-xl:flex grid grid-rows-1 grid-flow-col"> 
            <h2 className="text-white text-2xl font-titles  mt-6 ml-10">Joice Cristina</h2>
            <nav className="grid grid-rows-1 grid-flow-col mt-6 ml-10">
                <a className="text-white text-lg font-titles" href="/">{t('Inicio')}</a>
                <a className="text-white text-lg font-titles" href="/pt#sobre">{t('Sobre')}</a>
                <a className="text-white text-lg font-titles" href="/pt#contact">{t('Contato')}</a>
                <LocaleSwitcher />
            </nav>
            </header>
    );
}