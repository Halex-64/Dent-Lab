const firebaseConfig = {
    apiKey: "AIzaSyBx8u9jB4dQuqsySR4del3nP522Y4WPkeU",
    authDomain: "dent-lab-b6e19.firebaseapp.com",
    projectId: "dent-lab-b6e19",
    storageBucket: "dent-lab-b6e19.appspot.com",
    messagingSenderId: "837276091648",
    appId: "1:837276091648:web:26c113de0c070915d69fe5",
    measurementId: "G-YML04R3J1H"
  };

  //inicializa o site com firebase
  firebase.initializeApp(firebaseConfig);
  //cria o obj da autenticção para que eu possa usar seus métodos
  const auth = firebase.auth();
  // cria o obj do banco de dados Firestore para que eu possa usar seus métodos
  const db = firebase.firestore();