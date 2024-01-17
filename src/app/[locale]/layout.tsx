/* eslint-disable react-hooks/rules-of-hooks */
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Work_Sans as WorkSans, } from 'next/font/google'



const worksans = WorkSans({
  subsets: ['latin'], variable: '--font-Work-Sans',
  weight: '600'
})


  
export const metadata: Metadata = {
  title: 'Joice Cristina',
 
}

export default function LocaleLayout({children, params: {locale}} : {
  children: React.ReactNode
  params: any
}) {
  return (
    <html lang={locale}>
      <body  className={`${worksans.variable}`}>
      <Header/> 
        {children}
      <Footer/>
      </body>
      
    </html>
  );
}


// export default function LocaleLayout({
//   children
// }: {
//   children: React.ReactNode
// }) {
//   const router = useRouter();
//   const { locale } = router.query;

//   return (
//     <html lang={locale as string}>
//       <body className={inter.className}>
//         <Header />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }