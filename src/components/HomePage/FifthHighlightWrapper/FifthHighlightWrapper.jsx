import React from "react";

import SmallHighlightWrapper from "../../SmallHighlightWrapper";
import watchSeries5Logo from "./images/watch-series5-logo.png";
import Link from "../../Link";
import "./stylesFifthHighlightWrapper.css";

export default function FifthHighlightWrapper() {
  let link = [
    { label: "Learn more", url: "/" },
    { label: "Buy", url: "/" },
  ];
  return (
    <section className="fifth-highlight-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="left-side-wrapper col-sm-12 col-md-6">
            <div className="left-side-container">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={watchSeries5Logo} alt="watchSeries5Logo" />
                </div>
              </div>
              <div className="description-wrapper">
                With the Always-On Retina display.
                <br />
                You’ve never seen a watch like this.
              </div>
              <div className="links-wrapper">
                <ul>
                  {link.map((item, index) => (
                    <Link key={index} info={item} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="right-side-wrapper col-sm-12 col-md-6">
            <div className="right-side-container">
              <SmallHighlightWrapper
                titleClass="headline"
                title="MacBook Pro"
                subhead="Supercharged by M2 Pro and M2 Max."
              />

              <div className="links-wrapper">
                <ul>
                  {link.map((item, index) => (
                    <Link key={index} info={item} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
