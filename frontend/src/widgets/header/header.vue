<script setup>
import gIcon from '@/shared/ui/icons'
</script>

<template>
  <div class="g-header">
    <div class="b-content container">
      Loot Game

      <span class="g-coins-chip">
        <span>100</span>
        <g-icon class="text-primary" name="coins" />
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
    padding: 4px;
    display: flex;
    align-items: center;
    gap: 4px;
    border: 1px solid var(--g-theme-primary);
    border-radius: 4px;
  }
}
</style>
