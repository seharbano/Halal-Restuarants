import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import RestaurantCard from "../components/RestaurantCard";
import Tabs from "../components/Tabs";
import useRestaurants from "../hooks/useRestaurants";
import { isOpenNow } from "../utilis/timeUtils";
import { DEFAULT_RESTAURANT_IMAGE } from "../constants/images";

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { restaurants, loading, error } = useRestaurants();

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4">{error}</p>;

  const filteredRestaurants = restaurants.filter((item) => {
    if (activeTab === "All") return true;
    if (activeTab === "Open Now") return isOpenNow(item.hours);
    if (!item.cuisine) return false;

    return item.cuisine.toLowerCase().includes(activeTab.toLowerCase());
  });

  return (
    <div className="h-screen w-full grid grid-cols-1 lg:grid-cols-[260px_320px_1fr] overflow-hidden">

      {/* 🔥 SIDEBAR (desktop) */}
      <div className="hidden lg:block bg-green-50">
        <Sidebar />
      </div>

      {/* 🔥 MOBILE DRAWER */}
      {drawerOpen && (
        <>
          {/* overlay */}
          <div
            onClick={() => setDrawerOpen(false)}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          />

          <div className="fixed left-0 top-0 h-full w-64 bg-green-50 z-50 lg:hidden">
            <div className="p-2 text-right">
              <button onClick={() => setDrawerOpen(false)}>✖</button>
            </div>
            <Sidebar />
          </div>
        </>
      )}

      {/* 🔥 CARDS */}
      <div className="bg-green-50 p-4 overflow-y-auto">
        
        {/* burger button */}
        <div className="lg:hidden mb-3">
          <button
            onClick={() => setDrawerOpen(true)}
            className="text-2xl"
          >
            ☰
          </button>
        </div>

        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="space-y-4 mt-4">
          {filteredRestaurants.map((item) => (
            <RestaurantCard
              key={item.id}
              image={item.image || DEFAULT_RESTAURANT_IMAGE}
              title={item.name}
              cuisine={item.cuisine}
              distance={item.city}
              rating={4.2}
              tags={[item.cuisine, item.city]}
              isVerified={item.halalStatus === "yes"}
              onClick={() => {
                const url = [item.website, item.phone].find(
                  (v) => typeof v === "string" && v.startsWith("http"),
                );

                if (url) window.open(url, "_blank");
                else navigate(`/restaurant/${item.id}`);
              }}
            />
          ))}
        </div>
      </div>

      {/* 🔥 MAP (ALWAYS VISIBLE FIXED) */}
      <div className="hidden lg:block h-full w-full">
        <Map showOverlay={true} />
      </div>

    </div>
  );
};

export default Home;