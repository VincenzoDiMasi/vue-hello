console.log('Vue OK', Vue);

const app = Vue.createApp({
    data(){
        return {
            hello: 'Hello Vue'
        }
    }
});

app.mount('#root');