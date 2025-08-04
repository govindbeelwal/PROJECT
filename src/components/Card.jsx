 
import { Link } from 'react-router-dom';
function Card({ movie }) {
  console.log(movie.Title, movie.imdbID);
  return (
    <>
      <div className="w-104 flex flex-col justify-center p-3 bg-emerald-100 rounded-xl">
        <img className="rounded-t-xl w-[100%]" src={movie.Poster} />
        <h1 className="text-emerald-900 font-bold text-md p-3">
          {movie.Title}
        </h1>
        <h1 className="text-emerald-900 font-bold text-md p-3">
          Release Year : {movie.Year}
        </h1>
        <Link
          to={`/movies/${movie.imdbID}`}
          className="px-6 py-2 rounded-lg bg-emerald-200 border border-emerald-900 text-emerald-900"
        >
          View Details
        </Link>
      </div>
      {/* <Demo img={movie.Poster} title={movie.Title} /> */}
    </>
  );
}
 
export default Card;
 
 