<script setup>
import StackExample from './components/StackExample.vue';
import { ref, onMounted } from 'vue';
import { useExampleStore } from './store';

const exampleStore = useExampleStore();

onMounted(() => {
  exampleStore.activate();
});
</script>

<template>
  <h2>Stack example</h2>
  <p>store counter = {{ exampleStore.counter }}</p>
  <div
    id="portal"
    :style="{ border: '1px solid white', padding: '10px' }"
  ></div>
  <StackExample />
</template>

<style scoped></style>
