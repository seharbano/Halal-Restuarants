import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import RestaurantCard from "../components/RestaurantCard";
import { restaurants } from "../utilis/mock";
import Tabs from "../components/Tabs";
const Home = () => {
  const navigate = useNavigate();
const [activeTab, setActiveTab] = useState("Turkish");

const filteredRestaurants = restaurants.filter((item) => {
  if (activeTab === "Open Now") return true;
  return item.tags.some(
    (tag) => tag.toLowerCase() === activeTab.toLowerCase()
  );
});
  return (
    <div className="flex flex-1 overflow-hidden">

      <div className="w-64 flex-shrink-0">
        <Sidebar />
      </div>

    <div className="w-[300px] bg-green-50 p-4 overflow-y-auto">

        {/* 🔥 GLOBAL TABS */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* CARDS */}
        <div className="space-y-4">
          {filteredRestaurants.map((item) => (
            <RestaurantCard
              key={item.id}
              {...item}
              onClick={() => navigate(`/restaurant/${item.id}`)}
            />
          ))}
        </div>

      </div>


      <div className="flex-1 h-full">
        <Map showOverlay={true} />
      </div>

    </div>
  );
};

export default Home;