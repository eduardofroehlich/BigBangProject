<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import BigBangLogo from './big-bang-logo.vue'
import DashboardNav from './dashboard-nav.vue'
import { faBell } from '@fortawesome/free-regular-svg-icons';
</script>

<template>
  <div class="w-full flex justify-between p-5">
    <div class="">
      <BigBangLogo />
    </div>
    <div class="">
      <DashboardNav />
    </div>
    <div class="text-end">
      <VsxIcon iconName="Notification" :size="24" color="#FFFFFF" type="linear" />
    </div>
  </div>
</template>

