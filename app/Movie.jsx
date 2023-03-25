import Link from "next/link";
import React from "react";
import Image from "next/image";

const Movie = ({ title, id, releaseDate, posterPath }) => {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div className="">
      <h1 className="text-2xl h-[60px] text-purple-400 font-bold mb-4">
        {title}
      </h1>

      <Link href={`/${id}`} className="flex justify-center">
        <Image
          width={300}
          height={200}
          src={imagePath + posterPath}
          alt={title}
          className="rounded-lg hover:scale-90 duration-1000"
        />
      </Link>

      <div className="flex justify-center my-4">
        <a
          href={`/${id}`}
          className="bg-purple-700 p-2 rounded-md hover:bg-purple-900 duration-500"
        >
          Learn more
        </a>
      </div>

      <div className="flex justify-between h-[50px] mt-4">
        <h2 className="text-gray-500">Release date</h2>
        <h2 className="bg-gray-800 p-1 rounded h-[30px] text-gray-500">
          {releaseDate}
        </h2>
      </div>
    </div>
  );
};

export default Movie;
