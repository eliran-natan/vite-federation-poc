<script>

export default {
  name: "Welcome"
}
</script>

<template>
    <div class="wrapper">
        <div class="title">
            Welcome to the Axonius app!
        </div>
        <div class="info">
            Made with Vite + Vue3
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .wrapper {
        display: flex;
        width: 100%;
        flex-direction: column;
        padding: 20px;
        text-align: center; 
        padding: 50px;
        .logo {
            margin-top: 50px;
            img {
                width: 190px;
            }
        }
        .title {
            font-size: 35px;
            margin-top: 50px;
            font-weight: bold;
        }
        .info {
            font-size: 25px;
            margin-top: 50px;
            padding-right: 100px;
            padding-left: 100px;
        }
    }

</style>