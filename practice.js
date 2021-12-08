const practiceApp = Vue.createApp({
    data() {
        return {
            title: "Just getting started",
            age: 23,
            showBooks: true
        }
    },
    methods: {
        changeTitle() {
            this.title = "When you are good at something, you tell people, but when you are great at something people tell you"
        },
        toggleVisibility() {

            // when the exclamation mark(!) is used it reverses the condition
            this.showBooks = !this.showBooks
            console.log(this.showBooks);

        }

    }
})
practiceApp.mount("#practiceApp")