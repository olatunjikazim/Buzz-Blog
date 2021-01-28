import React from "react";

/**
 * @author
 * @function Main
 **/

const Main = (props) => {
  return (
    <div className="main">
      <div className="mainheader">
        <h3>My work.</h3>
      </div>

      <div className="mainpage1">
        <div className="pic1">
          <img
            src="https://buzzusborne.com/_assets/home/thumb_helpscout.png"
            alt="pic1"
            className="pic1"
          />
          <div className="writing">
            <p>Help Scout</p>
            <h4>Principal Designer</h4>
          </div>
        </div>

        <div className="pic2">
          <img
            src="https://buzzusborne.com/_assets/home/thumb_atlassian.png"
            alt="pic2"
            className="pic2"
          />

          <div className="writing">
            <p>Atlassian</p>
            <h4>Lead Designer</h4>
          </div>
        </div>
      </div>

      <div className="mainpage2">
        <div className="pic1">
          <img
            src="https://buzzusborne.com/_assets/home/thumb_prevue.png"
            alt="pic1"
            className="pic1"
          />
          <div className="writing">
            <p>Prevue</p>
            <h4>Founder</h4>
          </div>
        </div>

        <div className="pic2">
          <img
            src="https://buzzusborne.com/_assets/home/thumb_skype.png"
            alt="pic2"
            className="pic2"
          />

          <div className="writing">
            <p>Skype</p>
            <h4>UI Design lead</h4>
          </div>
        </div>
      </div>

      <div className="mainpage3">
        <div className="pic1">
          <img
            src="https://buzzusborne.com/_assets/home/thumb_campaignmonitor.png"
            alt="pic1"
            className="pic1"
          />
          <div className="writing">
            <p>Campaign Monitor</p>
            <h4>UX Director</h4>
          </div>
        </div>

        <div className="pic2">
          <img
            src="https://buzzusborne.com/_assets/home/thumb_sendle.png"
            alt="pic2"
            className="pic2"
          />

          <div className="writing">
            <p>Sendle</p>
            <h4>Product lead</h4>
          </div>
        </div>
      </div>

      <div className="lastpart"></div>
    </div>
  );
};

export default Main;
