<template>
  <div class="columns">
    <div v-for="edge in products" :key="edge.id" class="column is-3 p-t-0">
      <product-item :product="edge.node" />
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";

export default {
  props: {
    products: {
      required: true,
      type: Array,
    },
  },

  components: { ProductItem },
};
</script>