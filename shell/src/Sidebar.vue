<script>

export default {
  name: "Sidebar"
}
</script>

<template>
    <div class="wrapper">
        <div class="item" @click="$emit('selected',0)">
            <div class="title">
                Home
            </div>
            <div class="code info">
                <i>Dashboard</i> from <i>Axonius</i>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .wrapper {
        display: flex;
        width: 100%;
        flex-direction: column;
        padding: 20px;
        .item {
            width: 100%;
            padding: 20px;
            border: 1px solid #eee;
            border-radius: 6px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            .title {
                font-size: 18px;
            }
            .info {
                font-size: 14px;
                margin-top: 10px;
            }
        }
    }

</style>