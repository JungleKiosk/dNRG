<script>
export default {
    name: "Navbar",
};
</script>


<template>
    <nav class="navbar">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/parameters">Parameters</router-link></li>
        </ul>
    </nav>
</template>


<style scoped>
.navbar {
    background-color: #2c3e50;
    padding: 1rem;
}

.navbar ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
}

.navbar li {
    margin-right: 20px;
}

.navbar a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
}

.navbar a:hover {
    text-decoration: underline;
}
</style>