<template>
  <vs-card class="product">
    <template #title>
      <h3>{{ product.name }}</h3>
    </template>
    <template #img>
      <g-image :src="product.feature_image.gridsome_image" />
    </template>
    <template #text>
      <div class="prices">
        <span class="price">${{ product.price }}</span>
        <span class="discount">{{ product.price }}%</span>
      </div>
    </template>
    <template #interactions>
      <vs-button danger icon>
        <i class="mdi mdi-heart"></i>
      </vs-button>
      <vs-button primary icon>
        <i class="mdi mdi-cart"></i>
      </vs-button>
    </template>
  </vs-card>
</template>

<script>
export default {
  props: {
    product: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style lang="scss">
.product {
  .vs-card__img {
    max-height: none;
    img {
      height: 350px;
    }
  }
  .vs-card__text {
    .vs-card__title {
      h3 {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
      }
    }
    .prices {
      display: flex;
      justify-content: space-between;
      .price {
        font-size: 15px;
        font-weight: 700;
        color: $primary;
      }
      .discount {
        font-size: 13px;
        font-weight: 700;
        color: rgb(255, 255, 255);
        background-color: $primary;
        padding-left: 10px;
        padding-right: 10px;
        display: inline-block;
        border-radius: 12px;
      }
    }
  }
}
</style>