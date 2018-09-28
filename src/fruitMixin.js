export const fruitMixin = {
  data() {
    return {
      text: 'hello world',
      fruits: ['apple', 'bannana', 'manga', 'melon'],
      filterText: ''
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(el => el.match(this.filterText));
    }
  }
};
