export default function Sidebar() {
  return (
    <div className="h-full flex flex-col justify-between bg-green-50 p-4 overflow-y-auto">
      <div>
      <h2 className="text-lg font-semibold mb-6">
        Nordic Concierge
      </h2>

      <ul className="space-y-4">
        <li className="bg-green-200 p-2 rounded cursor-pointer">
          🍽 Restaurants
        </li>
        <li className="p-2 hover:bg-green-100 rounded cursor-pointer">
          🕌 Mosques
        </li>
        <li className="p-2 hover:bg-green-100 rounded cursor-pointer">
          ❤️ Favorites
        </li>
        <li className="p-2 hover:bg-green-100 rounded cursor-pointer">
          ⚙️ Settings
        </li>
      </ul>
</div>
      <button className="mt-6 w-full bg-green-700 text-white py-2 rounded">
        + Add Restaurant
      </button>
    </div>
  );
}