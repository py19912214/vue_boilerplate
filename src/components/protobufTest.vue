<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="queryDemo">调用请求访问protobuf接口</button>
  </div>
</template>
<script>
import store from '../store/store.js'
import userpro from '../pro/user_pb.js'
const axios = require('axios')
export default {
  store,
  data () {
    return {
      msg: '测试protobuf'
    }
  },
  methods: {
    queryDemo: function (event) {
      var message = new userpro.User() // 调用Person对象  实例化
      // 赋值
      message.setId(23)
      message.setName('asd')
      // 序列化
      var bytes = message.serializeBinary()
      console.log('序列化:')
      console.log(bytes) // Uint8Array(7) [8, 23, 18, 3, 97, 115, 100]
      // 反序列化
      console.log('反序列化:')
      var message2 = userpro.User.deserializeBinary(bytes)
      console.log(message2) // proto.PersonTree {wrappers_: null, messageId_: undefined, arrayIndexOffset_: -1, array: Array(3), pivot_: 1.7976931348623157e+308, …}
      console.log(message2.getId())
      let url = 'http://localhost:8080/login'
      let options = {
        method: 'GET',
        headers: { },
        data: {},
        url
      }
      axios(options)
        .then(function (response) {
          console.log('调用接口返回数据')
          console.log(response)
          var message3 = userpro.User.deserializeBinary(response.data)
          console.log('接口数据解析')
          console.log(message3.getId())
        })
        .catch(function (error) {
          console.log(error)
        })
      // console.log(bytes)
    }
  }
}
</script>
