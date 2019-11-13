<template>
  <nav class="flex items-center justify-between bg-blue-200 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <img
        class="fill-current"
        height="128"
        width="128"
        src="https://shroogle.com.au/wp-content/uploads/2019/03/Shroogle-logo-web-white-1.svg"
      />
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-white border-white-400 hover:text-white hover:border-white"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto md:hidden sm:hidden xm: hidden"
    >
      <div class="text-sm lg:flex-grow"></div>
      <div>
        <a
          href="#"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white hover:border-white hover:text-white-500 mt-4 lg:mt-0"
        >Login</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>
