<template>
  <main class="mt-8">
    <button class="bg-secondary text-on-secondary ripple">
      <div class="overlay"></div>
      <div class="content">Tap</div>
    </button>
  </main>
</template>

<style lang="scss" scoped>
button {
  all: unset;
  padding: 0.75rem 3rem;
  border-radius: 0.5rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease;
  }

  :hover {
    background: color-mix(in srgb, var(--g-theme-on-primary) 10%, transparent);
  }

  &.ripple {
    &:after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(1);
      width: 100%;
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: color-mix(
        in srgb,
        var(--g-theme-on-primary) 20%,
        transparent
      );
      opacity: 0;
      transition:
        opacity 0.3s ease,
        transform 0.3s ease;
    }

    &:active:after {
      transform: translate(-50%, -50%) scale(0);
      opacity: 1;
      transition: 0s;
    }
  }
}
</style>
