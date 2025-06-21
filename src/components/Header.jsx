import imgTattoo from "/home/alushe/Documents/tatto/src/assets/tattoo2.jpeg";

const Header = () => {
  return (
    <header className="headerHeaderImgTattoo"
    >
      <img
        className="headerImgTattoo"
        src={imgTattoo}
        alt="tatuaje"
      />

      <div className="headerImgTattooDiv">
        <h1 className="headerImgTattooH1 headerImgTattooHGlobal">The Black Tattoo</h1>
        <h2 className="headerImgTattooH2 headerImgTattooHGlobal">Tu piel, nuestro lienzo. Sólo tinta negra, sin miedo.</h2>
      </div>
    </header>
  );
};

export default Header;
