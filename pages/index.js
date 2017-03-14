import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Picture from "../components/Picture";
import Registry from "../components/Registry";

import ReactSVG from "react-svg";

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
          className="text-dark-primary text-center one-whole one-half@lap-and-up floating__item soft-double-sides@palm-wide-and-up soft-double-ends@handheld soft-sides text-left display-inline-block text-center@handheld"
        >
          <h1 className="italic">Jennifer Caitlin Watson</h1>
          <h3 className="italic">and</h3>
          <h1 className="italic">Andrew John Delianides</h1>
          <p>are getting married in Seneca, SC on May 13, 2017.</p>
        </div>
      </div>
    </div>
    <section className="flush">
      <div id="registry" className="grid">
        <h2 className="push-double-top soft-half-bottom text-center">
          Where We're Registered
        </h2>
        <Registry url="https://ajd.fyi/2nnl7xa" store="target" />
        <Registry url="https://ajd.fyi/2nxXdOP" store="macys" />
        <Registry url="https://ajd.fyi/2mDv75w" store="amazon" />
      </div>
    </section>
    <section className="flush">
      <div className="push-double-top soft-half-bottom">
        <div id="map" className="one-whole one-thid@lap-and-up floating__item">
          <iframe
            width="500px"
            height="500px"
            className="one-whole one-third@lap-and-up display-inline-block push-bottom@handheld floating__item"
            frameborder="0"
            style={{ border: 0, "pointer-events": "none" }}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBTRzVJQZMf5v-sQZO4j9r-m6jxazeuUqE&amp;q=Biggerstaff+Retreat"
          />
        </div>
      </div>
    </section>
  </Layout>
);
