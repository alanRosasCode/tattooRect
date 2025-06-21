// src/components/TatuadorInfo.jsx
import Video from "/home/alushe/Documents/tatto/src/assets/Download.mp4"; // Importa el video si es necesario
const TatuadorInfo = () => {
  return (
    <section className="tatuador-container">
      <div className="tatuador-descripcion">
        <h2>The Black Tattoo</h2>
        <p>
          Con más de 10 años de experiencia, mezcla precisión, arte y pasión
          por los detalles. Su estilo combina trazos finos con sombreado realista.
        </p>
        <p>
          Experto en blackwork, mandalas, realismo y arte personalizado. Cada diseño es único,
          como las historias que plasma en la piel.
        </p>
      </div>

      <div className="tatuador-video">
        <video controls>
          <source src={Video} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>
    </section>
  );
};

export default TatuadorInfo;
