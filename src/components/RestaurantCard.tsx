import { DEFAULT_RESTAURANT_IMAGE } from "../constants/images";
type Props = {
  image: string;
  title: string;
  cuisine: string;
  distance: string;
  rating: number;
  tags?: string[];
  isVerified?: boolean;
  onClick: () => void;
};

export default function RestaurantCard({
  image,
  title,
  cuisine,
  distance,
  rating,
  tags = [],
  isVerified = false,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition cursor-pointer overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={image || DEFAULT_RESTAURANT_IMAGE}
          alt={title}
          className="h-40 w-full object-cover"
        />

        {isVerified && (
          <span className="absolute top-2 right-2 bg-green-700 text-white text-xs px-2 py-1 rounded-full">
            VERIFIED HALAL
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title + Rating */}
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg">{title}</h3>

          <span className="bg-green-100 text-green-700 text-sm px-2 py-1 rounded">
            ⭐ {rating}
          </span>
        </div>

        {/* Cuisine + distance */}
        <p className="text-sm text-gray-500 mt-1">
          {cuisine} • {distance}
        </p>

        {/* Tags */}
        <div className="flex gap-2 mt-3 flex-wrap">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
