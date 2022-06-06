import { defineStore } from 'pinia';

type LayerType = 'dashedCircles';

interface Layer {
  id: number;
  name: string;
  type: LayerType;
}

export const useStore = defineStore('main', {
  state: () => {
    return {
      presets: {
        dashedCircles: [
          {
            name: 'one cirle',
            count: {
              type: 'integer',
              value: 1,
            },
            radius: {
              type: 'float range',
              value: 50,
              min: 0,
              max: 150,
            },
          },
        ],
      } as Record<LayerType, object>,
      layers: [
        {
          id: Number(new Date()),
          name: 'first layer',
          type: 'dashedCircles',
        },
      ] as Layer[],
    };
  },
});
