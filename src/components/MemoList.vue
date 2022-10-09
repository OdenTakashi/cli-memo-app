<template>
  <div v-for="memo in memos" v-bind:key="memo.id">
    <p v-on:click="editMemo(memo)">
      {{ memo.content.split('\n')[0] }}
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
    }
  }
}
</script>

<style scoped>

</style>
