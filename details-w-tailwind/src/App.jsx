// import CustomSelect from './components/CustomSelect'
// import MovieDetails from './components/MovieDetails'

// function App() {

//   return (
//     <>
//       <MovieDetails />
//       <CustomSelect />
//     </>
//   )
// };

// export default App


import SearchComponent from './components/CustomSelect';

const App = () => {
  const items = [
    "Breaking Bad",
    "Bad Monkey",
    "Star Wars: The Bad Batch",
    "Sayed Badreya",
    "Michael Badalucco",
    "John Badham",
    // Add more items here
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Search for Items</h1>
      <SearchComponent items={items} />
    </div>
  );
};

export default App;
