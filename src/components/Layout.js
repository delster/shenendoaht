import React from "react";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import "./all.sass";

const TemplateWrapper = ({ children }) => (
  <div className="layout-wrapper">
    <Helmet>
      <title>Shenendoah Thompson</title>
      <meta name="description" content="Shenendoah Thompson does music and stuff. If you see this, let him know to update his site description." />
      <link rel="canonical" href="https://shenendoaht.netlify.com" />
    </Helmet>
    <Navbar />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
