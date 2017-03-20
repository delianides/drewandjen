import React, { Component } from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import Picture from "../../components/Util/Picture";
import Icon from "../../components/Util/Icon";

import moment from "moment";

const labelClasses = ["flush", "soft-half-bottom"].join(" ");

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
      <div className="floating">
        <div
          className="one-whole display-inline-block push-bottom@handheld floating__item"
        >
          <Picture
            className="background--fill ratio--landscape"
            style={{
              backgroundImage: `url('${STATIC}/images/dj2@2x.jpg')`,
              backgroundPosition: "70%",
            }}
          />
        </div>
      </div>
      <Form />
    </div>
  </Layout>
);

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: "yes",
      numberOfGuests: 1,
      emailAddress: "",
      firstName: "",
      lastName: "",
      additionalGuests: [],
      coffeePref: "none",
      submitted: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("update");
  //   return true;
  // }
  // eslint-disable-next-line
  handleGuestChange = idx =>
    evt => {
      const newGuestList = this.state.additionalGuests.map((person, sidx) => {
        if (idx !== sidx) return person;
        return { ...person, name: evt.target.value };
      });

      this.setState({
        additionalGuests: newGuestList,
      });
    };

  handleRemoveGuest = idx =>
    () => {
      this.setState({
        additionalGuests: this.state.additionalGuests.filter(
          (s, sidx) => idx !== sidx
        ),
        numberOfGuests: this.state.numberOfGuests - 1,
      });
    };

  handleAddGuest = () => {
    this.setState({
      additionalGuests: this.state.additionalGuests.concat([{ name: "" }]),
      numberOfGuests: this.state.numberOfGuests + 1,
    });
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = event => {
    const _this = this;

    fetch("https://api.formbucket.com/f/buk_ejscAdDuG2xBlOGgdVrptBAN", {
      method: "post",
      mode: "cors",
      headers: {
        accept: "application/javascript",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.emailAddress,
        attending: this.state.isGoing,
        additionalGuests: this.state.additionalGuests.map(p => p.name).join(),
        totalGuests: this.state.numberOfGuests,
        coffeePref: this.state.coffeePref,
        entryDate: moment().toString(),
      }),
    })
      .then(function(response) {
        _this.setState({
          submitted: true,
        });
      })
      .catch(function(err) {
        _this.setState({
          submitted: "error",
        });
      });

    event.preventDefault();
  };

  render() {
    const { submitted } = this.state;
    if (submitted === "error") {
      return (
        <div
          className="one-whole floating__item soft-double-sides@palm-wide-and-up soft-sides text-left display-inline-block text-center push-double-top"
        >
          <div>
            <Icon icon="warning" />
            <h2
              className="italic text-primary text-center push-half-bottom soft-half-top capitalize"
            >
              Oops! There seems to have been an error!
            </h2>
            <p className="body-info">Try Refreshing the page.</p>
            <p className="body-info">
              If it continues let us know at
              {" "}
              <a href="mailto:hello@drewandjen.com">hello@drewandjen.com</a>
            </p>
          </div>
        </div>
      );
    }
    if (submitted) {
      return (
        <div
          className="one-whole floating__item soft-double-sides@palm-wide-and-up soft-sides text-left display-inline-block text-center"
        >
          <div>
            <h2
              className="italic text-primary text-center push-double-ends capitalize"
            >
              Thank you for sending your RSVP!
            </h2>

            <Icon icon="reminder" />
            <h2
              className="italic text-primary text-center push-half-bottom soft-half-top capitalize"
            >
              Remember!
            </h2>
            <span className="push-half-ends">
              <p className="body-info">Biggerstaff Retreat</p>
              <p className="body-info">398 Biggerstaff Road</p>
              <p className="body-info">Seneca, SC 29672</p>
            </span>
            <span className="push-half-ends">
              <p className="body-info">May 13, 2017</p>
              <p className="body-info">6:00 PM</p>
            </span>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div
          className="one-whole floating__item soft-double-sides@palm-wide-and-up soft-sides text-left display-inline-block text-center@handheld"
        >
          <h2
            className="italic text-primary text-center push-double-ends capitalize"
          >
            Please use this form to RSVP by April 22, 2017
          </h2>
          <div className="text-center body-info">
            <p>
              If you have received an invitation please fill out the form below to let us know if you can attend.
            </p>
            <p>
              Please list each family member or friend you might be bringing with you. Only one household family member needs to RSVP.
            </p>
          </div>
        </div>
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
              id="contact-form"
              onSubmit={this.handleSubmit}
            >
              <fieldset>

                <div
                  className={
                    "hard-left soft-right@lap-and-up push-double-bottom " +
                      "grid__item one-whole one-half@lap-and-up text-dark-primary"
                  }
                >
                  <h5 className={labelClasses}>My first name is</h5>
                  <input
                    placeholder="First Name"
                    className="h2 text-dark-primary"
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>

                <div
                  className={
                    "hard-left soft-right@lap-and-up push-double-bottom " +
                      "grid__item one-whole one-half@lap-and-up text-dark-primary"
                  }
                >
                  <h5 className={labelClasses}>My last name is</h5>
                  <input
                    placeholder="Last Name"
                    className="h2 text-dark-primary one-whole"
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>

                <div
                  className={
                    "hard-left soft-right@lap-and-up push-double-bottom " +
                      "grid__item one-whole text-dark-primary"
                  }
                >
                  <h5 className={labelClasses}>My email is</h5>
                  <input
                    placeholder="Email Address"
                    className="h2 text-dark-primary one-whole"
                    id="email"
                    name="emailAddress"
                    type="email"
                    value={this.state.emailAddress}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>

                <div
                  className={
                    "hard-left soft-right@lap-and-up push-double-bottom " +
                      "grid__item one-whole one-half@lap-and-up text-dark-primary"
                  }
                >
                  <h5 className={labelClasses}>Attending?</h5>
                  <label className="h2 text-dark-primary display-inline-block push-right">
                    <input
                      className="h2 text-dark-primary push-half-right"
                      style={{
                        marginTop: "11px",
                      }}
                      name="isGoing"
                      type="radio"
                      value="yes"
                      checked={this.state.isGoing === "yes"}
                      onChange={this.handleInputChange}
                      required
                    />
                    Will Come!
                  </label>

                  <label
                    className="h2 text-dark-primary display-inline-block push-right"
                  >
                    <input
                      className="h2 text-dark-primary push-half-right"
                      style={{
                        marginTop: "11px",
                      }}
                      name="isGoing"
                      type="radio"
                      value="no"
                      checked={this.state.isGoing === "no"}
                      onChange={this.handleInputChange}
                      required
                    />
                    Regrets
                  </label>
                </div>
                {this.state.isGoing === "yes" &&
                <div>
                <div
                  className={
                    "hard-left soft-right@lap-and-up push-double-bottom " +
                      "grid__item one-whole two-thirds@lap-and-up text-dark-primary"
                  }
                >
                  <h5 className={labelClasses}>After 6pm I Prefer?</h5>
                  <label className="h2 text-dark-primary display-inline-block push-right">
                    <input
                      className="h2 text-dark-primary push-half-right"
                      style={{
                        marginTop: "11px",
                      }}
                      name="coffeePref"
                      type="radio"
                      value="none"
                      checked={this.state.coffeePref === "none"}
                      onChange={this.handleInputChange}
                      required
                    />
                    No Coffee Please!
                  </label>
                  <label
                    className="h2 text-dark-primary display-inline-block push-right"
                  >
                    <input
                      className="h2 text-dark-primary push-half-right"
                      style={{
                        marginTop: "11px",
                      }}
                      name="coffeePref"
                      type="radio"
                      value="regular"
                      checked={this.state.coffeePref === "regular"}
                      onChange={this.handleInputChange}
                      required
                    />
                    Regular
                  </label>
                  <label className="h2 text-dark-primary display-inline-block push-right">
                    <input
                      className="h2 text-dark-primary push-half-right"
                      style={{
                        marginTop: "11px",
                      }}
                      name="coffeePref"
                      type="radio"
                      value="decaf"
                      checked={this.state.coffeePref === "decaf"}
                      onChange={this.handleInputChange}
                      required
                    />
                    Decaf
                  </label>
                  </div>
                  <div
                    className={
                      "hard-left soft-right@lap-and-up push-double-bottom " +
                        "grid__item one-whole text-dark-primary"
                    }
                  >
                    <h5 className={labelClasses}>Additional Guests</h5>
                    {this.state.additionalGuests.map((person, id) => (
                      <div key={id}>
                        <input
                          className="h2 text-dark-primary two-thirds@handheld"
                          placeholder="Full Name"
                          type="text"
                          value={person.name}
                          onChange={this.handleGuestChange(id)}
                          required
                        />
                        <button
                          type="button"
                          onClick={this.handleRemoveGuest(id)}
                          className="small uppercase push-half-left"
                        >
                          <span
                            style={{ marginRight: "3px" }}
                            className="p la la-user-minus text-center"
                          />
                          Remove
                        </button>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={this.handleAddGuest}
                      className="small uppercase"
                    >
                      <span
                        style={{ marginRight: "3px" }}
                        className="p la la-user-plus text-center"
                      />
                      Add
                    </button>
                  </div></div>}

                <div className="floating">
                  <button
                    className="p btn--filled-light floating__item soft-half-bottom"
                    id="submit"
                    type="submit"
                  >
                    RSVP
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
