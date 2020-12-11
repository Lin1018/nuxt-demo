<template>
  <section class="container">
    <div>
      <el-button type="primary">element ui</el-button>
      <app-logo/>
      <div @click="skipDetail(1)">skip news 1</div>
      <div @click="skipDetail(2)">skip news 2</div>

      <ul>
        <li v-for="(item, index) in list1.product" :key="index" @click="skipDetail(item._id)">
          <span>{{item.title}}</span>
        </li>
      </ul>
      <br>
      <ul>
        <li v-for="(item, index) in list2.product" :key="index" @click="skipDetail(item._id)">
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import { getData } from '@/api/product'

export default {
  async asyncData() {
    var [data1, data2] = await Promise.all([
      getData({
        pageNumber: 1,
        pageSize: 6
      }),
      getData({
        pageNumber: 1,
        pageSize: 3
      })
    ])
    
    var list1 = data1.data
    var list2 = data2.data
    return {
      list1: list1,
      list2: list2
    }
  },
  mounted() {
    var params = {
      pageNumber: 1,
      pageSize: 4
    }
    getData(params).then(res => {
      this.$message({  
        message: res.sucMsg || '请求成功',  
        type: 'success',  
        duration: 1 * 1000 
      })
      console.log(res)
    })
  },
  methods: {
    skipDetail(id) {
      this.$router.push({
        path: '/news/' + id
      })
    }
  },
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

