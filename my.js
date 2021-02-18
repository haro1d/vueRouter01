const Home = {

    template: `<div class="r04"><h2>home</h2></div>`
}

const Foo = {

    data: function () {
        return {
            fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
        };
        
    },

    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
    },

    template: `<div><el-upload class ="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" list-type="picture">
    <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class ="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>

  <div v-for="(item,index) in fileList">
    <div>{{item.name}}: {{item.url}}</div>

  </div>
</div>`
}
