'use client';

import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { usePropertyStore } from '@/store/propertyStore';

const ListProperty = () => {
  const { properties, page, filters, setPage, setFilters, fetchProperties } = usePropertyStore();

  useEffect(() => {
    fetchProperties();
  }, [page, filters]);

  const handleFilterChange = (filterType: string, value: string | number) => {
    setFilters({ [filterType]: value });
  };

  const loadMoreProperties = () => {
    setPage(page + 1);
  };

  return (
    <div className="p-4">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">LOGO</h1>
        <div className="flex space-x-4">
          <button className="text-gray-700">Search</button>
          <button className="text-gray-700">History</button>
          <button className="text-gray-700">Profile</button>
        </div>
      </div>


      <div className="flex space-x-4 mb-6">
        <select
          onChange={(e) => handleFilterChange('status', e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Status</option>
          <option value="For Sale">For Sale</option>
          <option value="For Rent">For Rent</option>
        </select>
        <select
          onChange={(e) => handleFilterChange('locationType', e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Location Type</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Villa">Villa</option>
        </select>
        <input
          type="number"
          placeholder="Min Price"
          onChange={(e) => handleFilterChange('priceRange', { ...filters.priceRange, min: +e.target.value })}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Max Price"
          onChange={(e) => handleFilterChange('priceRange', { ...filters.priceRange, max: +e.target.value })}
          className="p-2 border rounded"
        />
        <button
          onClick={() => fetchProperties()}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Apply
        </button>
      </div>

    
      <InfiniteScroll
        dataLength={properties.length}
        next={loadMoreProperties}
        hasMore={true} 
        loader={<h4>Loading...</h4>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((property) => (
            <div key={property.id} className="border p-4 rounded-lg">
              <img src={property.image} alt={property.name} className="w-full h-48 object-cover rounded" />
              <h2 className="text-xl font-bold mt-2">{property.name}</h2>
              <p className="text-gray-700">{property.location}</p>
              <p className="text-gray-700">{property.status}</p>
              <p className="text-gray-700">Rp {property.price.toLocaleString()}</p>
              <button className="mt-2 p-2 bg-green-500 text-white rounded">
                Book
              </button>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ListProperty;