type OverlayProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isDark: boolean;
  setIsDark: (value: boolean) => void;
};

const Overlay = ({ isOpen, setIsOpen, isDark, setIsDark }: OverlayProps) => {
  let timeout: number = 0;

  return (
    <>
      <div className="overlay">
        <nav role="navigation">
          <div id="menuToggle" style={{ height: isOpen ? "auto" : 0 }}>
            <input
              type="checkbox"
              onClick={() => {
                clearTimeout(timeout);
                timeout = 0;
                if (!isOpen) {
                  // @ts-expect-error need fix
                  setIsOpen((prev) => !prev);
                  return;
                }

                timeout = setTimeout(() => {
                  // @ts-expect-error need fix
                  setIsOpen((prev) => !prev);
                }, 1000);
              }}
            />
            <span></span>
            <span></span>
            <span></span>

            <ul id="menu" style={{ height: isOpen ? "79.6vh" : 0 }}>
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>About</li>
              </a>
              <a href="#">
                <li>Info</li>
              </a>
              <a href="#">
                <li>Contact</li>
              </a>
              <a href="https://erikterwan.com/" target="_blank">
                <li>Show me more</li>
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
          zIndex: 1000,
        }}
      >
        <i
          className={isDark ? "fa fa-sun" : "fa fa-moon"}
          style={{ fontSize: 30, cursor: "pointer", color: isDark ? "#f3edee" : "#2b2d31" }}
          onClick={() => {
            // @ts-expect-error need fix
            setIsDark((prev) => !prev);
            document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark");
          }}
        />
      </div>
    </>
  );
};

export default Overlay;
