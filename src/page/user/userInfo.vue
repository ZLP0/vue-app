<template>
  <el-form>


    <el-form-item>
      <el-col class="line" :span="10">
        <el-input type="text" v-model="userName" auto-complete="off" placeholder="网名"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item>
      <el-col class="line" :span="1">
        头像
      </el-col>

      <el-col class="line" :span="4">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>

      </el-col>
    </el-form-item>


    <el-form-item>
      <el-row type="flex" justify="start">
        <el-col span="1">
          <el-button type="primary" @click="upload()">修改</el-button>
        </el-col>
      </el-row>

    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        userName: '',
        imageUrl: ''
      };
    },
    methods: {
      upload() {

        //更新基本信息
        let fd = new FormData()
        fd.append('userName', this.userName);
        this.$axios.post("/upload/img", fd, config).then(res => {

        }).catch(res => {
        })



      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);

        //--------------上传图片------------------------------//
        let fd = new FormData()
        fd.append('img', file);
        let config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        this.$axios.post("/upload/img", fd, config).then(res => {

        }).catch(res => {
        })
        //--------------上传图片------------------------------//
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }


      }

    }

  }
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
