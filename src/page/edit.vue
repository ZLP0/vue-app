
<template>
  <div>
    <!--富文本组件-->
    <edit ref='ch'></edit>
    <el-button type="primary" round  v-on:click="click">点击查看内容</el-button>
  </div>
</template>

<script>
  //引入富文本框
  import   edit from '@/components/edit'

  export  default {
    components: {
      edit
    },
    methods: {
      click: function () {
        // 父组件可以通过$refs拿到子组件的对象
        //  获取
        alert(this.$refs.ch.editorContent)
      }
    },
  }
</script>
