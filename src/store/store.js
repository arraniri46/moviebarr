import { create } from "zustand";

export const useSearchStore = create((set) => ({
  queryString: "avenger",
  isSearch: false,
  setIsSearch: () => set({ isSearch: true }),
  setQueryString: (query) => set({ queryString: query }),
}));

export const useDetailStore = create((set) => ({
  idMovie: null,
  idCredits: null,
  isOpen: false,
  setIdMovie: (id) => set({ idMovie: id }),
  setIdCredits: (id) => set({ idCredits: id }),
  setIsOpen: (active) => set({ isOpen: active }),
}));
