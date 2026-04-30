import { useParams } from "react-router-dom";
import { restaurants } from "../utilis/mock";
import Map from "../components/Map";

const ProductDetail = () => {
  const { id } = useParams();

  const restaurant = restaurants.find((item) => item.id === Number(id));

  if (!restaurant) return <p>Not found</p>;

  return (
    <div className="w-full grid grid-cols-2 overflow-y-scroll">
      <div className="col-span-1 ">
        <Map showOverlay={false} />
      </div>

      <div className="col-span-1 bg-white shadow-xl">
        <img
          src={restaurant.image}
          className="w-full h-48 object-cover relative"
        />
        <div className="px-4">
            <div className="flex gap-x-4 relative bottom-8">
          <button className="text-[9px] uppercase tracking-wider font-normal bg-fuchsia-600 text-white px-2 py-1 rounded-full">
            Verified Halah
          </button>
             <p className="text-[14px] font-normal text-gray-600 shadow-white">★ {restaurant.rating}</p>
                     <p className="text-[12px] font-normal text-gray-400 bg-white rounded-full pt-1 px-2">(124 reviews)</p>
          </div>
          <h2 className="text-2xl font-bold mt-0">{restaurant.title}</h2>

          {/* <p className="text-gray-500">{restaurant.cuisine}</p> */}

          {/* <p>⭐ {restaurant.rating}</p>
          <p>{restaurant.distance}</p>

          <div className="flex gap-2 mt-3 flex-wrap">
            {restaurant.tags.map((tag, i) => (
              <span key={i} className="bg-gray-100 px-2 py-1 rounded text-sm">
                {tag}
              </span>
            ))}
          </div> */}
          <div className="grid grid-cols-2 mt-3 gap-x-4 w-full">
          <div className="bg-gray-300 rounded-[20px] px-4 py-2">
            <p className="text-gray-500  text-[14px] text-center font-semibold">Location</p>
            <p className="text-[15px]">{restaurant.cuisine}</p>
          </div>
            <div className="bg-gray-200  rounded-[20px] px-4 py-2">
                      <p className="text-gray-500  text-[14px] text-center font-semibold">Opening Hours</p>
           <div className="grid text-[12px] grid-cols-2">
            <p className="text-gray-500    font-semibold">Mon-Thu</p>
            <p className="text-[13px]">11:00 - 21:00</p>
             <p className="text-gray-500    font-semibold">Friday</p>
            <p className="text-[13px]">11:00 - 23:00</p>
             <p className="text-gray-500    font-semibold">Sat-Sun</p>
            <p className="text-[13px]">12:00 - 22:00</p>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
