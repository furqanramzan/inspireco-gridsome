<template>
  <Layout>
    <div class="full-float p-r-10 p-l-10">
      <div class="columns">
        <div class="column is-3">
          <category-list :categories="$page.categories.edges" />
        </div>
        <div class="column is-9">
          <main-carousel />
          <div class="full-float m-t-30"></div>
          <sub-carousel />
          <div class="full-float m-t-30"></div>
          <product-list :products="$page.products.edges" />
        </div>
      </div>
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
};
</script>

<style lang="scss">
.home-links a {
  margin-right: 1rem;
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
        feature_image {
          gridsome_image
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