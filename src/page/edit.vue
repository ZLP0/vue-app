<template>
  <div>
    <EditorBar :catchData="catchData" :content="form.content" :rangenum="rangenum"></EditorBar>
    <el-button @click="getContent">获取内容</el-button>
  </div>
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
      getContent() {
        alert(this.form.content);

      },
      //编辑器的内容赋值
      catchData(content) {
        let currentRange = window.getSelection().getRangeAt(0);
        this.rangenum = currentRange;
        this.form.content = content;
      }
    },


  }

</script>
