console.log('Vue OK', Vue);

const app = Vue.createApp({
    data(){
        return {
            hello: 'Hello Vue',
            picture: 'https://picsum.photos/150',
            alt: 'Img'
        }
    }
});

app.mount('#root');