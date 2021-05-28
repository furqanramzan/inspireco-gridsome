<template>
  <vs-card
    @click="$emit('updateSelected')"
    class="category"
    :class="{ active: active }"
  >
    <template #img>
      <g-image :src="category.image.gridsome_image" />
    </template>
    <template #interactions>
      <span class="title">{{ category.name }}</span>
    </template>
  </vs-card>
</template>

<script>
export default {
  props: {
    category: {
      required: true,
      type: Object,
    },

    active: {
      required: true,
      type: Boolean,
    },
  },
};
</script>

<style lang="scss">
.category {
  img {
    height: 220px;
  }
  .title {
    color: $light;
    font-weight: 900;
    font-size: 16px;
  }
  &.active {
    .title {
      color: $primary;
    }
  }
}
</style>