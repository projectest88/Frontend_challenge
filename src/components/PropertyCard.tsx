import { FaRegBookmark, FaClock } from "react-icons/fa";

interface Property {
  id: number;
  name: string;
  location: string;
  type: string;
  size: string;
  price: string;
  status: string;
  duration: string;
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="bg-white p-4 rounded-lg max-h-[200px] shadow-md relative">
      <div className="flex items-center justify-between">
        <img
          src="/path-to-property-image.jpg"
          alt={property.name}
          className="w-12 h-12 object-cover rounded-lg"
        />
        <div className="flex-1 ml-3">
          <h3 className="font-bold text-sm">{property.name}</h3>
          <p className="text-xs flex items-center gap-1 text-gray-600">
            {property.location} <span className="text-blue-500">✔</span>
          </p>
        </div>
        <button className="text-gray-500">
          <FaRegBookmark className="text-lg" />
        </button>
      </div>
      <div className="flex flex-wrap gap-1 mt-2">
        {property.type.split(",").map((category, index) => (
          <span
            key={index}
            className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-md"
          >
            {category.trim()}
          </span>
        ))}
        <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-md">
          {property.price}
        </span>
      </div>
      <div className="flex items-center justify-between mt-2">
        <p className="text-xs bg-gray-100 px-2 py-1 rounded">
          {property.size}
        </p>
        <div className="flex items-center gap-1 text-gray-600 text-xs">
          <FaClock className="text-sm" /> {property.duration}
        </div>
      </div>
      <button className="mt-3 w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 rounded-lg">
        Book
      </button>
    </div>
  );
}