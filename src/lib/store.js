// store.js
import { create } from "zustand";

const useQuery = create((set) => ({
  search: "",
  resultCount: null,
  setSearch: (search) => set({ search }),
  setResultCount: (resultCount) => set({ resultCount }),
}));

export default useQuery;
