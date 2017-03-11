import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Picture from "../components/Picture";

export default () => (
  <Layout>
    <Picture
      className="background--fill ratio--landscape"
      style={{
        backgroundImage: `url('${STATIC}/images/dj1@2x.jpg')`,
        height: "500px",
      }}
    />
  </Layout>
);
