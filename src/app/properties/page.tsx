"use client";
import FilterSidebar from "@/components/FilterSidebar";
import Header from "@/components/Header";
import PropertyCard from "@/components/PropertyCard";
import SortBy from "@/components/Sortby";
import { useState } from "react";


export default function PropertyListing() {
  const [filters, setFilters] = useState({
    status: "",
    location: "",
    type: "",
    priceRange: [4000000, 8000000],
  });
  const [sortBy, setSortBy] = useState("Most Relevant");
  
  const properties = [
    { id: 1, name: "Darmawangsa Residence", location: "Bekasi", type: "Rumah,new", size: "LT 105 m² LB 78 m²", price: "IDR 5M", status: "New", duration: "3d" },
    { id: 2, name: "Gading Terace Pesona", location: "Bekasi", type: "Rumah", size: "LT 115 m² LB 87 m²", price: "IDR 5M", status: "New", duration: "3d" },
    { id: 3, name: "Modern Hill Jakarta", location: "Bekasi", type: "Rumah", size: "LT 95 m² LB 75 m²", price: "IDR 5M", status: "New", duration: "6w" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex p-6 gap-5">
        <FilterSidebar filters={filters} setFilters={setFilters} />
        <main className="w-3/4 grid grid-cols-3 gap-4">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </main>
      </div>
    </div>
  );
}
