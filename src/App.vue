<template>
  <main class="main">
    <header>
      <nav id="nav" class="navbar">
        <router-link to="/">Home</router-link>
        <router-link to="/">Favoris</router-link>
      </nav>
    </header>
    <router-view />
  </main>
</template>

<style lang="scss">
/* The navigation bar */
.navbar {
  display: flex;
  justify-content: center;
  overflow: hidden;
  background-color: #333;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
}

/* Links inside the navbar */
.navbar a {
  color: #f2f2f2;
  text-align: center;
  flex: 1 1 0;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change background on mouse-over */
.navbar a:hover {
  background: #f2f2f2;
  color: black;
}

/* Main content */
.main {
  margin-top: 60px; /* Add a top margin to avoid content overlay */
}
</style>
