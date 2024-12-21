"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Movies = ({ movie }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/movie/${movie.id}`)}
      className="flex min-w-[450px] relative  imgContainer cursor-pointer"
    >
      <Image
        alt="film afişleri"
        width={450}
        height={300}
        style={{ objectFit: "cover" }}
        src={`https://image.tmdb.org/t/p/original${
          movie?.backdrop_path || movie?.poster_path
        }`}
      />
      <div className="absolute top-0 p-2 w-full h-full opacity-0 hover:opacity-100 transition-opacity">
        <div className="text-2xl font-bold">{movie?.title}</div>
        <div>
          {movie?.release_date} - {movie?.vote_average}
        </div>
      </div>
    </div>
  );
};

export default Movies;
