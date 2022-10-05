<template>
  <div>
    <ul v-for="memo in memos" v-bind:key="memo.id">
      <router-link :to="`/${memo.id}/edit`">
        <li>{{ memo.content }}</li>
      </router-link>
    </ul>
    <button v-on:click="createMemo">+</button>
  </div>
    <button v-on:click="deleteMemo">Delete</button>
    <button v-on:click="updateMemo">Update</button>
</template>

<script>

export default {
  name: 'MemoList',
  data() {
    return {
      memos: [
        {id: 1, content: '今日の lunch'},
        {id: 2, content: '明日の lunch'}
      ]
    }
  },
  methods: {
    createMemo() {
      this.memos.push({id: 3, content: '新規メモ'})
    },
    deleteMemo() {
      this.memos.find(memo => memo.id == this.$route.params.id
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
