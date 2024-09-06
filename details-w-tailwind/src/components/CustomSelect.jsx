import { useState } from 'react';
import PropTypes from 'prop-types'

const CustomSelect = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = (event) => {
    const searchText = event.target.value;
    setSearchTerm(searchText);

    // Filter items based on the search text
    const results = items.filter(item =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredItems(results);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {searchTerm && (
        <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto z-10">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer">
                {item}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

CustomSelect.propTypes = {
  items: PropTypes.object
};
export default CustomSelect;
