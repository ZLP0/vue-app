<template>
  <div id="wangeditor">
    <div ref="editorElem" style="text-align:left;"></div>
  </div>
</template>
<script>
  import E from 'wangeditor'
  import axios from 'axios'
  import {Loading, Message} from 'element-ui'

  export default {
    name: 'editorElem',
    data() {
      return {
        editor: null,
        editorContent: ''
      }
    },
    props: ['catchData', 'content'],    // 接收父组件的方法
    watch: {
      content() {
        this.editor.txt.html(this.content)
      }
    },

    mounted() {
      this.editor = new E(this.$refs.editorElem)
      this.editor.customConfig.onchange = (html) => {
        this.editorContent = html
        this.catchData(this.editorContent)  // 把这个html通过catchData的方法传入父组件
      },
      //去掉插入网络图片
      this.editor.customConfig.showLinkImg = false
      //粘贴来的内容过滤图片
      this.editor.customConfig.pasteIgnoreImg = true
      this.editor.customConfig.menus = [          // 菜单配置
        'head',  // 标题
        'bold',  // 粗体
        'fontSize',  // 字号
        'fontName',  // 字体
        'italic',  // 斜体
        'underline',  // 下划线
        'strikeThrough',  // 删除线
        'foreColor',  // 文字颜色
        'backColor',  // 背景颜色
        'link',  // 插入链接
        'list',  // 列表
        'justify',  // 对齐方式
        'quote',  // 引用
        // 'emoticon',  // 表情
        'image',  // 插入图片
        // 'table',  // 表格
        'code',  // 插入代码
        'undo',  // 撤销
        'redo'  // 重复
      ]
      // 下面是最重要的的方法
      // this.editor.customConfig.withCredentials = true
      // 将图片大小限制为 5M
      this.editor.customConfig.uploadImgMaxSize = 5 * 1024 * 1024
      //限制一次最多上传 1 张图片
      this.editor.customConfig.uploadImgMaxLength = 1
      this.editor.customConfig.customUploadImg = function (files, insert) {
        // files 是 input 中选中的文件列表
        // insert 是获取图片 url 后，插入到编辑器的方法
        // 因为file是个FormData格式的对象所以可以直接通过接口开始上传，不需要做多余操作
        //虽然文档说是FormData格式，但是我实际使用需要以下操作
        let formData = new FormData();
        formData.append('file', files[0]);

        let config = {
          //添加请求头
          headers: {"Content-Type": "multipart/form-data"},
        };
        axios
          .post("uploadUrl", formData, config)
          .then(res => {
            //todo 图片上传如何存储,具体要看上传接口返回的结果
            insert(res.data)
          })
          .catch(function (err) {
            console.log(err);
            console.log("获取信息失败");
          });
        // insert(imgUrl)

      }
      //自定义错误提示
      this.editor.customConfig.customAlert = function (info) {
        // info 是需要提示的内容，我使用的是elementUI的提示，不多介绍
        // alert('自定义提示：' + info)
        Message.warning({
          message: info,
        })
      }
      this.editor.create()     // 创建富文本实例
      if (!this.content) {
        // this.editor.txt.html('请编辑内容1')
      }
    }
  }
</script>




