import Header from "@/app/lib/Header/Header";
import Head from "next/head";
import "../app/styles/main.scss"
import Footer from "@/app/lib/Footer/Footer";

export default function PageLayout({ children }) {
 return (
    <>
      <Head>
        <title>FuturaDesign</title>
      </Head>
      <div className="page">
        <Header/>
        <main className="content">
          {children}
        </main>
        <Footer/>
      </div>
    </>
  )
}