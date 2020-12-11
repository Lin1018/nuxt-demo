<template>
  <div class="news">
      <h3>news</h3>
      <span>{{$route.params.id}}</span>
      <p class="text">我是scss编写的样式</p>
      <nuxt-link :to="{path: '/'}">首页</nuxt-link>
      <button @click="back">返回</button>
      <div class="box"></div>
  </div>
</template>

<script>
    export default {
        name: 'newsDetail',
        validate({params}) {
            if (params.id) {
                return true
            } else {
                return false
            }
        },
        methods: {
            back() {
                this.$router.back()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .news {
        .text {
            color: red;
            font-size: 36px;
        }
        .box {
            width: 100px;
            height: 100px;
            border: 1px solid red;
            box-sizing: border-box;
        }
    }
</style>