核心安装 
"axios": "^0.18.0",
"google-protobuf": "^3.6.1",
"protobufjs": "^6.8.8"
protoc --js_out=import_style=commonjs,binary:. user.proto

生成的文件eslink校验不过 所以需要取消校验 再js文件最上面加一行数据  
/* eslint-disable */

前台调用的时候 一定要设置      
1.axios.defaults.responseType = 'arraybuffer'
2.headers: {'Accept': 'application/x-protobuf', 'Content-Type': 'application/x-protobuf'} 
这样才会采用protobuf的方式传输 不然默认是json格式解释接口解析一般都是支持多种格式 所以需要指定