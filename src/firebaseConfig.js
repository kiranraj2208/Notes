import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyAXtiYTdRdpeDkC1PurRqSCfXLO7Mp0OGg",
    authDomain: "my-projects-ea4f4.firebaseapp.com",
    databaseURL: "https://my-projects-ea4f4.firebaseio.com",
    projectId: "my-projects-ea4f4",
    storageBucket: "my-projects-ea4f4.appspot.com",
    messagingSenderId: "743992458057",
    appId: "1:743992458057:web:b482ff2ceb471822"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}

export default Firebase;