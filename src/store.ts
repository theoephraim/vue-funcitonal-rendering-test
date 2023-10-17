import { defineStore } from 'pinia';
import { computed } from 'vue';
import { ApiRequest } from './pinia-api-tools';

export const useExampleStore = defineStore('example', {
  state: () => ({
    counter: 0,
  }),
  actions: {
    async EXAMPLE_REQ() {
      return new ApiRequest({
        url: 'todos',
        _delay: 500,
      });
    },


    activate() {
      setInterval(() => {
        this.counter++;
      }, 1000);
    },
    getCounterIsEven() {
      return computed(() => {
        return {
          isEven: this.counter % 2 === 0,
        };
      });
    }
  },
});
