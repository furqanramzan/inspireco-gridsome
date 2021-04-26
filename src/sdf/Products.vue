<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1 v-for="edge in $page.products.edges" :key="edge.node.id">
      {{ edge.node.name }} {{ edge.node }}
    </h1>

    <vs-button :active="active == 0" @click="active = 0"> Active </vs-button>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
      excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
      Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener"
        >Gridsome Docs</a
      >
      <a
        href="https://github.com/gridsome/gridsome"
        target="_blank"
        rel="noopener"
        >GitHub</a
      >
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!",
  },

  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
        /* path(to: "detail") */
</style>

<page-query>
query {
  products: allProducts {
    edges {
      node {
        id
        name
      }
    }
  }
}
</page-query>