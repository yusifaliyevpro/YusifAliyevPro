// store.js
import { create } from "zustand";
type State = {
  search: string;
  resultCount: number;
};

type Action = {
  setSearch: (search: State["search"]) => void;
  setResultCount: (resultCount: State["resultCount"]) => void;
};

const useQuery = create<State & Action>((set) => ({
  search: "",
  resultCount: null,
  setSearch: (search) => set({ search }),
  setResultCount: (resultCount) => set({ resultCount }),
}));

export default useQuery;
