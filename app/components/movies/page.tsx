"use client";
import React from "react";
import useSWR from "swr";
import Image from "next/image";
import { useLanguage } from "../LangaugeContext";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

interface Movie {
  title: string;
  poster: string;
  _id: string;
  year: number;
  countries: string;
}

const Movies = () => {
  const isEnglish = useLanguage();
  const { data, error, isLoading } = useSWR("api/movies", fetcher);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading</div>;

  const results = data.map(
    (movie: Movie) =>
      movie.title === "Civilization" ||
      movie.title.length > 40 ||
      (movie.poster && (
        <div className="flex bg-cyan-500 w-96 h-96 relative" key={movie._id}>
          <div className="bg-stone-600 bg-opacity-80 z-10 h-<100px> w-<100%> self-end flex-1 p-4 text-white">
            <p className="opacity-100">{movie.title}</p>
            <p>{`released:${movie.year}, ${movie.countries} `}</p>
          </div>
          <Image
            src={movie.poster}
            alt={movie.title}
            fill
            sizes="(max-width-80px)"
            loading="lazy"
            style={{ objectFit: "cover", zIndex: 0 }}
          />
        </div>
      ))
  );
  return (
    <div className=" flex flex-col items-center gap-5 bg-[#ece3ca] min-h-[80vh] py-10">
      <h2 className="md:mb-10">{isEnglish? "List of my favourites movies" : "Une liste de mes films préférés"}</h2>
      <div className="flex flex-wrap gap-3 justify-center">{results}</div>
    </div>
  );
};

export default Movies;
