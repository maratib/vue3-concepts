<template>
  <div id="app" class="">
    <div class="flex justify-center items-center flex-1">
      <div>
        <AppDropdown1>
          <template #navLinks>
            <p>Link 1</p>
            <p>Link 2</p>
            <p>Link 3</p>
          </template>
        </AppDropdown1>

      </div>
      <div>
        <AppDropdown1>
          <template #navLinks>
            <p>Link 4</p>
            <p>Link 5</p>
            <p>Link 6</p>
          </template>
        </AppDropdown1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppDropdown1 from "./components/AppDropdown1.vue";


</script>
