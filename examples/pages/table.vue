<template>
  <div class="components-wrap">
    <h2>Table -- 表格</h2>

    <h4>基本用法</h4>
    <div class="demo-row">
      <face-table>
        <tr slot="ths">
          <th>ID</th>
          <th>Project</th>
          <th>Version</th>
        </tr>
        <template slot="item" scope="props">
          <tr>
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.project.name }}</td>
            <td></td>
          </tr>
        </template>
      </face-table>
    </div>

    <h4>带边框</h4>
    <div class="demo-row">
      <face-table border>
        <tr slot="ths">
          <th>ID</th>
          <th>Project</th>
          <th>Version</th>
        </tr>
        <template slot="item" scope="props">
          <tr>
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.project.name }}</td>
            <td></td>
          </tr>
        </template>
      </face-table>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .demo-row {

  }
</style>
