<template>
  <footer class="mt-32 mx-4 flex flex-col">
    <div class="flex flex-col justify-center items-center">
      <div
        class="logo w-12"
        v-html="require(`~/assets/icons/logo.svg?include`)"
      ></div>
      <!-- <p class="font-extrabold leading-tight">
        Digital&nbsp;Business&nbsp;Card
        <br />
        Generator
      </p> -->
      <p class="font-extrabold text-xl mt-2 leading-tight">EBusinessCard</p>
    </div>
    <p class="mt-6 text-center text-gray-400">
      Made with ❤️ by
      <a
        class="underline text-emerald-600 font-extrabold hover:text-emerald-500 focus:text-emerald-500 transition-colors duration-200"
        href="https://shopforfit.com/"
        target="_blank"
        rel="noopener noreferrer"
        >Mr&nbsp;Delts</a
      >
    </p>
  </footer>
</template>

<script>
export default {}
</script>

<style>
</style>
