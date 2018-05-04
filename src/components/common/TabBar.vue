<template>
<div class="tabbar">
    <yd-tabbar class="tabbar" >
          <yd-tabbar-item  v-for="(item,index) in List" :key="index" v-if="$route.path==item.path" active :title="item.label" :link="item.path" >
              <yd-icon  :name="item.name" slot="icon" size="1.3rem"  ></yd-icon>
          </yd-tabbar-item>
          <yd-tabbar-item v-else :title="item.label" :link="item.path" >
              <yd-icon  :name="item.name" slot="icon" size="1.3rem"  ></yd-icon>
          </yd-tabbar-item>
    </yd-tabbar>
</div>

</template>

<script type="text/babel">
export default {
  data () {
    return {
      List: [
        {
          name: 'home',
          label: '首页',
          path: '/'
        },
        {
          name: 'order',
          label: '已借图书',
          path: '/book'
        },
        {
          name: 'ucenter',
          label: '个人中心',
          path: '/personal'
        }
      ]
    }
  }
}
</script>
<style scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.active {
  color: red;
}
</style>
