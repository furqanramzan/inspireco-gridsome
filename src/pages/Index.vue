<template>
  <Layout>
    <b-carousel class="main-carousel" indicator-style="is-boxes" :pause-info="false" :arrow-hover="false">
      <b-carousel-item v-for="(item, i) in 6" :key="i">
        <span class="image">
          <img :src="getImgUrl(i)" />
        </span>
      </b-carousel-item>
    </b-carousel>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!",
  },

  data() {
    return {
      carousels: [
        { text: "Slide 1", color: "primary" },
        { text: "Slide 2", color: "info" },
        { text: "Slide 3", color: "success" },
        { text: "Slide 4", color: "warning" },
        { text: "Slide 5", color: "danger" },
      ],
    };
  },

  methods: {
    getImgUrl(value) {
      return `https://picsum.photos/id/43${value}/1230/500`;
    },
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
