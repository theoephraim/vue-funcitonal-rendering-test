<script setup>
import Stack from './Stack.vue';
import VButton from './VButton.vue';
import ToggledVisibilityThing from './ToggledVisibilityThing.vue';
import { useExampleStore } from '../store.ts';
import { ref, computed } from 'vue';

const loopCount = ref(1);
const counter = ref(1);
const toggle = ref(true);

const exampleStore = useExampleStore();
const storeCounter = computed(() => exampleStore.counter);
</script>

<template>
  <Teleport to="#portal">
    <button @click="loopCount++">Add child to loop</button>
    <button @click="counter++">increase counter</button>
    <button @click="toggle = !toggle">toggleContent</button>

    <Stack dividers>
      <p>First paragraph</p>
      <ToggledVisibilityThing>toggled - not shown</ToggledVisibilityThing>
      <ToggledVisibilityThing show>toggled - shown!</ToggledVisibilityThing>

      <template v-if="toggle">
        <p>toggle = true</p>
        <VButton>button 1</VButton>
      </template>
      <template v-else>
        <p>toggle = false</p>
        <VButton>button 2</VButton>
      </template>

      <h3>Store counter toggle</h3>
      <template v-if="storeCounter % 2 === 0">
        <p>store counter is EVEN</p>
        <VButton>button 1</VButton>
      </template>
      <template v-else>
        <p>store counter is ODD</p>
        <VButton>button 2</VButton>
      </template>

      <p v-if="false">not rendered 1 with v-if</p>
      <template v-if="false"><p>not rendered within template v-if</p></template>

      <p v-for="(_, i) in new Array(loopCount)">v-for loop - p {{ i }}</p>
      <template v-if="true">
        <p>child 1 within template</p>
        <p>child 2 within template</p>
        <template v-if="true">
          <p>child 1 within nested template {{ counter }}</p>
          <p>child 2 within nested template</p>
          <p v-if="true">child 3 within nested template w/ if</p>
        </template>
      </template>
      <!-- this is a comment -->
      <!-- this is another comment -->
    </Stack>
  </Teleport>
</template>

<style scoped></style>
