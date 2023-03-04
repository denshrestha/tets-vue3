<script setup>
import { computed } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import AuthLayout from './layout/AuthLayout.vue';
import DashboardLayout from './layout/DashboardLayout.vue'
const route = useRoute()

const layout = computed(() => route.meta.layout ? AuthLayout : DashboardLayout)
</script>

<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<style scoped>

</style>
