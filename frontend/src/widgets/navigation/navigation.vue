<script setup>
import { Package, Map, Pickaxe } from 'lucide-vue-next'
</script>

<template>
  <div class="g-navigation">
    <button><Pickaxe :stroke-width="1.5" />Farming</button>
    <button><Package :stroke-width="1.5" />Cases</button>
    <button>
      <Map :stroke-width="1.5" />
      <span>Event</span>

      <span class="premium">Weekly</span>
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
  padding: 0;
  display: flex;
  align-items: center;
  border-radius: 0.5rem 0.5rem 0 0;

  :first-child {
    border-radius: 0.5rem 0 0 0;
  }

  :last-child {
    border-radius: 0 0.5rem 0 0;
  }

  button {
    all: unset;
    background-color: var(--g-theme-surface);
    color: var(--g-theme-primary);
    padding: 1rem 0;

    width: 100%;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    font-size: 0.8rem;
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
