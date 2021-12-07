///with vie the semi colons are not always needed. they can be optional
const app = Vue.createApp({
    // data, functions or methods can be included here Html component templates as well
    // template: '<h2>I am a vue template boy</h2>'

    // adding data
    data() {
        return {
            title: "Design Capital",
            author: "kelvin Njuguna",
            age: 27,
            showBooks: true
        }

    },

    // adding a method
    methods: {
        changeTitle() {
            this.title = "The Vue Master"

        },

        newTitle(theNewTitle) {
            this.title = theNewTitle

        },
        toggleShowBooks() {

            // when the exclamation mark(!) is used it reverses the condition
            this.showBooks = !this.showBooks

        }
    }
})

//this mounts the function to a specified id.. i this case the id is CreateApp
app.mount('#CreateApp')