import { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from './Spinner'


const Listing = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchList = async () => {
      const { data } = await axios.get('https://api.fbi.gov/wanted/v1/list');
      setList(data.items);
      setLoading(false);
    };
    fetchList();
  }, [])

  return (
    <div className="flex justify-center">
      {loading ? <Spinner /> : (
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
                  className="size-full"
                />
              </div>
              <h3>{criminal.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Listing