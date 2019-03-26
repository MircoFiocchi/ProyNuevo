import Vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            { imageUrl: 'https://bucket3.glanacion.com/anexos/fotos/17/2894617w380.jpg', id: 'mirco', title: 'Meetup in NY', date: '2017-01-17' },
            { imageUrl: 'https://cdnmd.lavoz.com.ar/sites/default/files/styles/width_1072/public/nota_periodistica/hinchada-tallere.jpg', id: '', title: 'Meetup in T', date: '2017-01-19' },
            
        ]
    },
    user: {
        id: "mirco",
        registeredMeetups: [mirco],

    },
    mutations: {},
    actions: {},
    getters: {
        loadedMeetups(state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        feturedMeetups(state, getters) {
            return getters.loadedMeetups.slice(0, 5)
        },
        loadedMeetup(state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id == meetupId
                })
            }
        }
    }
})