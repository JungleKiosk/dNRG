<script>
import ColorMode from "./ColorMode.vue";

export default {
    name: "Navbar",
    components: {
    ColorMode
  },
};
</script>


<template>
    <nav class="navbar justify-content-center">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/parameters">Parameters</router-link></li>
            <li><ColorMode></ColorMode></li>
        </ul>
    </nav>
</template>


<style>

</style>