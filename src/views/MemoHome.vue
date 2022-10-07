<template>
  <MemoList v-bind:memos="memo_items" v-on:startEdit="doEdit" />
  <button v-on:click="addMemo">+</button>
  <MemoEdit v-if="this.editable" v-bind:memos="body" />
</template>

<script>
import MemoEdit from '../components/MemoEdit.vue'
import MemoList from '../components/MemoList.vue'

export default {
  name: 'MemoHome',
  components: {
    MemoList,
    MemoEdit
  },
  data() {
    return {
      memo_items: JSON.parse(localStorage.getItem("memos")) || [],
      editable: false,
      body: '',
      id: ''
    }
  },
  methods: {
    addMemo() {
      this.memo_items.push({id: Date.now(), content: '新規メモ'})
      localStorage.setItem('memos', JSON.stringify(this.memo_items))
    },
    doEdit(memo) {
      this.body = memo.content
      this.id = memo.id
      this.editable = true
    }
  }
}
</script>

<style>

</style>
