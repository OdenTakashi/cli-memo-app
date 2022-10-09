<template>
    <textarea v-model="memo"></textarea>
    <button v-on:click="saveContent">Save</button>
</template>

<script>

export default {
  name: 'MemoEdit',
  props: ["memos"],
  emits: ["saveContent"],
  data() {
    return {
      memo: this.memos
    }
  },
  methods: {
    saveContent() {
      this.$emit('saveContent', this.memo)
    }
  }
}
</script>

<style>
textarea {
  width: 25%;
  height: 200px;
}
</style>

