<template>
  <div @click="toggle" v-click-away="away" class="relative">
    <slot name="toggler">
      <button>Toggle</button>
    </slot>
    <slot />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, provide } from 'vue'

export type SharedState = {
  active: boolean;

};

const sharedState: SharedState = reactive({
  active: false
})

provide('sharedState', sharedState)


const toggle = () => {
  sharedState.active = !sharedState.active
  console.log('toggle :', sharedState.active);
};
const away = () => {
  sharedState.active = false;
  console.log('away :', sharedState.active);
};

</script>
