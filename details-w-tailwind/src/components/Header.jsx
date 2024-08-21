

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl sm:text-2xl font-bold text-blue-600">Enter-Stream</h1>
        <nav className="space-x-4 hidden sm:flex">
          <a href="#" className="text-gray-600 hover:text-blue-600">MOVIES</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">SERIES</a>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hidden sm:block">SUBSCRIBE</button>
      </div>
    </header>
  )
}

export default Header