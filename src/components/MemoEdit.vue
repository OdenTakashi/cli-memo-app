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
    saveContent(memo) {
      this.$emit('doneEdit', memo)
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

