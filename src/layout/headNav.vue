<template>
  <header class="head-nav" id='header_container'>
    <el-row style="margin:0 10px;">
      <el-col :span="6" class='logo-container'>
        <img src="../assets/img/logo.gif" class='logo' alt="">
        <span class='title'>飞翔小码</span>
      </el-col>

      <div class="userinfo">
        <router-link to="homePay">
          <a   style="color: red">去赞助</a>
        </router-link>

        <img src="../assets/img/xiaoma.jpg" class='avatar' alt="">
        <div class='welcome'>
          <p class='name comename'>欢迎</p>
          <p class='name avatarname'>{{userinfo}}</p>
        </div>
        <span class='username'>
          <el-dropdown
            trigger="click"
            @command='setDialogInfo'>
            <span class="el-dropdown-link">
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command='info'>修改信息</el-dropdown-item>
              <el-dropdown-item command='pass'>修改密码</el-dropdown-item>
              <el-dropdown-item command='logout'>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </span>
        <i class="fa fa-sign-out logout" @click='logout'></i>
      </div>
    </el-row>


  </header>
</template>

<script>

  export default {
    name: 'head-nav',
    data() {
      return {
        userinfo: this.$store.state.user.userinfo,
        dialogVisible: false  //是否显示 用户对话框
      }
    },
    created() {

    },
    methods: {
      logout() {
        this.$router.push('/login');
      },
      showInfoList() {

      },
      /**
       * 弹出框-修改密码或者系统设置
       * @param {string} cmditem 弹框类型
       */
      setDialogInfo(cmditem) {

        if (!cmditem) {
          console.log('test');
          this.$message('菜单选项缺少command属性');
          return;
        }
        switch (cmditem) {
          case 'info':

            this.$router.push('/userInfo');

          case 'pass':
            this.showInfoList();
            break;
          case 'logout':
            this.logout();
            break;
        }
      },

      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },

    }
  }
</script>

<style scoped lang='less'>
  .logo-container {
    margin-top: -15px;
    line-height: 30px;
    min-width: 400px;


    .logo {
      margin-left: -200px;
      height: 50px;
      width: 50px;
      margin-right: 5px;
      vertical-align: middle;
      display: inline-block;
    }

    .title {
      vertical-align: middle;
      font-size: 22px;
      font-family: cursive;
      letter-spacing: 3px;
    }

  }

  .head-nav {
    width: 100%;
    height: 30px;
    min-width: 600px;
    padding: 5px;
    background-color: rgb(93, 104, 121);
    //background: url('../assets/img/zhi001.png')  no-repeat center ;
    background-size: 1920px auto;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 100;
    color: #FFF;

    .logout {
      vertical-align: middle;
      cursor: pointer;
    }

  }

  .userinfo {
    line-height: 30px;
    text-align: right;
    float: right;
    margin-top: -17px;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
    display: inline-block;
  }

  .welcome {
    display: inline-block;
    width: auto;
    vertical-align: middle;
    padding: 0 5px;

    .name {
      line-height: 20px;
      text-align: center;
      font-size: 14px;
    }

    .comename {
      font-size: 12px;
    }

    .avatarname {
      font-size: 13px;
      color: #a9d86e;
      font-weight: bolder;
      margin-top: -10px;
    }

  }

  .username {
    cursor: pointer;
    margin-right: 5px;

    .el-dropdown {
      color: #FFF;
    }

  }

  .border {
    border: 1px solid;
  }

  .notify-row {
    line-height: 60px;
    float: right;
    margin-right: 20px;
    margin-top: 5px;
  }

  ul.top-menu > li {
    float: left;
    margin-right: 20px;
  }

  ul.top-menu > li > a {
    color: #3bc5ff;
    font-size: 16px;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    border: 1px solid #f0f0f8 !important;
    padding: 2px 6px 4px 6px;
  }
</style>
