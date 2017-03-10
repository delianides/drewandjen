import React, { Component } from "react";
import Head from "next/head";
import Headroom from "react-headroom";
import slugToTitle from "slug-to-title";

import Nav from "./Nav";

const parsePathName = pathname => {
  if (!pathname) return false;
  const segments = pathname.split("/");
  return slugToTitle(segments.pop());
};

export default class Layout extends Component {
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
          <title>{title || parsePathName(url.pathname) || "DREW♥JEN"}</title>
          <link
            rel="shortcut icon"
            href={`${STATIC}/favicon.ico`}
            sizes="16x16"
          />
          <meta
            name="description"
            content={description || "Drew and Jen | May 13, 2017"}
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link href="/static/style.css" rel="stylesheet" />
        </Head>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <Nav />
        </div>
      </div>
    );
  }
}
