<template>
  <v-app>
    <div class="app_organizer">
      <div class="menu_organizer">
        <span class="menu_home" @click=handleClick(home)>
          Mathieu
        </span>
        <div class="menu_item">
          <div v-for=" item in menuItems" :key="item" @click="handleClick(item)" class="items">
            <span>{{item}}</span>
          </div>
        </div>

        <a href="https://github.com/Douckies?tab=repositories" target="_blank" rel="noopener noreferrer" class="icons">
          <v-icon medium class="icons">mdi-github</v-icon>
        </a>

        <a href="https://www.instagram.com/mathieu_laloy/" target="_blank" rel="noopener noreferrer" class="icons"
          style="margin-right:10%">
          <v-icon medium>mdi-instagram</v-icon>
        </a>
      </div>

      <v-main class="projet_content">
        <router-view />
      </v-main>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      home: "/",
      hover: false,
      menuItems: ["Personnal", "Skills", "Experience"]
    }
  },

  methods: {
    handleClick(route) {
      this.$router.push(route)
    }
  }
}

</script>

<style>
.app_organizer {
  font-family: monaco, Consolas, "Lucida Console", monospace;
  height: 90%;
}

.projet_content {
  margin: auto;
  height: 90%;
}

.menu_organizer {
  margin: 15px;
  display: flex;
  align-items: center;
}

.menu_organizer span:hover {
  color: #979797;
  cursor: pointer;
  transition-duration: 0.7s;
}

.menu_home {
  margin-left: 10%;
}

.menu_item {
  width: 80%;
}

.items {
  float: right;
  margin-right: 6%;
  padding: 10px
}

.icons {
  margin-right: 2%;
  text-decoration: none;
}

.icons:hover {
  text-decoration: none;
}

img:hover {
  cursor: pointer;
}
</style>
