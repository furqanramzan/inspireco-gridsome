<template>
  <div class="columns is-multiline">
    <product-item
      v-for="edge in products"
      :key="edge.id"
      :product="edge.node"
    />
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