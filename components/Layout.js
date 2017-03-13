import React, { Component } from "react";
import Head from "next/head";
import Headroom from "react-headroom";
import slugToTitle from "slug-to-title";

import Nav from "./Nav";

// import "../offline";

const parsePathName = pathname => {
  if (!pathname) return false;
  const segments = pathname.split("/");
  return slugToTitle(segments.pop());
};

class Layout extends Component {
  render() {
    const {
      children,
      title,
      description,
      url = {},
    } = this.props;
    return (
      <div>
        <Head>
          <title>{title || parsePathName(url.pathname) || "Drew & Jen"}</title>
          <link
            rel="shortcut icon"
            href={`${STATIC}/favicon.ico`}
            sizes="16x16"
          />
          <meta
            name="description"
            content={description || "Drew & Jen | May 13, 2017"}
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link href="/static/style.css" rel="stylesheet" />
          <script src="https://use.fontawesome.com/c96c7a819a.js" />
        </Head>
        <Headroom
          style={{ borderBottom: "1px solid #DDDDDD", background: "white" }}
        >
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <Nav />
          </div>
        </Headroom>
        <div style={{ maxWidth: 10000, padding: 0, margin: "0 auto" }}>
          {children}
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.any,
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  url: React.PropTypes.object,
};

export default Layout;
