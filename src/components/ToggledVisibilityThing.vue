<template>
  <div v-if="show">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  show: Boolean,
});
</script>

<style lang="less" scoped></style>
