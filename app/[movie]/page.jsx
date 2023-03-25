import Image from "next/image";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineShareAlt,
} from "react-icons/ai";

export async function generateStaticParams() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();

  return data.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();

  const {
    release_date,
    revenue,
    title,
    vote_average,
    genres,
    poster_path,
    overview,
  } = data;
  return (
    <div className="gap-y-4">
      <a href="/" className="text-gray-400 italic mb-10">
        Return home
      </a>
      <h1 className="text-4xl h-[60px] text-purple-600 font-bold mb-8">
        {title}
      </h1>
      <div className="flex justify-between lg:justify-start items-center gap-x-10 h-[50px]">
        <h2>Release date</h2>
        <h2 className="bg-gray-800 p-1 rounded h-[30px] text-gray-500">
          {release_date}
        </h2>
      </div>

      <div className="flex gap-x-10">
        <Image
          height={700}
          width={500}
          src={imagePath + poster_path}
          className="rounded-lg flex justify-center"
        />

        <div className="flex flex-col">
          <p className="text-gray-400 mt-10">{overview}</p>
          <div className="flex text-4xl text-gray-400 gap-x-4 mt-10">
            <AiOutlineLike className="hover:scale-105 hover:text-purple-500 duration-500" />
            <AiOutlineDislike className="hover:scale-105 hover:text-purple-500 duration-500" />
            <AiOutlineShareAlt className="hover:scale-105 hover:text-purple-500 duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
