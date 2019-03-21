<template>
  <v-app> <!-- Pagina completa-->
    <v-toolbar dark class="primary"><!-- Barra de herramietntas-->
         <v-toolbar-side-icon 
         @click="sideNav = ! sideNav"
         class="hidden-sm-and-up "></v-toolbar-side-icon>
         <v-toolbar-title>Dev-Meetup</v-toolbar-title><!-- Titulo Barra de herramietntas-->
         <v-spacer></v-spacer><!--Me hace el espacio Entre botton (uno en cada esquina)-->
         <v-toolbar-item class="hidden-xs-only"><!-- Item Barra de herramietntas-->
           <v-btn flat v-for="item in menuItems" :key="item.title"> 
             <v-icon left dark>{{item.icon }}</v-icon> <!-- Icono de las personas-->
            {{ item.title}}
           </v-btn><!-- Boton Barra de herramietntas-->
         </v-toolbar-item>
    </v-toolbar>
   <v-navigation-drawer v-model="sideNav"> <!-- el v-moodel(boobleano) para que se abra o no el navegador lateral-->
     <v-list>
       <v-list-tile v-for="item in  menuItems" :key="item.tiltle">
       <v-list-tile-action>
         <v-icon>{{item.icon}}</v-icon>
       </v-list-tile-action>
    <v-list-tile-content> View Meetups</v-list-tile-content>
     </v-list-tile>
     </v-list>
     
   </v-navigation-drawer>
    <main>
      <router-view></router-view>

    </main>
  </v-app>
</template>

<style lang="stylus">
@import './stylus/main';
</style>

 <script>
export default{
  data () {
    return {
      sideNav: false,
      menuItems: [
        {icon: 'supervisor_account', title: 'View Meetups'},
        {icon: 'room', title: 'Organize Meetup'},
        {icon: 'person', title: 'Profile'},
        {icon: 'face', title: 'Sign up'},
        {icon: 'lock_open', title: 'Sign in'}
      ]
    }
  }
}
</script>
