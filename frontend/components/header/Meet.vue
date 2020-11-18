<template>
    <div>
        <div class="meet-me">Meet me</div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
  .meet-me{
    transition: color 0.5s ease;
    .bg-red &{
      color: $white;
      transition: color 0.5s ease;
    }
  }

</style>
