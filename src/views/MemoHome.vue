<template>
  <MemoList v-bind:memos="memo_items" v-on:editMemo="doEdit" />
  <div class="add-field">
    <button class="btn-add" v-on:click="addMemo">+</button>
  </div>
  <div class="edit_field" v-if="this.editable">
    <MemoEdit v-bind:memos="edit_body" v-on:saveContent="updateMemo" />
    <div>
      <button class="btn" v-on:click="deleteMemo">Delete</button>
      <button class="btn" v-on:click="resetDate">Cancel</button>
    </div>
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
      this.edit_id = Date.now()
      this.memo_items.push({id: this.edit_id, content: '新規メモ'})
      localStorage.setItem('memos', JSON.stringify(this.memo_items))
      this.editable = true
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
      this.resetDate()
    },
    deleteMemo() {
      const index = this.memo_items.findIndex(({id}) => id === this.edit_id)
      this.memo_items.splice(index, 1)
      localStorage.setItem('memos', JSON.stringify(this.memo_items))
      this.resetDate()
    },
    resetDate() {
      this.edit_body = ''
      this.edit_id = ''
      this.editable = false
    }
  }
}
</script>

<style scoped>
.edit_field {
  height: 300px;
}
.add-field {
  margin-bottom: 10px;
}
.btn-add {
  background-color: white;
  border: none;
  cursor: pointer;
}
</style>
