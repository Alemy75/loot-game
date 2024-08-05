<script setup>
import { Coins } from 'lucide-vue-next'
</script>

<template>
  <div class="g-header">
    <div class="b-content container">
      Lud ka Game

      <span class="g-coins-chip">
        <span>100</span>
        <Coins class="e-coins" :stroke-width="1.5" />
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.g-header {
  height: 56px;
  background-color: var(--g-theme-surface);
  color: var(--g-theme-on-surface);

  .b-content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .g-coins-chip {
    color: var(--g-theme-on-surface);
    padding: 4px 8px;
    display: flex;
    align-items: center;
    gap: 4px;
    border: 1px solid var(--g-theme-primary);
    border-radius: 4px;
    line-height: 1;

    .e-coins {
      color: var(--g-theme-primary);
    }
  }
}
</style>
