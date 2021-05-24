<template>
  <div class="full-float">
    <main-header />
    <div class="main-content">
      <slot />
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";

export default {
  components: { MainHeader },
};
</script>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>