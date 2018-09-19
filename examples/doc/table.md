<script>
  module.exports = {
    data(){
      return {
        tableData:[
          {"createTime":"2018-09-10 15:29:35","fileId":1432049982374240,"isTranslate":true,"length":166854656,"name":"科技楼.rvt","sourceId":"f5f374c9f33b4a89b150fa7e135cd0f9","status":"success"},
          {"createTime":"2018-09-10 15:06:46","fileId":1432038710116704,"isTranslate":true,"length":166862848,"name":"广联达大厦-三维.rvt","sourceId":"8ceb365031c640e29fd097e324b5dab8","status":"success"},
          {"createTime":"2018-09-06 13:35:46","fileId":1429163229864128,"isTranslate":true,"length":7102464,"name":"七家塘.rvt","sourceId":"941c5d28d6784be792e1d173a52f6ff4","status":"success"},
          {"createTime":"2018-09-06 13:35:44","fileId":1429162869096608,"isTranslate":true,"length":158576640,"name":"先知楼-室外机.rvt","sourceId":"349d1e18000e4fcfa81344bc04e95c7d","status":"success"}
        ]
      }
    },

    methods:{
      download(id){
        console.log('要下载的文件fileId：' + id);
      },

      deleteFile(id){
        console.log('要删除的文件fileId：' + id);
      }
    }
  };
</script>

# Table -- 表格
----

### 基础用法
<div class="demo-block">
  <face-table :data="tableData">
    <tr>
      <th>ID</th>
      <th>Size</th>
      <th>Status</th>
      <th>CreateTime</th>
      <th>Control</th>
    </tr>
    <template slot="item" slot-scope="props">
      <tr>
        <td>
          {{ props.item.name }}
        </td>
        <td>{{(props.item.length/1024/1024).toFixed(2)}}Mb</td>
        <td>
          <span v-if="props.item.status == 'failed'">上传失败</span>
          <span v-if="props.item.status == 'success'">上传成功</span>
          <span v-if="props.item.status == 'uploading'">上传中</span>
        </td>
        <td>{{props.item.createTime}}</td>
        <td>
          <face-button size="small" type="primary" @click="download(props.item.fileId)">download</face-button>
          <face-button size="small" @click="deleteFile(props.item.fileId)">delete</face-button>
        </td>
      </tr>
    </template>
  </face-table>
</div>

::: demo
```html

<div>
  <face-table :data="tableData">
    <tr>
      <th>ID</th>
      <th>Size</th>
      <th>Status</th>
      <th>CreateTime</th>
      <th>Control</th>
    </tr>
    <template slot="item" slot-scope="props">
      <tr>
        <td>
          {{ props.item.name }}
        </td>
        <td>{{(props.item.length/1024/1024).toFixed(2)}}Mb</td>
        <td>
          <span v-if="props.item.status == 'failed'">上传失败</span>
          <span v-if="props.item.status == 'success'">上传成功</span>
          <span v-if="props.item.status == 'uploading'">上传中</span>
        </td>
        <td>{{props.item.createTime}}</td>
        <td>
          <face-button size="small" type="primary" @click="download(props.item.fileId)">download</face-button>
          <face-button size="small" @click="deleteFile(props.item.fileId)">delete</face-button>
        </td>
      </tr>
    </template>
  </face-table>
</div>

```
:::


### 带间隔纹
<div class="demo-block">
  <face-table :data="tableData" stripe>
    <tr>
      <th>ID</th>
      <th>Size</th>
      <th>Status</th>
      <th>CreateTime</th>
      <th>Control</th>
    </tr>
    <template slot="item" slot-scope="props">
      <tr>
        <td>
          {{ props.item.name }}
        </td>
        <td>{{(props.item.length/1024/1024).toFixed(2)}}Mb</td>
        <td>
          <span v-if="props.item.status == 'failed'">上传失败</span>
          <span v-if="props.item.status == 'success'">上传成功</span>
          <span v-if="props.item.status == 'uploading'">上传中</span>
        </td>
        <td>{{props.item.createTime}}</td>
        <td>
          <face-button size="small" type="primary" @click="download(props.item.fileId)">download</face-button>
        </td>
      </tr>
    </template>
  </face-table>
</div>

::: demo
```html

<div>
  <face-table :data="tableData" stripe>
    <tr>
      <th>ID</th>
      <th>Size</th>
      <th>Status</th>
      <th>CreateTime</th>
      <th>Control</th>
    </tr>
    <template slot="item" slot-scope="props">
      <tr>
        <td>
          {{ props.item.name }}
        </td>
        <td>{{(props.item.length/1024/1024).toFixed(2)}}Mb</td>
        <td>
          <span v-if="props.item.status == 'failed'">上传失败</span>
          <span v-if="props.item.status == 'success'">上传成功</span>
          <span v-if="props.item.status == 'uploading'">上传中</span>
        </td>
        <td>{{props.item.createTime}}</td>
        <td>
          <face-button size="small" type="primary" @click="download(props.item.fileId)">download</face-button>
        </td>
      </tr>
    </template>
  </face-table>
</div>

```
:::

### 带边框
<div class="demo-block">
  <face-table :data="tableData" border>
    <tr>
      <th>ID</th>
      <th>Size</th>
      <th>Status</th>
      <th>CreateTime</th>
      <th>Tag</th>
    </tr>
    <template slot="item" slot-scope="props">
      <tr>
        <td>
          {{ props.item.name }}
        </td>
        <td>{{(props.item.length/1024/1024).toFixed(2)}}Mb</td>
        <td>
          <span v-if="props.item.status == 'failed'">上传失败</span>
          <span v-if="props.item.status == 'success'">上传成功</span>
          <span v-if="props.item.status == 'uploading'">上传中</span>
        </td>
        <td>{{props.item.createTime}}</td>
        <td>
          <face-tag type="success">success</face-tag>
        </td>
      </tr>
    </template>
  </face-table>
</div>

::: demo
```html

<div>
  <face-table :data="tableData" border>
    <tr>
      <th>ID</th>
      <th>Size</th>
      <th>Status</th>
      <th>CreateTime</th>
      <th>Tag</th>
    </tr>
    <template slot="item" slot-scope="props">
      <tr>
        <td>
          {{ props.item.name }}
        </td>
        <td>{{(props.item.length/1024/1024).toFixed(2)}}Mb</td>
        <td>
          <span v-if="props.item.status == 'failed'">上传失败</span>
          <span v-if="props.item.status == 'success'">上传成功</span>
          <span v-if="props.item.status == 'uploading'">上传中</span>
        </td>
        <td>{{props.item.createTime}}</td>
        <td>
          <face-tag type="success">success</face-tag>
        </td>
      </tr>
    </template>
  </face-table>
</div>

```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data     | 数据列   | Array  |   —  |   []     |
| border     | 是否边框   | Boolean    |  — |   false   |
| stripe     | 是否带间隔纹   | Boolean    | — | false   |

