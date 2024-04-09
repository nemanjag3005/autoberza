import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-background2 px-3 py-12 text-[15px] text-text1 md:px-10  md:py-10">
      <div className="mx-auto flex w-full max-w-8xl flex-col md:flex-row md:justify-between">
        <div className="mr-8 hidden inter6:block">
          <Link href="/">
            <h1 className=" whitespace-nowrap text-2xl font-bold md:text-3xl">
              Auto <span className="text-primary">Berza</span>
            </h1>
          </Link>
        </div>
        <div className=" grid grid-cols-2 xs:grid-cols-3 md:flex md:justify-between">
          <div className="mb-10 mr-10">
            <p className="text-text4 mb-4 text-xs uppercase">
              Kako funkcioniše
            </p>
            <p className="mb-2 hover:underline">
              <Link href="/">Kupovina auta</Link>
            </p>
            <p className="mb-2 hover:underline">
              <Link href="/">Prodaja auta</Link>
            </p>
            <p className="mb-2 hover:underline">
              <Link href="/">Finalizacija kupovine</Link>
            </p>
            <p className="hover:underline">
              <Link href="/">Često postavljana pitanja</Link>
            </p>
          </div>
          <div className="mb-10 mr-10">
            <p className="text-text4 mb-4 text-xs uppercase">Prodavci</p>
            <p className="mb-2 hover:underline">
              <Link href="/">Prijavi auto</Link>
            </p>
            <p className="mb-2 hover:underline">
              <Link href="/">Fotografije auta</Link>
            </p>
            <p className="mb-2 hover:underline">
              <Link href="/">Inspekcije</Link>
            </p>
            <p className="hover:underline">
              <Link href="/">Često postavljana pitanja</Link>
            </p>
          </div>
          <div className="mb-10 mr-10">
            <p className="text-text4 mb-4 text-xs uppercase">
              Korisne stranice
            </p>
            <p className="mb-2 hover:underline">
              <Link href="/">Forum</Link>
            </p>
            <p className="mb-2 hover:underline">
              <Link href="/">Pomoć</Link>
            </p>
            <p className="mb-2 hover:underline">
              <Link href="/">Dostava</Link>
            </p>
          </div>
        </div>
        <div>
          <div></div>
          <p className="text-text4 text-xs">
            © Copyright 2024 Auto Berza d.o.o
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
