import styles from "./page.module.css";
import Movie from "./Movie";

export default async function Home() {
  //This is how we fetch data in next 13!
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();

  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {data.results.map((movie) => {
          const { id, title, poster_path, release_date } = movie;

          return (
            <Movie
              key={id}
              id={id}
              title={title}
              posterPath={poster_path}
              releaseDate={release_date}
            />
          );
        })}
      </div>
    </main>
  );
}

// ("https://api.themoviedb.org/3/movie/popular");
//next 12
//getServerSideProps
