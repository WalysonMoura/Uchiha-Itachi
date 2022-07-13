// import { useState } from "react";

import { Menu } from "../../Componentes/Menu/";
import { Card } from "../../Componentes/Cards/";

import "./style.css";
import itachi from "./img/itachi.png";

export function Home() {
  return (
    <div className="l-containner">
      <Menu />
      
      <main className="c-main">
        <section className="c-main__content">
          <h1 className="c-main__titulo">ITACHI UCHIHA</h1>
          <p className="c-main__descricao">
            itachi Uchiha (うちはイタチ Uchiha Itachi) é um personagem fictício
            lendário do Clã Uchiha da série de anime e mangá Naruto criada por
            Masashi Kishimoto. Na série, Itachi é o irmão mais velho de Sasuke
            Uchiha e é responsável pela morte de todos os membros de seu clã,
            poupando apenas Sasuke.
          </p>
          <div className="c-main__icones">
            <i class="c-main__icon bx bxs-star bx-tada"></i>
            <i class="c-main__icon bx bxs-star bx-tada"></i>
            <i class="c-main__icon bx bxs-star bx-tada"></i>
            <i class="c-main__icon bx bxs-star bx-tada"></i>
            <i class="c-main__icon bx bxs-star bx-tada"></i>
          </div>
          <Card />
        </section>

        <section className="c-main__imagem">
          <img className="c-main__img" src={itachi} />
        </section>
        
      </main>
    </div>
  );
}
