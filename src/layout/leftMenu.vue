<template>
  <el-row class="menu_page">
    <el-col>
      <el-menu
        mode="vertical"
        theme="dark"
        class="el-menu-vertical-demo"
        :default-active="$route.path"
        :collapse="isCollapse"
        background-color="#324057"
        text-color="#fff"
        active-text-color="#ff6428"
        @open="handleOpen" @close="handleClose">
        <template v-for="(item,index) in lefeMenuList">

          <!--表示 有二级菜单 -->
          <el-submenu style="text-align: left" v-if="item.children  && item.children.length > 0 && !item.noDropdown"
                      :index="item.path" :key="index">
            <template slot="title">
              <i :class="'fa-lg fa fa-margin '+item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </template>
            <router-link v-for="(citem,cindex) in item.children" :to="citem.path" :key="index+'_'+cindex">
              <el-menu-item
                :index='citem.path'>
                <span slot="title">{{citem.name}}</span>
              </el-menu-item>
            </router-link>
          </el-submenu>


          <!--表示 有一级菜单 noDropdown:true--><!--key 不能重复-->
          <router-link :to="item.path" :key="item.path+index">
            <el-submenu class="dropItem" style="text-align: left"
                        v-if="item.noDropdown"
                        :index="item.path"
            >
              <template slot="title">
                <i :class="'fa fa-margin  '+item.icon"></i>
                <span class="23">{{item.name}}</span>
              </template>

            </el-submenu>
          </router-link>
        </template>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>


  export default {
    name: "left-Menu",
    data() {
      return {
        isDropdown: false
      };
    },
    computed: {
      lefeMenuList() {
        console.log(this.$store.state.menu.items)
        return this.$store.state.menu.items;
      },
      isDropname() {  // false
        return this.$store.state.menu.isDropname;
      },
      isCollapse() {
        return this.$store.state.menu.isCollapse;
      }
    },
    created() {
      console.log(this.$store.state.menu.items);
    },
    methods: {
      showDropdown() {
        this.isDropdown = this.$store.state.menu.isCollapse;
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>


<style lang="less" scoped>


  .menu_page {
    position: fixed;
    top: 40px;
    left: 0;
    min-height: 100%;
    background-color: #324057;
    z-index: 99;
  }

  .fa-margin {
    margin-right: 5px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 180px;
    min-height: 400px;
  }

  .el-menu-vertical-demo {
    width: 35px;
  }

  .el-submenu .el-menu-item {
    min-width: 180px;
  }

  .el-menu {
    .el-menu-item {
      padding-left: 40px !important;
    }
  }

  .hiddenDropdown,
  .hiddenDropname {
    display: none;
  }

  .router-link-active {
    li {
      .el-submenu__title {
        color: #ff6428 !important;
      }
    }
  }
</style>
