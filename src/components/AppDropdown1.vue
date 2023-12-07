<template>
  <div @click="toggle" v-click-away="away" class="relative">
    <div>
      <button
        class="relative flex items-center focus:outline-none pl-5 pr-3 py-2 rounded-lg bg-gray-300 text-gray-800 font-semibold">
        Click me
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="ml-1 h-5 w-5 fill-current text-gray-700">
          <path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z">
          </path>
        </svg>
      </button>
    </div>
    <div>
      <transition name="dropdown-content">
        <div v-if="active" class="origin-top-right absolute right-0 p-2 mt-2 w-48 bg-white rounded-lg border py-2 ">
          <slot name="navLinks" />
        </div>
      </transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'



const active = ref(false)


const toggle = () => {
  active.value = !active.value
  console.log('toggle :', active.value);
};
const away = () => {
  active.value = false;
  console.log('away :', active.value);
};

</script>

<style>
.dropdown-content-enter-active,
.dropdown-content-leave-active {
  transition: all 0.2s;
}

.dropdown-content-enter,
.dropdown-content-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>