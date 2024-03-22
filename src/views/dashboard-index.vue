<script setup lang="ts">
import DashboardHeader from '../components/dashboard-header.vue'
import BalanceResume from '../components/balance/balance-resume.vue'
import StatisticsDashboard from '../components/statistics/statistics-dashboard.vue'
import RecentTransactions from '../components/transactions/recent-transactions.vue'
import GeneralAnalysis from '../components/analysis/general-analysis.vue'
</script>

<template>
  <div class="h-screen">
    <div class="bg-primary h-4/6">
      <DashboardHeader />

      <BalanceResume />

      <div class="flex justify-center pt-10">
        <StatisticsDashboard />
      </div>

      <div class="flex justify-center pt-10 gap-40 pb-10">
        <RecentTransactions />
        <GeneralAnalysis />
      </div>
    </div>
  </div>
</template>

