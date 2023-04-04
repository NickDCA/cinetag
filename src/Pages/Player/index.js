import Banner from "components/Banner";
import styles from "./Player.module.css";
import videos from "json/db.json";

import React from "react";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import NaoEncontrada from "Pages/NaoEncontrada";

export default function Player() {
  const parametros = useParams();
  const video = videos.find((video) => {
    return video.id === Number(parametros.id);
  });
  if (!video) {
    return <NaoEncontrada />;
  }
  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}
