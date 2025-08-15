// --- Firebase v10 compat 초기화 공통 파일 ---
// ⚠️ 이 파일 하나만 만들고, 모든 HTML에서 <script src="firebase-init.js"></script> 로 불러오세요.
const firebaseConfig = {
  apiKey: "AlzaSyCr516GzQlQu6ev5K9GKwlE--6GWjPSjKw",
  authDomain: "novel-app-33aa7.firebaseapp.com",
  projectId: "novel-app-33aa7",
  storageBucket: "novel-app-33aa7.appspot.com",
  messagingSenderId: "791233454587",
  appId: "1:791233454587:web:20319c91ca14d34bdc6b5e",
  measurementId: "G-BXT8Y97XW2",
};
firebase.initializeApp(firebaseConfig);

// 전역으로 auth/db 노출
window.auth = firebase.auth();
window.db = firebase.firestore();

// 닉네임→가짜 이메일 (ex: andy → andy@novel.local)
window.nickToEmail = (nick) => `${nick}@novel.local`;
