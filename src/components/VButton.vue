<template>
  <component
    :is="htmlTagOrComponentType"
    class="vbutton"
    :class="computedClasses"
    v-bind="dynamicAttrs"
    @click="clickHandler($event)"
  >
    <slot>{{ label }}</slot>
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  label: String,
});

const htmlTagOrComponentType = computed(() => {
  return 'button';
});
const computedClasses = computed(() => []);

const dynamicAttrs = computed(() => ({}));


const emit = defineEmits(['click']);
function clickHandler(e: MouseEvent) {
  emit("click", e);  
}
</script>

<style lang="less" scoped>
.vbutton {
  background: red;
}
</style>