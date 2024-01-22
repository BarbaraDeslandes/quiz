import React, { useState, useEffect } from "react";
import "./Acessibilidade.css";
import { IoIosContrast, IoIosBody } from "react-icons/io";

const Acessibilidade = () => {
  const [initialSizeList, setInitialSizeList] = useState([]);

  const setContrastStyles = (isHighContrast) => {
    if (isHighContrast) {
      document.body.style.setProperty("--background-color", "var(--cor7)");
      document.body.style.setProperty("--text-color", "var(--cor1)");
      document.body.style.setProperty("--background-color2", "var(--cor5)");
      document.body.style.setProperty("--text-color2", "var(--cor1)");
      document.body.style.setProperty("--background-color3", "var(--cor7)");
    } else {
      document.body.style.setProperty("--background-color", "var(--cor1)");
      document.body.style.setProperty("--text-color", "var(--cor2)");
      document.body.style.setProperty("--background-color2", "var(--cor2)");
      document.body.style.setProperty("--text-color2", "var(--cor1)");
      document.body.style.setProperty("--background-color3", "var(--cor6)");
    }
  };

  const handleFontSize = (updateValue) => {
    const fontVariables = ["--font-s", "--font-m", "--font-g"];

    fontVariables.forEach(variable => {
        const currentFontSize = getComputedStyle(document.body).getPropertyValue(variable);
        const currentFontSizeValue = parseFloat(currentFontSize);
        const unit = currentFontSize.replace(currentFontSizeValue, '').trim();
        const newFontSize = currentFontSizeValue + parseFloat(updateValue);
        document.body.style.setProperty(variable, `${newFontSize}${unit}`);
    });
};


  const handleEmoldurar = (hasBorder) => {
    const selectors = "h1, h2, p, a, span, li, label, input, button, img, th, td";
    let elements = document.querySelectorAll(selectors);
    elements.forEach((element) => {
      element.style.outline = hasBorder ? "3px solid #007bff" : "none";
    });
  };

  const [highContrast, setHighContrast] = useState(false);
  const [hasBorder, setHasBorder] = useState(false);

  useEffect(() => {
    setContrastStyles(highContrast);
  }, [highContrast]);

  useEffect(() => {
    handleEmoldurar(hasBorder);
  }, [hasBorder]);


  const normalizeSize = () => {
        document.body.style.setProperty("--font-s", "18px");
        document.body.style.setProperty("--font-m", "20px");
        document.body.style.setProperty("--font-g", "35px");
  };

  return (
    <div id="acessibilidade-container">
      <IoIosBody id="simboloAcessibilidade"/>
      <input
        id="checkbox-emoldurar"
        type="checkbox"
        checked={hasBorder}
        onChange={() => setHasBorder(!hasBorder)}
        aria-label="Ativar/desativar emolduramento de elementos"
        tabIndex="0"
      />
      <label htmlFor="checkbox-emoldurar" style={{ fontSize: "var(--font-s)" }}>
        Emoldurar Elementos
      </label>

      <button
        className="botoes-acessibilidade"
        onClick={() => setHighContrast(!highContrast)}
        aria-label="Ativar alto contraste"
        aria-pressed={highContrast}
        tabIndex="0"
      >
        <IoIosContrast
          aria-label="Icone de Alto Contraste"
          className="icone-contraste"
        />
      </button>
      <button
        className="botoes-acessibilidade"
        style={{ fontSize: "var(--font-m)" }}
        aria-label="Diminuir tamanho da fonte -A"
        onClick={() => handleFontSize(-1)}
        tabIndex="0"
      >
        -A
      </button>
      <button
        className="botoes-acessibilidade"
        style={{ fontSize: "var(--font-m)" }}
        aria-label="Normalizar tamanho da fonte"
        onClick={normalizeSize}
        tabIndex="0"
      >
        A
      </button>
      <button
        className="botoes-acessibilidade"
        style={{ fontSize: "var(--font-m)" }}
        aria-label="Aumentar tamanho da fonte +A"
        onClick={() => handleFontSize(+1)}
        tabIndex="0"
      >
        +A
      </button>
    </div>
  );
};

export default Acessibilidade;
