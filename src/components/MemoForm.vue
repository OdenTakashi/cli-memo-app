<template>
  <textarea v-model="memo" ref="content" id="content"></textarea>
  <button v-on:click="saveMemo">Save</button>
</template>

<script>

export default {
  name: 'MemoForm',
  props: ["content"],
  data() {
    return {
      memo: this.content
    }
  },
  methods: {
    saveMemo() {
      this.$emit('saveMemo', this.memo)
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
