<script setup lang="ts">
import DashboardHeader from '../components/dashboard-header.vue'
import BalanceResume from '../components/balance-resume.vue'
import StatisticsDashboard from '../components/statistics-dashboard.vue'
import RecentTransactions from '../components/recent-transactions.vue'
</script>

<template>
  <div class="h-screen">
    <div class="bg-primary h-4/6">
      <DashboardHeader />

      <BalanceResume />

      <div class="flex justify-center pt-10">
        <StatisticsDashboard />
      </div>

      <div class="flex justify-center pt-10 gap-20">
        <RecentTransactions />
      </div>
    </div>
  </div>
</template>

