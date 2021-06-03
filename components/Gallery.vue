<template>
  <section id="gallery" class="w-full bg-primary">
    <h1
      class="font-cali text-type text-center mb-5 md:mb-10 text-3xl md:text-5xl"
    >
      Prewedding Gallery
    </h1>
    <client-only>
      <carousel
        class="-mb-16"
        :pagination-color="'#f0f5f2'"
        :pagination-active-color="'#829d93'"
        :per-page-custom="[
          [320, 1],
          [1024, 4],
        ]"
      >
        <slide
          v-for="(item, index) in 8"
          :key="index"
          class="border-b-8 border-t-8 border-secondary"
        >
          <img :src="`/${item}.jpg`" />
        </slide>
      </carousel>
    </client-only>
  </section>
</template>

<script>
export default {}
</script>

<style>
.VueCarousel-pagination {
  position: relative;
  top: -90px;
}

.VueCarousel-inner {
}
</style>
