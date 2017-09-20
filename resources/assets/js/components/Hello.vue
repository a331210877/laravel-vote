<template>
    <div>
        <h1>Hello, Larvuent!</h1>
        <el-button @click="visible = true">按钮</el-button>
        <el-dialog v-model="visible">
            <h1>欢迎使用 Element!!!</h1>
        </el-dialog>
        <group>
          <cell title="title" value="value"></cell>
        </group>
    </div>
</template>
    
<script>

import { Group, Cell } from 'vux'

export default {
    data() {
        return {
            visible: false
        }
    },
    components: {
        Group,
        Cell
    }
}
</script>
    
<style>
    .hello {
        font-size: 2em;
        color: green;
    }
</style>