import { useState, useEffect, useRef } from 'react';
import { slides } from '../slides.js';

import styles from '../styles/Slide.module.scss';
// position = -1320px

const Slide = () => {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    // getBoundingClientRect() - retorna um objeto com as posições do elemento
    // pegando apenas o prop width do elem na tela do usuário
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive((prev) => prev - 1);
  }

  function slideNext() {
    if (active < slides.length - 1) setActive((prev) => prev + 1);
  }

  return (
    <section className={styles.container}>
      <div
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
        ref={contentRef}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.iten}>
            {slide.text}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev}>Previus</button>
        <button onClick={slideNext}>Next</button>
      </nav>
    </section>
  );
};

export default Slide;
