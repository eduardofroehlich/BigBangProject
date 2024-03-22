<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import BigBangLogo from './big-bang-logo.vue'
import DashboardNav from './dashboard-nav.vue'
import { faBell } from '@fortawesome/free-regular-svg-icons';
</script>

<template>
  <div class="bg-primary w-full h-2/5 flex justify-between p-5">
    <div class="">
      <BigBangLogo />
    </div>
    <div class="">
      <DashboardNav />
    </div>
    <div class="text-end">
      <FontAwesomeIcon :icon=faBell class="text-white text-2xl" />
    </div>
  </div>
</template>

