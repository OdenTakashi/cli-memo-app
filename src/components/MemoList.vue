<template>
  <div v-for="memo in memos" :key="memo.id">
    <p class="memo_item" @click="editMemo(memo)">
      {{ getTitle(memo) }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'MemoList',
  props: ["memos"],
  emits: ["editMemo"],
  methods: {
    editMemo(memo) {
      this.$emit("editMemo", memo)
    },
    getTitle(memo) {
      return memo.content.split('\n')[0]
    }
  }
}
</script>

<style scoped>
.memo_item {
  cursor: pointer;
}
</style>
