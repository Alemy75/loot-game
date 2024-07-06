<script setup>
import Coins from './coins.vue'
import Diamond from './diamond.vue'

const props = defineProps({
  name: String
})

const icons = {
  coins: Coins,
  diamond: Diamond
}
</script>

<template>
  <component :is="icons[props.name]" />
</template>
