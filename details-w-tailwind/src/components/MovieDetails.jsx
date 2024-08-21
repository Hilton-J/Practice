import Header from "./Header";

const MovieDetails = () => {
  return (
    <section className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <main className="container mx-auto mt-6 flex flex-col items-center p-4">
        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6">AVENGERS ENDGAME</h2>

        {/* Movie Details Section */}
        <div className="flex flex-col md:flex-row md:space-x-6 bg-white shadow-lg rounded-lg overflow-hidden w-full">
          {/* Poster Image */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <img
              src="https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg"
              alt="Avengers Endgame"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Avengers Endgame</h3>
              <p className="text-gray-700 mb-4">
                After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos.
                With the help of remaining allies, the Avengers must assemble once more to undo Thanos&apos; actions and restore order to the universe
                once and for all, no matter what consequences may be in store.
              </p>
              <ul className="text-gray-700 space-y-1">
                <li><strong>Country:</strong> USA</li>
                <li><strong>Genre:</strong> Action, Adventure, Science Fiction</li>
                <li><strong>Year:</strong> 2019</li>
                <li><strong>Type:</strong> Movie</li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg border-transparent   hover:bg-blue-400">EDIT</button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-400">DELETE</button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-white shadow-md mt-12">
        <div className="container mx-auto p-4 text-center text-gray-600">
          <nav className="space-x-4">
            <a href="#" className="hover:text-blue-600">MOVIES</a>
            <a href="#" className="hover:text-blue-600">SERIES</a>
            <a href="#" className="hover:text-blue-600">SUBSCRIBE</a>
          </nav>
        </div>
      </footer>
    </section>
  );
};

export default MovieDetails;
