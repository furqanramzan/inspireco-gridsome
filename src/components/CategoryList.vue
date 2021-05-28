<template>
  <div class="categories">
    <div class="columns is-multiline">
      <div v-for="{ node } in categories" :key="node.id" class="column is-6">
        <category-item
          :category="node"
          @updateSelected="() => updateSelected(node.id)"
          :active="value === node.id"
        />
      </div>
    </div>
    <div class="full-float m-t-10"></div>
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
    value: {
      required: true,
      type: String,
    },
  },

  components: { CategoryItem },

  methods: {
    updateSelected(id) {
      this.$emit("input", id);
    },
  },
};
</script>

<style lang="scss">
.categories {
  width: inherit;
  position: fixed;
  top: $top-margin;
  bottom: 0;
  padding: 0px 10px 30px 10px;
  overflow-y: scroll;
  height: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>