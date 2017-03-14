import React, { Component } from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import Picture from "../../components/Picture";

const labelClasses = ["flush", "soft-half-left", "soft-half-bottom"].join(" ");

const iconClasses = [
  "plain",
  "h2",
  "text-dark-tertiary",
  "push-half",
  "display-inline-block",
].join(" ");

const hideIconText = {
  position: "absolute",
  left: "-9999px",
};

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
              backgroundImage: `url('${STATIC}/images/dj2@2x.jpg')`,
              backgroundPosition: "70%",
            }}
          />
        </div>
        <div
          className="text-dark-primary one-whole one-half@lap-and-up floating__item soft-double-sides@palm-wide-and-up soft-sides text-left display-inline-block text-center@handheld"
        >
          <h3>RSVP Below</h3>
          <p>
            If you received an invitation please fill out the form below to let us know if you can attend.
          </p>
          <p>
            Please list each family member or friend you might be bringing with you. Only one family member needs to RSVP.
          </p>
          <p>
            The wedding will take place at 6:00 PM on May 13, 2017. You can find directions here.
          </p>
        </div>
      </div>
      <Form />
    </div>
  </Layout>
);

// const Page = ({ url }) => (
class Form extends Component {
  render() {
    return (
      <div>
        <style>
          {
            `
          #contact-form input:valid,
          #contact-form textarea:valid {
            opacity: 1;
          }
        `
          }
        </style>
        <div
          className={
            "push-double-bottom soft-double@lap-and-up " +
              "soft@palm-wide hard floating"
          }
        >
          <div
            className="soft-double-ends floating__item two-thirds@lap-wide-and-up one-whole"
          >
            <form
              className="text-left text-primary"
              action="//api.formbucket.com/f/buk_ejscAdDuG2xBlOGgdVrptBAN"
              id="contact-form"
              method="post"
              role="form"
            >
              <fieldset>

                <div
                  className={
                    "hard-left soft-right@lap-and-up push-double-bottom " +
                      "grid__item one-whole one-half@lap-and-up"
                  }
                >
                  <h5 className={labelClasses}>My name is</h5>
                  <input
                    placeholder="Name"
                    className="h2 text--primary"
                    id="name"
                    name="name"
                    type="text"
                    required
                  />
                </div>

                <div
                  className={
                    "hard-left@handheld push-double-bottom " +
                      "grid__item one-whole one-half@lap-and-up"
                  }
                >
                  <h5 className={labelClasses}>My email is</h5>
                  <input
                    placeholder="email address"
                    className="h2 text--primary"
                    id="email"
                    name="_replyto"
                    type="email"
                    required
                  />
                </div>

                <div className="push-double-bottom">
                  <h5 className={labelClasses}>{"I'm interested in"}</h5>
                  <textarea
                    placeholder="home planet"
                    className="h2 text--primary"
                    id="name"
                    name="name"
                    type="text"
                    required
                  />
                </div>

                <input id="next" name="_next" type="hidden" />
                <div className="floating">
                  <button
                    className="p btn--filled-light floating__item soft-half-bottom"
                    id="submit"
                    type="submit"
                  >
                    Send My Message
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
