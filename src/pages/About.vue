<template>
  <Layout>
    <div class="container is-max-desktop">
      <div class="product-detail">
        <div class="columns is-multiline">
          <div class="column is-6">
            <b-carousel
              :autoplay="false"
              indicator-custom
              :indicator-inside="false"
              :has-drag="true"
              :arrow="false"
            >
              <b-carousel-item
                v-for="(detail_image, index) in product.detail_images"
                :key="index"
              >
                <a class="image">
                  <g-image
                    :src="detail_image.directus_files_id.gridsome_image"
                  />
                </a>
              </b-carousel-item>
              <template #indicators="props">
                <figure class="al image" :draggable="true">
                  <g-image
                    :draggable="true"
                    :src="
                      product.detail_images[props.i].directus_files_id
                        .gridsome_image
                    "
                    :title="props.i"
                  />
                </figure>
              </template>
            </b-carousel>
          </div>
          <div class="column is-6 content">
            <h1 class="heading">{{ product.name }}</h1>
            <span class="quantity">{{ product.quantity | qauntity }}</span>
            <p class="description" v-html="product.description"></p>
            <vs-button
              v-if="quantity === 0"
              @click="quantity = 1"
              active
              circle
              primary
              border
              class="cart"
            >
              <i class="mdi mdi-cart m-r-5"></i> Add to Cart
            </vs-button>
            <div v-else class="columns">
              <div class="column is-4">
                <b-numberinput
                  rounded
                  min="0"
                  size="is-small"
                  :editable="false"
                  v-model="quantity"
                  class="added-quantity"
                  controls-alignment="right"
                  controls-position="compact"
                ></b-numberinput>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About us",
  },

  data() {
    return {
      gallery: false,
      quantity: 0,
    };
  },

  computed: {
    product() {
      return this.$page.products.edges[0].node;
    },
  },

  methods: {
    getImgUrl(value) {
      console.log(value);
      return `https://picsum.photos/id/1051/1230/500`;
    },

    switchGallery(value) {
      this.gallery = value;
      if (value) {
        return document.documentElement.classList.add("is-clipped");
      } else {
        return document.documentElement.classList.remove("is-clipped");
      }
    },
  },
};
</script>

<style lang="scss">
.product-detail {
  .carousel {
    display: grid;
    grid-template-columns: auto 25%;
    align-items: center;
    .carousel-item {
      img {
        height: 550px;
        border-radius: 30px;
      }
    }
    .carousel-indicator {
      overflow-y: auto;
      flex-direction: column;
      height: 550px;
      padding: 0 0 0 8px;
      .indicator-item {
        margin-right: initial !important;
        margin-bottom: 5px;
        img {
          border: 1px solid transparent;
          filter: grayscale(100%);
          border-radius: 10px;
        }
      }
      .is-active {
        img {
          border: 1px solid #fff;
          filter: grayscale(0%);
        }
      }
    }
  }
  .content {
    .heading {
      font-size: 18px;
      font-weight: 600;
      line-height: 1.5;
      margin-top: 30px;
    }
    .quantity {
      font-size: 13px;
      font-weight: 400;
      color: rgb(119, 121, 140);
    }
    .description {
      margin-top: 30px;
      font-size: 15px;
      font-weight: 400;
      line-height: 2;
    }
    .cart {
      padding-left: 12px;
      padding-right: 12px;
    }
    .added-quantity {
      input,
      button {
        &:focus {
          outline: none !important;
          box-shadow: none !important;
        }
      }
      .control:last-child:not(:only-child) .button {
        border-radius: 290486px;
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
      }
    }
  }
}
</style>

<page-query>
query {
  products: allProducts {
    edges {
      node {
        id
        name,
        price,
        old_price,
        quantity,
        description,
        feature_image {
          gridsome_image
        },
        detail_images {
          directus_files_id {
            gridsome_image
          }
        }
        child_category_id {
          id
        }
      }
    }
  }
}
</page-query>