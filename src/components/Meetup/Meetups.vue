<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-md2>
        <v-card class="primary">
          <v-container fluid>
            <v-layout>
              <v-flex xs md3>
                <v-card-media
                  src="https://bucket3.glanacion.com/anexos/fotos/17/2894617w380.jpg"
                  height="130px"
                ></v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title>
                  <div>
                    <h5>My Meetupd</h5>
                    <div>17th July 2017</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn flat to="/meetups/1"> 
                        <v-icon left light>arrow_forward</v-icon>
                        View Meetup
                    </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
