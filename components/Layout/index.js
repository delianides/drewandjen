import React, { Component } from "react";
import ReactGA from "react-ga";
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
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-93911137-1', 'auto');
            ga('send', 'pageview');`,
            }}
          />
        </Head>
        <Headroom
          style={{ borderBottom: "1px solid #DDDDDD", background: "white" }}
        >
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <Nav />
          </div>
        </Headroom>
        <div style={{ maxWidth: 1440, padding: 0, margin: "0 auto" }}>
          {children}
        </div>
        <div
          className="background--dark-primary soft text-center push-double-top"
        >
          <p className="small flush text-light">
            Drew and Jen | May 13, 2017
          </p>
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
