import SortBy from "./Sortby";
import Navbar from "./Navbar";

export default function Header({ sortBy, setSortBy }) {
  return (
    <header className="pb-5 bg-custom-gradient">
     <Navbar variant="properties" sortBy={sortBy} setSortBy={setSortBy} />
      <SortBy sortBy={sortBy} setSortBy={setSortBy} />
    </header>
  );
}
