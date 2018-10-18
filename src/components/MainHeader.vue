<template>
    <div class="main-header-container">
        <img class="main-app-logo" alt="Vue logo" src="../assets/oruzLogo.png">

        <div class="right-container">
            <button class="main-header-button login-button">Login</button>
            <button class="main-header-button join-in-button">Join</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MainHeader',
  props: {}
}
</script>

<style scoped>
    .main-header-container {
        position: fixed;
        width: 100%;
        height: 80px;
        background-color: white;
    }

    .main-app-logo {
        float: left;
        padding: 12px;
        padding-left: 120px;
        height: 55px;
        width: 140px;
        cursor: pointer;
    }

    .right-container {
        float: right;
        margin: 25px 120px;
    }

    .main-header-button {
        width: 100px;
        height: 30px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
    }

    .login-button{
        background-color: #C5B358;
        color: white;
    }

    .join-in-button {
        margin-left: 20px;
        color: #C5B358;
        background-color: white;
        border: #C5B358 1px solid;
    }

    .join-in-button:hover {
         background-color: #C5B358;
         color: white;
         transition: 1s;
    }
</style>
