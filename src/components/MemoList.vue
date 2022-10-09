<template>
  <div v-for="memo in memos" v-bind:key="memo.id">
    <p v-on:click="editMemo(memo)">
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

</style>
