<template>
  <b-carousel
    class="main-carousel"
    indicator-style="is-boxes"
    :pause-info="false"
    :arrow-hover="false"
  >
    <b-carousel-item v-for="edge in images" :key="edge.node.id">
      <span class="image">
        <g-image :src="edge.node.image.gridsome_image" />
      </span>
    </b-carousel-item>
  </b-carousel>
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
.home-links a {
  margin-right: 1rem;
}
.main-carousel {
  .carousel-items {
    border-radius: 30px;
    img {
      height: 400px;
      width: 1050px;
    }
  }

  .carousel-arrow {
    .icon {
      border-radius: 0;
      background-color: $background;
      border: 1px solid $background;
      outline: none;
      &.has-icons-left {
        left: 0;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }

      &.has-icons-right {
        right: 0;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
    }
  }

  .carousel-indicator {
    .is-boxes {
      border-radius: 3px;
    }
  }
}
</style>

<static-query>
query {
  images: allMainSliders {
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