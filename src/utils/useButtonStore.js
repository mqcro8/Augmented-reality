import { create } from 'zustand'

export const useButtonStore1 = create((set) => ({
  button1Clicked: false,
  setButton1Clicked: (value) => set({ button1Clicked: value }),
}));

export const useButtonStore2 = create((set) => ({
  button2Clicked: false,
  setButton2Clicked: (value) => set({ button2Clicked: value }),
}));