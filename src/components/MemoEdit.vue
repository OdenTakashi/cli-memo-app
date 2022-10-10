<template>
    <textarea v-model="memo"></textarea>
    <div class="save-field">
      <button class="btn" v-on:click="saveContent">Save</button>
    </div>
</template>

<script>

export default {
  name: 'MemoEdit',
  props: ["memos"],
  emits: ["saveContent"],
  data() {
    return {
      memo: this.memos
    }
  },
  methods: {
    saveContent() {
      this.$emit('saveContent', this.memo)
    }
  }
}
</script>

<style>
textarea {
  width: 25%;
  height: 200px;
  margin-right: auto;
  background-color: navajowhite;
  border-radius: 10px;
  text-align: center;
}
.save-field {
  margin-left: 300px;
}
.btn {
  background-color: white;
  border: 1px solid;
}

</style>

