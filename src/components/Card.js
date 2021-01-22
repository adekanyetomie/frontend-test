import React from "react";
import { Image } from "antd";

export default function Card(props) {
  const { img, title, alt, date } = props;
  return (
    <article className="strip-card">
      <h3> {title}</h3>
      <Image
        src={img}
        alt={alt}
        className="strip-image"
        loading="lazy"
        width={"20rem"}
        height={"15rem"}
      />

      <div className="description-card">
        <div className="card-footer">
          <p>Date: {date}</p>
        </div>
      </div>
    </article>
  );
}
