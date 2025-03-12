export default function SortBy({ sortBy, setSortBy }) {
    return (
      <div className="flex justify-between items-center ">
        <div className="w-1/4"></div>
        <div className="flex items-center gap-2 w-3/4 mr-5 bg-white py-2 px-4 rounded">
          <span className="text-sm ml-auto mr-0">Sort By:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 border rounded-md"
          >
            <option>Most Relevant</option>
            <option>Lowest Price</option>
            <option>Highest Price</option>
            <option>Newest</option>
          </select>
        </div>
      </div>
    );
  }