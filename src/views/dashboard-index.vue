<script setup lang="ts">
import DashboardHeader from '../components/dashboard-header.vue'
import BalanceResume from '../components/balance-resume.vue'
import StatisticsDashboard from '../components/statistics-dashboard.vue'
</script>

<template>
  <div class="h-screen w-screen">
    <div class="bg-primary h-4/6">
      <DashboardHeader />

      <div>
        <BalanceResume />
      </div>

      <div class="flex justify-center pt-10">
        <StatisticsDashboard />
      </div>
    </div>
  </div>
</template>

