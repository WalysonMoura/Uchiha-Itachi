// ============= CSS ===============
import "./style.css";

// =========== IMAGENS =============
import narutoxpain from "./img/narutoxpain.png";
import narutoxsasuke from "./img/narutoxsasuke.png";
import sasukexitachi from "./img/sasukexitachi.png";

export function Card() {
  return (
    <div className="c-card">
      <div className="c-card__imagem">
        <a className="c-card__link" href="http://" target="_blank" rel="noopener noreferrer">
          <img className="c-card__img" src={narutoxpain} />
          <p className="c-card__descricao">Episódio 165</p>
        </a>
      </div>

      <div className="c-card__imagem">
        <a className="c-card__link" href="http://" target="_blank" rel="noopener noreferrer">
          <img className="c-card__img" src={narutoxsasuke} />
          <p className="c-card__descricao">Episódio 216</p>
        </a>
      </div>

      <div className="c-card__imagem">
        <a className="c-card__link" href="http://" target="_blank" rel="noopener noreferrer">
          <img className="c-card__img" src={sasukexitachi} />
          <p className="c-card__descricao">Episódio 138</p>
        </a>
      </div>
    </div>
  );
}
