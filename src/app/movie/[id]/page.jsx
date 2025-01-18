import Image from "next/image";
import React from "react";

// TMDB API'den film detaylarını çeken fonksiyon
const getMovie = async (id) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.SECRET_API_KEY}`,
    },
  };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/3/movie/${id}?language=tr-TR`,
    options
  );

  if (!res.ok) {
    throw new Error("Film bilgisi alınamadı.");
  }

  return await res.json();
};

const Page = async ({ params }) => {
  try {
    // params.id'ye asenkron erişim
    const id = params.id;

    // API'den film detaylarını al
    const movieDetail = await getMovie(id);

    // Konsola yazdır
    console.log(movieDetail);

    return (
      <div className="relative p-7 min-h-screen">
        <Image
          style={{ objectFit: "cover" }}
          fill
          src={`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/t/p/original${
            movieDetail?.backdrop_path || movieDetail?.poster_path
          }`}
        />
        <div className="absolute">
          <h1 className="text-4xl font-bold my-3">{movieDetail?.title}</h1>
          <p className="w-1/2 my-3 p-5 rounded-lg border backdrop-blur-sm">
            {movieDetail?.overview}
          </p>
          <div className="my-3 flex flex-col border p-3 rounded-lg backdrop-blur-sm w-fit">
            <p className="text-gray-900 font-semibold">
              Yayınlanma Tarihi:
              <span className="font-bold text-gray-400">
                {" "}
                {movieDetail?.release_date}
              </span>
            </p>
            <p className="text-gray-900 font-semibold">
              Puanlama:
              <span className="font-bold text-gray-400">
                {" "}
                {movieDetail?.vote_average.toString().slice(0, 3)}
              </span>
            </p>
          </div>
          <button className="border w-24 px-3 py-1 rounded-md text-center text-lg cursor-pointer hover:bg-white hover:text-gray-600 transition backdrop-blur-sm">
            Trail
          </button>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Hata:", error);

    return (
      <div>
        <h1>Hata</h1>
        <p>Film detayları alınamadı.</p>
      </div>
    );
  }
};

export default Page;
