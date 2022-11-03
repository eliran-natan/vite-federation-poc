<script>

export default {
  name: "Welcome"
}
</script>

<template>
    <div class="wrapper">
        <div class="logo">
            <img src="./shell.png"/>
        </div>
        <div class="title">
            Welcome to the shell app!
        </div>
        <div class="info">
            This app uses Vite and Module Federation to implement Micro-Frontend architecture. 
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