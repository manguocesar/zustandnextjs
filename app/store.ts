import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  incrementAsync: () => Promise<void>;
  decrement: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
    count: 0,
    increment: () => {
        set((state) => ({ count: state.count + 1 }));
    },
    incrementAsync: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        set((state) => ({ count: state.count + 1 }));
    },
    decrement: () => {
        set((state) => ({ count: state.count - 1 }));
    },
}));

type TextStore = {
    text: string;
    add: (string:string) => void;
};

export const useTextStore = create<TextStore>((set) => ({
  text: 'Base',
  add: (text) => {
    set((state) => ({ text: text }));
  }
}));