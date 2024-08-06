<script setup>
import {
  computed,
  ref,
  watch,
  defineProps,
  defineEmits,
  toRefs,
  onMounted
} from 'vue'

const DELAY_MS = 500

const props = defineProps({
  modelValue: Boolean
})

const { modelValue } = toRefs(props)

const emits = defineEmits(['update:modelValue'])

const isVisible = ref(false)
const isOverlayVisible = ref(false)

const computedStyle = computed(() => ({
  '--delay': DELAY_MS + 'ms'
}))

const computedContentClass = computed(() => ({
  dialog: true,
  container: true,
  'm-dialog-hidden': !isVisible.value
}))

const computedOverlayClass = computed(() => ({
  overlay: true,
  'm-overlay-hidden': !isVisible.value
}))

const closeHandler = () => {
  isVisible.value = false

  emits('update:model-value', true)
}

watch(isVisible, value => {
  if (!value) {
    setTimeout(() => {
      isOverlayVisible.value = false
    }, DELAY_MS)
  } else {
    isOverlayVisible.value.true
  }
})

watch(modelValue, value => {
  isVisible.value = value
})

onMounted(() => {
  isVisible.value = modelValue.value
  isOverlayVisible.value = modelValue.value
})
</script>

<template>
  <div class="g-dialog" :style="computedStyle">
    <div v-show="isOverlayVisible" :class="computedOverlayClass"></div>

    <div :class="computedContentClass">
      <div class="wrapper">
        <button class="close-btn" @click="closeHandler"></button>

        <div class="content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./dialog.scss" scoped></style>
