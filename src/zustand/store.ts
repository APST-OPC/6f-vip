import { create } from "zustand";

export interface USDTLineStore {
  usdtLine1: string;
  usdtLine2: string;
}

interface PingState {
  ping: USDTLineStore;
  setPing: (ping: USDTLineStore) => void;
  generatePing: () => void;
}

export const useGenereatePing = create<PingState>((set) => ({
  ping: {
    usdtLine1: `${Math.floor(10 + Math.random() * 90)}ms`,
    usdtLine2: `${Math.floor(10 + Math.random() * 90)}ms`,
  },
  setPing: (ping: USDTLineStore) => set({ ping }),
  generatePing: () =>
    set({
      ping: {
        usdtLine1: `${Math.floor(10 + Math.random() * 90)}ms`,
        usdtLine2: `${Math.floor(10 + Math.random() * 90)}ms`,
      },
    }),
}));
