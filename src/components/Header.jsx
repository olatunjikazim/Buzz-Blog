import React from "react";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  return (
    <header className="Header">
      <div className="first">
        <div>
          <img
            src="https://buzzusborne.com/_assets/svg/buzz.svg"
            alt="buuz"
            className="Buzz"
          />
        </div>

        <div className="Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
          </svg>
        </div>
      </div>

      <section className="ally">
        <h2>
          I’m Buzz, <span>an ally</span> with 16+ years experience and a passion
          for building, scaling and coaching highly effective & collaborative
          teams.
        </h2>
      </section>
    </header>
  );
};

export default Header;
