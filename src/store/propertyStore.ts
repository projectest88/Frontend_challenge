import { create } from 'zustand';
import { fetchProperties } from '@/utils/api';

type Property = {
  id: number;
  name: string;
  location: string;
  type: string;
  size: string;
  price: string;
  status: string;
  duration: string;
};

type PropertyStore = {
  properties: Property[];
  page: number;
  filters: {
    status: string[];
    location: string[];
    type: string[];
    priceRange: [number, number];
  };
  setProperties: (properties: Property[]) => void;
  setPage: (page: number) => void;
  setFilters: (filters: Partial<PropertyStore['filters']>) => void;
  fetchProperties: () => Promise<void>;
};

export const usePropertyStore = create<PropertyStore>((set, get) => ({
  properties: [],
  page: 1,
  filters: {
    status: [],
    location: [],
    type: [],
    priceRange: [4000000, 8000000],
  },
  setProperties: (properties) => set({ properties }),
  setPage: (page) => set({ page }),
  setFilters: (filters) => set({ filters: { ...get().filters, ...filters } }),
  fetchProperties: async () => {
    const { page, filters } = get();
    try {
      const data = await fetchProperties({
        page,
        status: filters.status.join(','),
        location: filters.location.join(','),
        type: filters.type.join(','),
        minPrice: filters.priceRange[0],
        maxPrice: filters.priceRange[1],
      });
      set({ properties: [...get().properties, ...data] });
    } catch (error) {
      console.error('Failed to fetch properties:', error);
    }
  },
}));