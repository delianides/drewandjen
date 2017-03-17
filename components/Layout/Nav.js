import React, { Component } from "react";
import Link from "next/link";
import ReactSVG from "react-svg";

const linkClasses = [
  "display-inline-block",
  "push-double-sides@lap-and-up",
  "text-dark-primary",
  "uppercase plain",
].join(" ");

const logoClasses = [].join(" ");

const iconClasses = ["h2", "visuallyhidden@handheld"].join(" ");

const textClasses = [
  "flush",
  "small",
  // "soft-half-ends@handheld",
  "soft-half-top@lap-and-up",
].join(" ");

const links = [
  { path: "/rsvp", icon: "la la-reply", title: "RSVP" },
  { path: "/#registry", icon: "la la-gift", title: "Registry" },
  { path: "/#contact", icon: "la la-envelope", title: "Contact" },
];

export default class Nav extends Component {
  constructor(...args) {
    super(...args);
    this.onNavToggle = this.onNavToggle.bind(this);
  }
  // state = { active: false }
  componentWillMount() {
    this.setState({ active: false });
  }

  onNavToggle() {
    this.setState(({ active }) => ({ active: !active }));
  }

  render() {
    const active = this.state.active;
    return (
      <div
        className={
          `
          soft-half-ends@handheld push-half@handheld soft-ends@lap-and-up soft-sides@lap-and-up
          hard-sides@handheld text-center@lap-and-up
        `
        }
      >
        <Link prefetch href={"/"}>
          <a
            className={
              `
              ${linkClasses} ${logoClasses} display-inline-block@handheld soft-half-left
              ${active && "visuallyhidden"} text-center@lap-and-up
            `
            }
          >
            <span
              className={
                `
                la la-heart-circle h2 flush-bottom display-inline-block soft-half-right@handheld
              `
              }
              style={{
                verticalAlign: "middle",
              }}
            />
            <p
              className={`${textClasses} flush hard visuallyhidden@handheld`}
              style={{ verticalAlign: "middle" }}
            >
              US
            </p>
          </a>
        </Link>
        {links.map(({ path, icon, title }, key) => (
          <Link prefetch href={path} key={key}>
            <a
              className={
                `
                ${linkClasses}
                ${!active && "visuallyhidden@handheld"}
                text-center
              `
              }
              style={{ padding: active ? "9px 0 9px 15px" : "" }}
            >
              <span className={`${iconClasses} ${icon}`} />
              <p className={textClasses}>
                {title}
              </p>
            </a>
          </Link>
        ))}
        <button
          onClick={this.onNavToggle}
          className={
            `
            visuallyhidden@lap-and-up locked-right locked-top
          `
          }
        >
          <span
            className={
              `
              ${active ? "la-cross-circle" : "la-menu"}
              la soft-half h2 display-block
            `
            }
          />
        </button>
      </div>
    );
  }
}
