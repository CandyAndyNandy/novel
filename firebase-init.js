// firebase-init.js  (모든 페이지에서 공통으로 불러옵니다)
const firebaseConfig = {
  apiKey: "여기에 콘솔의 웹 API 키 그대로 붙여넣기 (반드시 AI로 시작)",
  authDomain: "novel-app-33aa7.firebaseapp.com",
  projectId: "novel-app-33aa7",
  storageBucket: "novel-app-33aa7.appspot.com",
  messagingSenderId: "791233454587",
  appId: "1:791233454587:web:20319c91ca14d34bdc6b5e",
  measurementId: "G-BXT8Y97XW2"
};

try { firebase.initializeApp(firebaseConfig); } catch(e) { /* already init */ }
window.auth = firebase.auth();
window.db   = firebase.firestore();
window.nickToEmail = (nick) => `${nick}@novel.local`;
