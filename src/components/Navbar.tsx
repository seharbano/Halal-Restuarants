export default function Navbar() {
  return (
    <div className="flex justify-between items-center flex-wrap gap-y-4 bg-white px-6 py-3 shadow">
      <div className="flex gap-x-12 gap-y-4 flex-wrap">
        <h1 className="text-xl text-nowrap font-bold text-green-700">Verdant Halal</h1>
        <ul className="space-x-4 flex">
          <li className="border-b-2 border-b-green-200 p-2  cursor-pointer">Discover</li>
          <li className="hover:border-b-2 border-b-green-200 p-2  cursor-pointer">
            Favourite
          </li>
          <li className="p-2 hover:border-b-2 border-b-green-200  cursor-pointer">
            Recent
          </li>
        </ul>
      </div>
      <div className="relative">
      <input
        type="text"
        placeholder="Search Helsinki..."
        className="border bg-white px-3 py-1 relative rounded-full focus:border-green-300 w-64"
      />
      <svg className="absolute right-2 top-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/>
      </svg>
</div>
      <button className="bg-green-700 text-white px-4 py-2 rounded">
        Near Me
      </button>
    </div>
  );
}
