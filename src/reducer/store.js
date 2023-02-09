import { create } from "zustand";

export const useSearchStore = create((set) => ({
  queryString: "shawshank",
  isSearch: false,
  setIsSearch: () => set({ isSearch: true }),
  setQueryString: (query) => set({ queryString: query }),
}));
