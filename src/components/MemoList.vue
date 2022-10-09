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
  methods: {
    editMemo(memo) {
      this.$emit("startEdit", memo)
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
