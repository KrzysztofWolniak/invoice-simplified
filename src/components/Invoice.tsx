import React from "react";
import "./Invoice.css";

export const Invoice = (props: any) => {
  return (
    <div
      className="container base-font-size a4-size"
      style={{ backgroundColor: "white" }}
    >
      <div className="row">
        <div className="ps-2 ms-4 mt-2 col text-start    ">
          <fieldset className="border border-dark">
            <legend className="float-none w-auto fs-6 mb-0 ms-1">
              Sprzedawca
            </legend>
            <div className="ms-2 mt-0">
              <p className="mb-0">Nazwa Firmy</p>
              <p className="mb-0">Adres firmy</p>
              <p className="mb-0">KodPocztowy, miejscowosc</p>
              <p className="mb-1">NIP:</p>
            </div>
          </fieldset>
        </div>
        <div className="col mt-3 pt-1 text-center fw-bold me-4">
          <p className="bg-secondary mb-0 fs-6">Rodzaj faktury</p>
          <p className="mb-4 fs-6">nr Faktury</p>
          <div className="d-flex">
            <aside className="mt-2 fw-normal">Data wystawienia</aside>
            <aside className="ms-auto mt-2 ">20.05.2021</aside>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col text-end d-flex justify-content-end me-4">
          <aside className="">Strona:</aside>
          <aside className="ms-5 fw-bold">1/1</aside>
        </div>
      </div>
      <div className="row ">
        <div className="col text-start fw-bold ms-4 ps-2 ">
          <p>Bank: Numer rachunku:</p>
        </div>
      </div>
      <div className="row">
        <div className="col text-start fw-bold ms-4 ps-2">
          <p className="mb-0">Nabywca:</p>
          <p>Imie nazwisko</p>
          <p className="mb-0">Ulica</p>
          <p>Kod Miejscowosc</p>
        </div>
        <div className="col text-start fw-bold me-4">
          <p className="mb-0">Odbiorca</p>
          <p>Imie nazwisko</p>
          <p className="mb-0">Ulica</p>
          <p>Kod Miejscowosc</p>
        </div>
      </div>
      <div className="row ">
        <div className="col text-start fw-bold ms-5 me-4">
          <small className="me-3 ultra-small">Opis: </small>
          <small className="ultra-small">
            Usługi w stawce 8% wg art.41 pkt. 12 ustawy o podatku od towarów i
            usług z dnia 11.03.2004r
          </small>
          <p className="mx-4 px-3  mb-0 mt-2 ">
            <small className="ultra-small">
              Towar do momentu pełnej zapłaty ceny sprzedaży pozostaje
              własnością sprzedawcy, zgodnie z art. 589 k.c..—
            </small>
          </p>
        </div>
      </div>
      <div className="row mx-3 border-dark border text-center fw-bold">
        <div className="col    small-width ">
          <small>Lp.</small> <small></small>
        </div>
        <div className="col-4 fs- px-0">
          <small> Nazwa towaru/usługi</small>
        </div>
        <div className="col-2 px-0">
          <small> Kod CN/ PKWiU </small>
        </div>
        <div className="col small-width px-0 ">
          <small>Ilość</small>
        </div>
        <div className="col small-width px-0">
          <small>J.m.</small>
        </div>
        <div className="col small-width px-0">
          <small>VAT</small>
        </div>
        <div className="col px-0">
          <small>Cena Brutto</small>
        </div>
        <div className="col px-0">
          <small> Wartość Brutto</small>{" "}
        </div>
      </div>
      {/* \/ This will be separate component */}
      <div className="row border mx-3 border-white text-center">
        <div className="col  px-0  small-width ">
          <small>1</small>{" "}
        </div>
        <div className="col-4 fs- px-0">
          <small>
            {" "}
            Wykonanie 3 szt rolet rzymskich do pergoli (kolor G221) wraz z
            monteażem
          </small>
        </div>
        <div className="col-2 px-0">
          <small> </small>
        </div>
        <div className="col small-width px-0 ">
          <small>1</small>
        </div>
        <div className="col small-width px-0">
          <small>szt</small>
        </div>
        <div className="col small-width px-0">
          <small>8 %</small>
        </div>
        <div className="col px-0">
          <small>7800,00</small>
        </div>
        <div className="col px-0">
          <small> 7800,00</small>{" "}
        </div>
      </div>
    </div>
  );
};
