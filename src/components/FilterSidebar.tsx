import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function FilterSidebar({ filters, setFilters }) {
  return (
    <aside className="w-[21%] bg-white p-4 relative overflow-y-scroll top-[-100px] rounded-lg shadow-md self-start">
      <h2 className="font-bold text-lg mb-4">FILTER BY</h2>
      <div className="mb-4">
        <h3 className="font-semibold">Status</h3>
        <label className="block">
          <input type="checkbox" /> New
        </label>
        <label className="block">
          <input type="checkbox" /> Second
        </label>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Location</h3>
        <label className="block">
          <input type="checkbox" /> Bekasi
        </label>
        <label className="block">
          <input type="checkbox" /> Jakarta
        </label>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Type</h3>
        <label className="block">
          <input type="checkbox" /> Rumah
        </label>
        <label className="block">
          <input type="checkbox" /> Apartemen
        </label>
        <label className="block">
          <input type="checkbox" /> Ruko
        </label>
        <label className="block">
          <input type="checkbox" /> Hotel
        </label>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Price Range</h3>
        <p>Rp. {filters.priceRange[0].toLocaleString()} - Rp. {filters.priceRange[1].toLocaleString()}</p>
        <Slider
          range
          min={1000000}
          max={10000000}
          step={500000}
          value={filters.priceRange}
          onChange={(value) => setFilters({ ...filters, priceRange: value })}
          trackStyle={[{ backgroundColor: 'red' }]}
          handleStyle={[{ backgroundColor: 'blue' }, { backgroundColor: 'red' }]}
        />
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded w-full">
        Apply
      </button>
    </aside>
  );
}
