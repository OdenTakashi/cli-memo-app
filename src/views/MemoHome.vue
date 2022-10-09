<template>
  <MemoList v-bind:memos="memo_items" v-on:editMemo="doEdit" />
  <div class="add-btn">
    <button class="btn-add" v-on:click="addMemo">+</button>
  </div>
  <div class="memo_form" v-if="this.editable">
    <MemoEdit v-bind:memos="edit_body" v-on:saveContent="updateMemo" />
    <div class="btn">
      <button class="btn2" v-on:click="deleteMemo">Delete</button>
      <button class="btn2" v-on:click="cancelEdit">Cancel</button>
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

<style scoped>
.memo_form {
  height: 300px;
}
.add-btn{
  margin-bottom: 10px;
}
.btn-add {
  background-color: white;
  border: none;
}
</style>
