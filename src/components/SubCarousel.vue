<template>
  <b-carousel-list
    :data="images"
    :items-to-show="3"
    class="sub-carousel"
    :pause-info="false"
    :arrow-hover="false"
    :repeat="true"
    :interval="10 * 1000"
  >
    <template #item="list">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <g-image :src="list.node.image.gridsome_image" />
          </figure>
        </div>
      </div>
    </template>
  </b-carousel-list>
</template>

<script>
export default {
  computed: {
    images() {
      return this.$static.images.edges;
    },
  },
};
</script>

<style lang="scss">
.sub-carousel {
  box-shadow: none !important;
  .card {
    box-shadow: none;
    background-color: $background;
    img {
      border-radius: 12px;
    }
  }
  .carousel-arrow {
    .icon {
      background-color: $background;
      border: 1px solid $background;
      &.has-icons-left {
        left: 5px;
      }

      &.has-icons-right {
        right: 5px;
      }
    }
  }
}
</style>

<static-query>
query {
  images: allSubSliders {
    edges {
      node {
        id
        image {
          gridsome_image
        }

      }
    }
  }
}
</static-query>