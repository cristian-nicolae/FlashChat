import './App.scss';
import MainView from './components/main-view/MainView';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyAGDSdzZF4xDDtHulNeLJPeZcJth-hM5fE",
  authDomain: "flashchat-dt.firebaseapp.com",
  projectId: "flashchat-dt",
  storageBucket: "flashchat-dt.appspot.com",
  messagingSenderId: "509568857421",
  appId: "1:509568857421:web:aeb6dad4e98a91a930b304",
  measurementId: "G-0FWMQZTBBW"
})

const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <MainView />
    </div>
  );
}

export default App;
