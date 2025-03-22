import React, { useState } from "react";
import "./Music.css";

const musics = {
  클래식: {
    title: "Polonaise in A flat major Op. 53",
    artist: "Chopin",
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b273f438d6b2fa86094d70990ab0",
    color: "#181212",
    textColor: "#ffffff",
  },
  재즈: {
    title: "Night in Tunisia",
    artist: "Jesús Molina",
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b27390ee068042e6372064a1f4c5",
    color: "#19160F",
    textColor: "#ffffff",
  },
  재즈힙합: {
    title: "Luv(sic.) Pt 3",
    artist: "Nujabes",
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b2731a1ba7785a4b91c8aee7a79c",
    color: "#FAF9E5",
    textColor: "#121212",
  },
  시티팝: {
    title: "Tokai",
    artist: "Taeko Onuki",
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b27341e51cc1cccfbea1a181b432",
    color: "#DADEE1",
    textColor: "#121212",
  },
  하우스: {
    title: "집(feat. 유미)",
    artist: "House Rulez",
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b2736dd0833b56c8d18f8701828d",
    color: "#F0F0F0",
    textColor: "#121212",
  },
  제이팝: {
    title: "Time Paradox",
    artist: "Vaundy",
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b2735855cef3bb373a81316c2820",
    color: "#FDDA00",
    textColor: "#121212",
  },
  힙합: {
    title: "돈키호테",
    artist: "피타입",
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b2731613a5d146d3f3893b961955",
    color: "#FFE62C",
    textColor: "#121212",
  },
};

const Music = () => {
  const [selectedGenre, setSelectedGenre] = useState("힙합");
  const { title, artist, albumCover, color, textColor } = musics[selectedGenre];

  return (
    <section
      className="music"
      style={{ backgroundColor: color, color: textColor }}
    >
      <h2 className="music-title">장르별 진우 Pick!</h2>

      <div className="genre-buttons">
        {Object.keys(musics).map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`genre-button ${
              selectedGenre === genre ? "active" : ""
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      <h3 className="song-title">{title}</h3>
      <p className="song-artist">{artist}</p>

      <div className="album-cover-container">
        <img
          src={albumCover}
          alt={`${title} 앨범 커버`}
          className="album-cover"
          style={{ boxShadow: `0 3px 8px ${textColor}` }}
        />
      </div>
    </section>
  );
};

export default Music;
