protoc --js_out=import_style=commonjs,binary:. user.proto

生成的文件eslink校验不过 所以需要取消校验 再js文件最上面加一行数据  
/* eslint-disable */