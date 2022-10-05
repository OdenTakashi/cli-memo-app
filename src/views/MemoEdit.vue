<template>
  <div>
    <textarea :value="memo.content" ref="content"></textarea>
  </div>
</template>

<script>

export default {
  name: 'MemoEdit',
  data() {
    return {
      memos: [
        {id: 1, content: '今日の lunch'},
        {id: 2, content: '明日の lunch'},
        {id: 3, content: '新規メモ'}
      ]
    }
  },
  computed:{
    memo(){
      return  this.memos.find(memo => memo.id == this.$route.params.id
      )
    }
  },
  methods: {
    addMemo() {
      this.memos.push({id: 3, content: this.$refs.content.value})
    }
  }
}
</script>
