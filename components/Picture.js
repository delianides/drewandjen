import React from "react";
import base64 from "base64util";

const hash = base64.urlEncode;

export const generateSizesFromFile = url => {
  if (url.includes("@2x")) {
    return {
      large: url,
      small: url.replace("@2x", ""),
    };
  }

  return {
    small: url,
    large: `${url.split(".", 0)}@2x.${url.split(".", 0)}`,
  };
};

// thanks Tim!
// https://timkadlec.com/2012/04/media-query-asset-downloading-results/
const picture = (small, large) => `
  @media all and (max-width: 768px) {
    .${hash(small)} {
      background-image: url(${small});
    }
  }

  @media all and (min-width: 769px) {
    .${hash(small)} {
      background-image: url(${large});
    }
  }
`;

export default ({ className, style }) => {
  let { backgroundImage } = style;
  backgroundImage = backgroundImage
    .replace("url(", "")
    .replace(")", "")
    .replace(/'/gmi, "")
    .replace(/"/gmi, "");

  const { small, large } = generateSizesFromFile(backgroundImage);
  delete style.backgroundImage;
  return (
    <div
      style={style}
      className={`${hash(small)} ${className ? className : ""}`}
    >
      <style>
        {picture(small, large)}
      </style>
    </div>
  );
};
