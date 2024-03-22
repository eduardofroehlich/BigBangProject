<script setup lang="ts">
import DashboardHeader from '../components/dashboard-header.vue'
import BalanceResume from '../components/balance-resume.vue'
</script>

<template>
  <div class="h-screen w-screen">
    <div class="bg-primary h-2/5">
      <DashboardHeader />

      <div>
        <BalanceResume />
      </div>
    </div>
  </div>
</template>

