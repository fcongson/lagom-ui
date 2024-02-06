import React from "react";

export const VideoCard: React.FunctionComponent<{
  title: string;
  src: string;
}> = ({ title, src }) => {
  return (
    <>
      <h3>{title}</h3>
      <div
        style={{
          aspectRatio: "16/9",
          marginBottom: "4rem",
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src={src}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};
