<template>
  <div id="app">
    <header>
      <!-- (╯°□°）╯︵ ┻━┻ -->
    </header>

    <main>
      <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
    </main>

    <footer>
      Vue Mixin Usage, version
      <code>{{ this.$version }}</code>
    </footer>
  </div>
</template>

<script>
import ComponentOne from "./components/ComponentOne.vue";
import ComponentTwo from "./components/ComponentTwo.vue";
import ComponentThree from "./components/ComponentThree.vue";

export default {
  name: "app",
  components: {
    ComponentOne,
    ComponentTwo,
    ComponentThree
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  max-width: 200px;
  margin: 0 auto;
}

header,
main,
footer {
  margin: 20px;
}

header {
  margin-bottom: 60px;
}

main {
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
}

footer {
  margin-top: 120px;
}
</style>
