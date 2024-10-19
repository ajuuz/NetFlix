import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import {addDoc, collection, getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBQ8RCmKOzQjku8VquT1TEzTopWiIEBnx4",
  authDomain: "netflix-51138.firebaseapp.com",
  projectId: "netflix-51138",
  storageBucket: "netflix-51138.appspot.com",
  messagingSenderId: "833345825191",
  appId: "1:833345825191:web:ef0da7a96eb16fdc6fae82"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password,showErrorModal)=>{
    try{
       const res =  await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user;
        await addDoc(collection(db,"users"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        })
    }
    catch(err){
        console.error(err)
        showErrorModal(err.message)
    }
}

const login= async (email,password,showErrorModal)=>{
     try{
        await signInWithEmailAndPassword(auth,email,password);
     }
     catch(err){
        console.error(err);
        showErrorModal(err.message)
     }
}

const logout =  () =>{
    signOut(auth);
}

export {auth,db,login,signup,logout};