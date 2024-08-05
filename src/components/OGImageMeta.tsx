import React from "react";
import { Helmet } from "react-helmet";
import { OGData } from "../types/OGData";

type OGImage = OGData;

const OGImageMeta: React.FC<OGImage> = ({ title, content, image }) => {
  return (
    <Helmet>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={content} />
      {image && <meta property="og:image" content={image as string} />}
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default OGImageMeta;
