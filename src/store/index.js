import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => {
    return {
      layers: [
        {
          id: new Date(),
          name: "first layer",
          type: "none",
        },
      ],
    };
  },
});
