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
// const storeCounter = computed(() => exampleStore.counter);
const reqStatus = exampleStore.getRequestStatus('EXAMPLE_REQ');

</script>

<template>
  <div>
    <button @click="loopCount++">Add child to loop</button>
    <button @click="counter++">increase counter</button>
    <button @click="toggle = !toggle">toggleContent</button>
    <button @click="exampleStore.EXAMPLE_REQ()">trigger API request</button>

    <Stack dividers>

      <!-- this is a comment -->

      <p v-if="false">directly hidden</p>
      
      <template v-if="false">
        <p>hidden within template</p>
      </template>
      
      <h3>Toggle test</h3>
      <template v-if="toggle">
        <p>toggle = true</p>
        <VButton>button 1</VButton>
      </template>
      <template v-else>
        <p>toggle = false</p>
        <VButton>button 2</VButton>
      </template>

      <h3>Api request test</h3>
      <template v-if="reqStatus.isSuccess">
        <p>Api request successful!</p>
        <VButton>button - success!</VButton>
      </template>
      <template v-else>
        <p>api request not successful yet</p>
        <ToggledVisibilityThing>toggled - not shown</ToggledVisibilityThing>
        <VButton>button - no success</VButton>
      </template>

      <p v-for="(_, i) in new Array(loopCount)">v-for loop - child #{{ i }} / counter = {{ counter}}</p>

      <ToggledVisibilityThing>toggled - not shown</ToggledVisibilityThing>
      <ToggledVisibilityThing show>toggled - shown!</ToggledVisibilityThing>

    </Stack>
  </div>
</template>

<style scoped></style>
