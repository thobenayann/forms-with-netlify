import Image from "next/image";
import Link from "next/link"

// Images
import check from "../public/check.svg"
import arrowLeft from "../public/arrow-left.svg"

export default function Success() {
    return (
    <section  className="flex flex-col items-center justify-center bg-[#FAFAFA] h-screen">
        <header  className="flex flex-col items-center">
            <h2 className="px-20 pt-20 pb-10">Votre message a bien été transmis !</h2>
            <p>Nous vous répondrons dans les plus brefs délais.</p>
        </header>
        <main className="object-center w-20 h-20">
            <Image src={check} alt="check icon" layout="responsive"/>
        </main>
        <footer className="flex flex-col justify-center items-center p-20">
            <Link href="/">
            <a className="w-10 h-10 mb-10 animate-bounce">
                <Image src={arrowLeft} alt="arrow left" layout="responsive"/>
            </a>
            </Link>
            <Link href="/">
                <a className="text-blue-600 underline">Retourner à la page de contact</a>
            </Link>
        </footer>
    </section>
    )
  }