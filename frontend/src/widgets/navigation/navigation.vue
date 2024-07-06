<script setup>
import gIcon from '@/shared/ui/icons'
</script>

<template>
  <div class="g-navigation">
    <button><g-icon name="diamond" />Looting</button>
    <button>
      <g-icon name="diamond" />
      <span> Illumi</span>

      <span class="premium">VIP</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.g-navigation {
  position: fixed;
  bottom: 0;
  left: 50%;
  max-width: calc(100% - 2rem);
  min-width: 288px;
  transform: translateX(-50%);
  background-color: var(--g-theme-surface);
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem 1rem 0 0;

  button {
    all: unset;
    background-color: var(--g-theme-background);
    color: var(--g-theme-primary);
    padding: 1rem 1rem;
    border-radius: 0.5rem;
    width: 100%;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    position: relative;

    .premium {
      background-color: var(--g-theme-primary);

      background: linear-gradient(
        45deg,
        var(--g-theme-primary),
        var(--g-theme-secondary) 50%,
        var(--g-theme-primary) 100%
      );

      color: var(--g-theme-on-primary);
      padding: 2px 8px;
      border-radius: 2px;
      font-size: 0.6rem;
      line-height: 0.8rem;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    svg {
      width: 24px;
      height: 24px;
    }

    &:hover {
      background-color: color-mix(
        in srgb,
        var(--g-theme-primary) 10%,
        transparent
      );
    }
  }
}
</style>
