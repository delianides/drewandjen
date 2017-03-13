import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Picture from "../components/Picture";

export default () => (
  <Layout>
    <div className="grid flush">
      <div className="floating text-left">
        <div
          className="one-whole one-half@lap-and-up display-inline-block push-bottom@handheld floating__item"
        >
          <Picture
            className="background--fill ratio--square push-left flush-left"
            style={{
              backgroundImage: `url('${STATIC}/images/dj1@2x.jpg')`,
              backgroundPosition: "30%",
            }}
          />
        </div>
        <div
          className="text-dark-primary one-whole one-half@lap-and-up floating__item soft-double-sides@palm-wide-and-up soft-sides text-left display-inline-block text-center@handheld"
        >
          <p>Join us May 13, 2017 to celebrate the marriage of</p>
          <h3>Jennifer Caitlin Watson and Andrew John Delianides</h3>
        </div>
      </div>
    </div>
  </Layout>
);
