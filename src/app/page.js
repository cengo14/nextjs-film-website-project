import Movies from '@/components/Movies';
import React from 'react'

const Page = async ({ searchParams }) => {
    // Direkt olarak searchParams.genre değerini alabilirsiniz, await kullanmaya gerek yok
    const genre = searchParams.genre;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njk4MTQxMTcyNGM0NDM1ODA4YzNiYzI0MmExNzk2NSIsIm5iZiI6MTczMjMwNTQzNi43ODgzMDksInN1YiI6IjY2ZDg0ZDlmYjUyNzMzNmQ3ZjZjZTdlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PFtseCGI3QwgZIpxPo4ztCYSZb7KamZCfyB-_2HZYUc'
        }
    };

    const res = await fetch(
        `https://api.themoviedb.org/3/${genre ? "movie/" + genre : "trending/all/day"}?language=en-US&page=1`,
        options
    );
    const data = await res.json();


    return (
        <div className='flex items-center justify-center flex-wrap gap-3'>
            {data.results?.map((movie) => (
                <Movies movie={movie} key={movie.id} />
            ))}
        </div>
    )
}

export default Page;
