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
  <StackExample />
</template>

<style scoped></style>
