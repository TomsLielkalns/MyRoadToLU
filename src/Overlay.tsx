type OverlayProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  setCurrentlyOpenModal: (value: string) => void;
};

const Overlay = ({ isOpen, setIsOpen, isDark, setIsDark, setCurrentlyOpenModal }: OverlayProps) => {
  let timeout: number = 0;

  return (
    <>
      <div className="overlay" style={{ overflowY: isOpen ? "scroll" : "hidden" }}>
        <nav role="navigation">
          <div id="menuToggle" style={{ height: isOpen ? "100vh" : "15vh" }}>
            <input
              type="checkbox"
              onClick={() => {
                clearTimeout(timeout);
                timeout = 0;
                if (!isOpen) {
                  setIsOpen(!isOpen);
                  return;
                }

                timeout = setTimeout(() => {
                  setIsOpen(!isOpen);
                }, 200);
              }}
            />
            <span></span>
            <span></span>
            <span></span>

            <ul id={"menu"} style={{ height: " 100%" }}>
              <a onClick={() => setCurrentlyOpenModal("vefPalace")}>
                <li>VEF Kultūras pils</li>
              </a>
              <a onClick={() => setCurrentlyOpenModal("gaisaTilts")}>
                <li>Gaisa tilts</li>
              </a>
              <a onClick={() => setCurrentlyOpenModal("evolutionBuilding")}>
                <li>Evolution Latvia ēka</li>
              </a>
              <a onClick={() => setCurrentlyOpenModal("newGertrudesChurch")}>
                <li>Rīgas Jaunā Ģertrūdes baznīca</li>
              </a>
              <a onClick={() => setCurrentlyOpenModal("dailesTheater")}>
                <li>Dailes teātris</li>
              </a>
              <a onClick={() => setCurrentlyOpenModal("cornerHouse")}>
                <li>Stūra Māja</li>
              </a>
              <a onClick={() => setCurrentlyOpenModal("oldGertrudesChurch")}>
                <li>Rīgas Vecā Ģertrūdes baznīca</li>
              </a>
              <a onClick={() => setCurrentlyOpenModal("anChurch")}>
                <li>Svētā Aleksandra Ņevska pareizticīgo baznīca</li>
              </a>
              <a onClick={() => setCurrentlyOpenModal("radisons")}>
                <li>Radisson Blu</li>
              </a>
              <a onClick={() => setCurrentlyOpenModal("orthodoxCathedral")}>
                <li>Rīgas Kristus Piedzimšanas pareizticīgo katedrāle</li>
              </a>
              <a onClick={() => setCurrentlyOpenModal("freedomMonument")}>
                <li>Brīvības piemineklis</li>
              </a>
              <a onClick={() => setCurrentlyOpenModal("vermaneGarden")}>
                <li>Vērmanes dārzs</li>
              </a>
              <a onClick={() => setCurrentlyOpenModal("lu")}>
                <li>Latvijas Universitāte</li>
              </a>
            </ul>
          </div>
        </nav>
      </div>
      <div
        style={{
          position: "absolute",
          right: 45,
          top: 43,
          zIndex: 2,
        }}
      >
        <i
          className={isDark ? "fa fa-sun" : "fa fa-moon"}
          style={{ fontSize: 30, cursor: "pointer", color: isDark ? "#f3edee" : "#2b2d31" }}
          onClick={() => {
            setIsDark(!isDark);
            document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark");
          }}
        />
      </div>
    </>
  );
};

export default Overlay;
