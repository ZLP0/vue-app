<template>
  <div>
    <div ref="editor" style="text-align:left;" ></div>
    <!--<button v-on:click="getContent">查看内容</button>-->
  </div>
</template>

<script>
  import E from 'wangeditor'
  export default {
    name: 'editor',
    data () {
      return {
        editorContent: ''
      }
    },
    methods: {
      getContent: function () {
        alert(this.editorContent)
      }
    },
    mounted() {
      var editor = new E(this.$refs.editor)
      editor.customConfig.onchange = (html) => {
        this.editorContent = html
      }
      editor.create()
    }
  }
</script>

<style scoped>
  .w-e-text-container{
    height: 900px !important; /*!important是重点，因为原div是行内样式设置的高度300px*/
  }

</style>
