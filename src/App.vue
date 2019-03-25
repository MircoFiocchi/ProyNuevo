<template>
  <v-app>
    <!-- Pagina completa-->
    <v-toolbar dark class="primary">
      <!-- Barra de herramietntas-->
      <v-toolbar-side-icon @click="sideNav = ! sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursos: pointer">
          <!-- cambia el cursor-->
          Dev-Meetup
        </router-link>
      </v-toolbar-title>
      <!-- Titulo Barra de herramietntas-->
      <v-spacer></v-spacer>
      <!--Me hace el espacio Entre botton (uno en cada esquina)-->
      <v-toolbar-item class="hidden-xs-only">
        <!-- Item Barra de herramietntas-->
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left dark>{{item.icon }}</v-icon>
          <!-- Icono de las personas-->
          {{ item.title}}
        </v-btn>
        <!-- Boton Barra de herramietntas-->
      </v-toolbar-item>
    </v-toolbar>
     <router-view></router-view>
    <v-navigation-drawer temporary v-model="sideNav">
      <!-- el v-moodel(boobleano) para que se abra o no el navegador lateral-->
      <v-list>
        <v-list-tile v-for="item in  menuItems" :key="item.tiltle" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <main>
    </main>
  </v-app>
</template>

<style lang="stylus">
@import './stylus/main';
</style>

 <script>
export default {
  data() {
    return {
      sideNav: false,
      menuItems: [
        { icon: "supervisor_account", title: "View Meetups", link: "/meetups" },
        { icon: "room", title: "Organize Meetup", link: "/meetups/new" },
        { icon: "person", title: "Profile", link: "/profile" },
        { icon: "face", title: "Sign up", link: "/signup" },
        { icon: "lock_open", title: "Sign in", link: "/signin" }
      ]
    };
  }
};
</script>
