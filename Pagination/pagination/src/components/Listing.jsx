import { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import ReactPaginate from 'react-paginate'
// import Drawer2 from './drawer/Drawer2'
import Drawer from './Drawer'


const Listing = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [listLength, setListLength] = useState(0);

  const itemsPerPage = 20;

  const pageCount = Math.ceil(listLength / itemsPerPage);

  useEffect(() => {
    const fetchList = async () => {
      const { data } = await axios.get(`https://api.fbi.gov/wanted/v1/list?page=${page}`);


      setList(data.items);
      setListLength(data.total);
      setLoading(false);
    };
    fetchList();
  }, [page])

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    // window.scroll(0, 0);
    console.log(event.selected);
    setPage(event.selected + 1);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <Drawer />
      {loading ? <Spinner loading={loading} /> : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 w-[60%] gap-x-[3rem] gap-y-[0.5rem] ">
          {list.map((criminal) => (
            <div
              className="w-full grid grid-rows-subgrid row-span-2 shadow-lg my-10 rounded-xl overflow-hidden text-center font-serif text-blue-950 font-bold"
              key={criminal.uid}
            >
              <div className="w-full">
                <img
                  src={
                    criminal.images[0]?.original || "/fallback-image.png"
                  }
                  alt={criminal.title}
                  className="size-full max-h-[20rem]"
                />
              </div>
              <h3>{criminal.title}</h3>
            </div>
          ))}
        </div>
      )}
      <div className='flex w-full justify-center'>
        <ReactPaginate
          breakLabel='...'
          nextLabel="next >"
          nextLinkClassName=" px-3 py-2 rounded-lg hover:bg-blue-400 hover:text-white"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          previousLinkClassName='px-3 py-2 rounded-lg hover:bg-blue-400 hover:text-white'
          renderOnZeroPageCount={null}
          containerClassName='flex space-x-5'
          pageLinkClassName='hover:bg-blue-400 hover:text-white px-3 py-2 rounded-lg'
          activeLinkClassName='bg-blue-400 px-3 py-2 rounded-lg text-white'
          disabledLinkClassName={'hover:cursor-not-allowed hover:bg-white hover:text-black'}
        />
      </div>
    </div>
  )
}

export default Listing