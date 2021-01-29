import React from "react";

/**
 * @author
 * @function Footer
 **/

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="mainfooter">
        <div className="firstfooter">
          <span className="video">RECENT VIDEO</span>
          <p>Design System for small teams</p>
          <span>DesignOPs, 2020</span>
          <div className="press">More press</div>
        </div>

        <div className="secondfooter">
          <span className="video">RECENT ARTICLE</span>
          <p>Tips for Designing remotely</p>
          <span>Medium, 2020</span>
        </div>

        <div className="thirdfooter">
          <span className="video">RECENT INTERVIEW</span>
          <p>The remote guide to product design</p>
          <span>Dolst, 2019</span>
        </div>
      </div>

      <div className="lessfooter">
        <a href="#Home">Home</a>
        <a href="#Work">Work</a>
        <a href="#Coaching">Coaching</a>
        <a href="#About">About</a>
      </div>
    </div>
  );
};

export default Footer;
