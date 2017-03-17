import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Picture from "../components/Util/Picture";
import Icon from "../components/Util/Icon";
import Registry from "../components/Registry";

import stores from "./registry";

export default () => (
  <Layout>
    <section
      id="masthead"
      className="grid flush-sides hard-sides@handheld hard-top"
    >
      <div className="floating text-left">
        <div
          className="one-whole display-inline-block push-bottom@handheld floating__item"
        >
          <Picture
            className="background--fill ratio--landscape"
            style={{
              backgroundImage: `url('${STATIC}/images/dj1@2x.jpg')`,
              backgroundPosition: "30%",
            }}
          />
        </div>
        <div
          className="text-light-primary text-center italic one-whole floating__item soft-double@palm-wide-and-up soft-double-ends soft-sides display-inline-block push-double-top@lap-and-up"
        >
          <h1>Jennifer Caitlin Watson</h1>
          <h3>and</h3>
          <h1>Andrew John Delianides</h1>
        </div>
      </div>
    </section>
    <section
      id="info"
      style={{ maxWidth: "1024px" }}
      className="one-whole@lap two-thirds@lap-wide-and-up soft-double text-center capitalize"
    >
      <div
        id="where"
        className="grid__item floating one-third@lap-and-up two-thirds text-center one-half@palm-wide soft"
      >
        <Icon icon="map-marker" />
        <h2 className="italic text-primary push-top">Where?</h2>
        <p className="body-info">Biggerstaff Retreat</p>
        <p className="body-info">398 Biggerstaff Road</p>
        <p className="body-info">Seneca, SC 29672</p>
      </div>
      <div
        id="when"
        className="grid__item floating one-third@lap-and-up two-thirds text-center one-half@palm-wide soft"
      >
        <Icon icon="calendar-31" />
        <h2 className="italic text-primary push-top">When?</h2>
        <p className="body-info">May 13, 2017</p>
        <p className="body-info">6:00 PM</p>
      </div>
      <div
        id="dinner"
        className="grid__item floating one-third@lap-and-up two-thirds text-center one-half@palm-wide soft"
      >
        <Icon icon="dinner" />
        <h2 className="italic text-primary push-top">After!</h2>
        <p className="capitalize body-info">
          Reception to follow after ceremony.
        </p>
      </div>
    </section>
    <section
      id="registry"
      style={{ maxWidth: "1024px" }}
      className="one-whole@lap two-thirds@lap-wide-and-up soft-double text-center"
    >
      <h2 className="italic text-primary push-double-ends text-center">
        Where We're Registered!
      </h2>
      {stores.map((store, i) => (
        <Registry
          key={i}
          url={store.link.url}
          alt={store.link.alt}
          store={store.name}
          classes="grid__item floating one-third@lap-and-up two-thirds text-center one-half@palm-wide soft"
        />
      ))}
    </section>
    <section id="contact">
      <div
        id="contact"
        className="grid__item floating one-whole text-center soft"
      >
        <Icon icon="contacts" />
        <h2 className="italic text-primary push-top">Contact</h2>
        <p className="body-info">
          <a href="mailto:hello@drewandjenny.com">hello@drewandjenny.com</a>
        </p>
        <p className="h2 italic capitalize body-info push-ends text-primary">
          Our Future Address
        </p>
        <p className="body-info">3201 Glen Forest Drive</p>
        <p className="body-info">Greenville, SC 29607</p>
      </div>
    </section>
  </Layout>
);
