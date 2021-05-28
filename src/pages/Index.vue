<template>
  <Layout>
    <div class="full-float p-r-10 p-l-10">
      <div class="columns">
        <div class="column is-3 p-b-0">
          <category-list
            v-model="filters.category"
            @input="scrollToProducts"
            :categories="$page.categories.edges"
          />
        </div>
        <div class="column is-9 p-b-0">
          <main-carousel />
          <div class="full-float m-t-30"></div>
          <sub-carousel />
          <div class="full-float m-t-30"></div>
          <div class="full-float" id="products">
            <product-list :products="products" />
          </div>
        </div>
      </div>
      <div class="full-float m-t-50"></div>
    </div>
  </Layout>
</template>

<script>
import MainCarousel from "@/components/MainCarousel.vue";
import SubCarousel from "@/components/SubCarousel.vue";
import ProductList from "@/components/ProductList.vue";
import CategoryList from "@/components/CategoryList.vue";

export default {
  components: { MainCarousel, SubCarousel, ProductList, CategoryList },

  metaInfo: {
    title: "Hello, world!",
  },

  data() {
    return {
      filters: {
        category: "",
      },
    };
  },

  computed: {
    products() {
      let products = this.$page.products.edges;
      let category = this.filters.category;
      if (category) {
        products = products.filter(
          ({
            node: {
              child_category_id: { id },
            },
          }) => id == category
        );
      }
      return products;
    },
  },

  methods: {
    scrollToProducts() {
      let element = document.getElementById("products");
      this.$scrollTo(element, 2000);
    },
  },
};
</script>

<page-query>
query {
  products: allProducts {
    edges {
      node {
        id
        name,
        price,
        old_price,
        feature_image {
          gridsome_image
        }
        child_category_id {
          id
        }
      }
    }
  }

  categories: allChildCategories {
    edges {
      node {
        id
        name,
        image {
          gridsome_image
        }
      }
    }
  }
}
</page-query>