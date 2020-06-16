
<template>
  <EditorBar :catchData="catchData" :content="form.content"></EditorBar>


</template>

<script>
  import EditorBar from '../components/editoritem'

  export default {
    components: {
      EditorBar
    },
    data() {
      return {
        form: {
          content: '',
        },
      }
    },
    methods: {
      //编辑器的内容赋值
      catchData(content) {
        this.form.content = content;
      }
    },


  }

</script>
