<template>
  <div class="categories">
    <div class="inner-scroll">
      <div class="columns is-multiline">
        <div
          v-for="(edge, index) in categories"
          :key="edge.id"
          class="column is-6"
        >
          <category-item
            :category="edge.node"
            @updateSelected="() => updateSelected(index)"
            :active="selected === index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryItem from "@/components/CategoryItem.vue";

export default {
  props: {
    categories: {
      required: true,
      type: Array,
    },
  },

  components: { CategoryItem },

  data() {
    return {
      selected: 0,
    };
  },

  methods: {
    updateSelected(index) {
      this.selected = index;
    },
  },
};
</script>

<style lang="scss">
.categories {
  width: inherit;
  position: fixed;
  padding: 10px 10px 30px 10px;
  .inner-scroll {
    height: 100vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>