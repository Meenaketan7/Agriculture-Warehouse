import { create, SetState } from "zustand";
import { devtools, persist } from "zustand/middleware";

type Vegetable = {
  id?: number;
  stock?: boolean;
  name?: string;
};

type VegetableStoreState = {
  vegetables: Vegetable[];
  addVegetable: (vegetable: Vegetable) => void;
  removeVegetable: (vegetableId: number) => void;
  toggleVegetableStatus: (vegetableId: number) => void;
};

const vegetableStore = (set: SetState<VegetableStoreState>) => ({
  vegetables: [],
  addVegetable: (vegetable: Vegetable) => {
    set((state) => ({
      vegetables: [vegetable, ...state.vegetables],
    }));
  },
  removeVegetable: (vegetableId: number) => {
    set((state) => ({
      vegetables: state.vegetables.filter((vegetable) => vegetable.id !== vegetableId),
    }));
  },
  toggleVegetableStatus: (vegetableId: number) => {
    set((state) => ({
      vegetables: state.vegetables.map((vegetable) =>
        vegetable.id === vegetableId ? { ...vegetable, stock: !vegetable.stock } : vegetable
      ),
    }));
  },
});

const useVegetableStore = create<VegetableStoreState>(
  devtools(
    persist<VegetableStoreState>(vegetableStore, {
      name: "vegetables",
    })
  ) as any
);

export default useVegetableStore;