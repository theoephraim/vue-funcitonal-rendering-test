<template>
  <button class="vbutton">
    <slot>{{ label }}</slot>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  label: String,
});
</script>

<style lang="less" scoped>
.vbutton {
  background: red;
}
</style>
