<template>
  <MemoList v-bind:memos="memo_items" v-on:startEdit="doEdit" />
  <button v-on:click="addMemo">+</button>
  <div v-if="this.editable">
    <MemoEdit v-bind:memos="edit_body" v-on:doneEdit="updateMemo" />
    <button v-on:click="deleteMemo">Delete</button>
    <button v-on:click="cancelEdit">Cancel</button>
  </div>
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
      edit_body: '',
      edit_id: ''
    }
  },
  methods: {
    addMemo() {
      this.memo_items.push({id: Date.now(), content: '新規メモ'})
      localStorage.setItem('memos', JSON.stringify(this.memo_items))
    },
    doEdit(memo) {
      this.edit_body = memo.content
      this.edit_id = memo.id
      this.editable = true
    },
    updateMemo(editedContent) {
      const index = this.memo_items.findIndex(({id}) => id === this.edit_id)
      this.memo_items[index].content = editedContent
      localStorage.setItem('memos', JSON.stringify(this.memo_items))
      this.editable = false
    },
    deleteMemo() {
      const index = this.memo_items.findIndex(({id}) => id === this.edit_id)
      this.memo_items.splice(index, 1)
      localStorage.setItem('memos', JSON.stringify(this.memo_items))
      this.editable = false
    },
    cancelEdit() {
      this.editable = false
    }
  }
}
</script>

<style>

</style>
