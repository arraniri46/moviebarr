import { create } from "zustand";

export const useSearchStore = create((set) => ({
  queryString: null,
  isSearch: false,
  setIsSearch: () => set({ isSearch: true }),
  setQueryString: (query) => set({ queryString: query }),
}));

export const useDetailStore = create((set) => ({
  idMovie: 278,
  idCredits: 278,
  isOpen: false,
  setIdMovie: (id) => set({ idMovie: id }),
  setIdCredits: (id) => set({ idCredits: id }),
  setIsOpen: (active) => set({ isOpen: active }),
}));
