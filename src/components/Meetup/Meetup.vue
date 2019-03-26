<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card-title>
          <h6 class="primary--text">{{meetup.title}}</h6>
        </v-card-title>
        <v-card-media src="meetup.imageUrl" height="400px"></v-card-media>
        <v-card-media>
          <v-card-text>
            <div>{{meetup.date}} -</div>
            <div>
              Talleres el mas grande de la historia,
              le ganamos 3 a 0 a Belgran, casificamos a la libertadores
              y quedamos afuera con Palestino
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">Register</v-btn>
          </v-card-actions>
        </v-card-media>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    props: ["id"],
    meetup() {
      return this.$store.getters.loadedMeetups()
    }
  }
};
</script>
