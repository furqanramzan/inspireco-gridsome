<template>
  <div class="container is-max-widescreen">
    <div class="full-float">
      <vs-navbar not-line shadowScroll center-collapsed color="light">
        <template #left>
          <g-link to="/">
            <g-image
              alt=""
              width="150"
              height="40"
              class="m-t-10"
              :immediate="true"
              src="~/assets/images/logo.png"
            />
          </g-link>
        </template>
        <div class="m-r-20">
          <vs-navbar-item to="/about" :active="$route.path == '/about'">
            Shop Now
          </vs-navbar-item>
        </div>
        <form action="">
          <!-- @click-icon="search" -->
          <vs-input
            primary
            state="dark"
            placeholder="Search for products"
            icon-after
          >
            <template #icon>
              <i class="mdi mdi-magnify"></i>
            </template>
          </vs-input>
        </form>
        <template #right>
          <vs-button :active="true" color="secondary" flat class="m-r-5">
            <i class="mdi mdi-cart"></i> Cart
          </vs-button>
          <vs-button :active="true" flat>
            <i class="mdi mdi-account"></i> Join
          </vs-button>
        </template>
        <div
          class="vs-navbar__line notTransition"
          style="left: 8px; width: 98.5%"
        ></div>
      </vs-navbar>
    </div>
    <div class="main-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
a {
  color: inherit !important;
}
</style>