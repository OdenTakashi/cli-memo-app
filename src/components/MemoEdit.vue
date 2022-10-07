<template>
  <MemoForm v-bind:content="memos" v-on:saveMemo="saveContent" />
</template>

<script>
import MemoForm from '../components/MemoForm.vue'

export default {
  name: 'MemoEdit',
  props: ["memos"],
  components: {
    MemoForm
  },
  methods: {
    saveContent() {
      this.$emit('doneEdit', this)
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

