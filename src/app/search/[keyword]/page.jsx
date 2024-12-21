import React from "react";
import Movies from "@/components/Movies";
const Page = async ({ params }) => {
  const keyword = params.keyword;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk4MTQxMTcyNGM0NDM1ODA4YzNiYzI0MmExNzk2NSIsIm5iZiI6MTczMjMwNTQzNi43ODgzMDksInN1YiI6IjY2ZDg0ZDlmYjUyNzMzNmQ3ZjZjZTdlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PFtseCGI3QwgZIpxPo4ztCYSZb7KamZCfyB-_2HZYUc",
    },
  };
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=tr-TR&page=1`,
    options
  );
  const data = await res.json();
  console.log(data);
  if (data.results.length < 1)
    return (
      <div className="px-5">
        <p className="dark:text-white bg-gray-100 dark:bg-gray-700 w-full py-2 mx-auto text-center text-lg">
          {" "}
          Arandığınız şey bulunamadı
        </p>
      </div>
    );
  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {data.results?.map((movie) => (
        <Movies movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Page;
