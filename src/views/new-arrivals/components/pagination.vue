<template>
  <div class="pagination display-center">
    <div class="info">
      Items {{ startItemIndex }} to {{ endItemIndex }} of {{ total }} total
    </div>
    <div class="control" v-if="total">
      <button class="left btn" v-if="current > 1" @click="goto(current - 1)">prev</button>
      <button class="btn disabled">{{current}}</button>
      <button class="next btn" v-if="current < pages" @click="goto(current + 1)">next</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const emits = defineEmits(['change']);

const props = defineProps<{
  current: number,
  size: number,
  total: number,
  pages: number
}>()
const startItemIndex = computed(() => props.current * props.size + 1)
const endItemIndex = computed(() => startItemIndex.value + Math.min(props.total, startItemIndex.value + props.size))

const goto = (target: number) => {
  emits('change', target)
}
</script>

<style scoped lang="less">
.pagination {
  border-top: 1px solid #DDD;
  border-bottom: 1px solid #DDD;
  margin-bottom: 20px;
}

.info {
  line-height: 35px;
  color: #303030;
  border-right: 1px solid #DDD;
  font-size: 13px;
  padding-right: 13px;
}

.control {
  flex: 1;
  text-align: right;
}

.btn {
  line-height: 35px;
  font-size: 14px;
  background-color: #FFF;
  border: 0;

  & ~ .btn {
    margin-left: 6px;
  }
  
  &.disabled{
    cursor: inherit;
  }
}
</style>
