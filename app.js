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
            showBooks: true,
            x: 0,
            y: 0,
            url: 'facebook.com',

            books: [
                { title: "The big guy", writer: "Kinoti Fredrick", img: 'assets/someSup.jpg', isFav: true },
                { title: "The way of kings", writer: "Kinoti Fredrick", img: 'assets/someWoman.jpg', isFav: false },
                { title: "The final empire", writer: "Kinoti Fredrick", img: 'assets/someBat.jpg', isFav: true }
            ]
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

        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }

        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        changeFav(item) {
            item.isFav = !item.isFav
        }
    },

    // computed property
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

//this mounts the function to a specified id.. i this case the id is CreateApp
app.mount('#CreateApp')