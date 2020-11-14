<template>
  <div class="gallery" ref="gallery">
      <div class="gallery__images" v-for="(images,indexa) in gallery" :key="'images-'+indexa">
          <div class="gallery__image" v-for="(image, index) in images.images" :key="'image-'+index">
              <img :src="api_url + image.url" alt=""></g>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        api_url: process.env.strapiBaseUri,
      }
    },
    props: [
      'gallery'
    ]
  }
</script>

<style lang="scss" scoped>

    .gallery__images{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        width: max-content;
    }
    .gallery__image{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 50px;
        pointer-events: none;
        height: 100%;
        width: auto;
        object-fit: cover;
        &:first-of-type{
            padding-left: 0;
        }
        img{
            // height: 100%;
            object-fit: cover;
        }
    }
</style>
