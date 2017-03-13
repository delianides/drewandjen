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

const textClasses = ["flush", "small", "soft-half-top@lap-and-up"].join(" ");

const links = [{ path: "/rsvp", icon: "icon fa fa-reply", title: "RSVP" }];

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
          soft-half-ends@handheld soft-ends@lap-and-up soft-sides@lap-and-up
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
            <ReactSVG
              path="/static/logos/drewandjen_small.svg"
              className="icon flush-bottom display-inline-block"
              style={{
                verticalAlign: "middle",
              }}
            />
            <p
              className={
                `${textClasses} logo-text flush hard visuallyhidden@handheld`
              }
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
              style={{ padding: active ? "6px 0 6px 15px" : "" }}
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
              ${active ? "fa-times-circle" : "fa-bars"}
              fa soft-half h2 flush-bottom display-block
            `
            }
          />
        </button>
      </div>
    );
  }
}
