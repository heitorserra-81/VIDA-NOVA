// Vida Nova — Service Worker de notificações push
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAts9fsoZ_GrF3MRHDRlAw61Xti2uBkdnM",
  authDomain: "staffcheck-d6f20.firebaseapp.com",
  projectId: "staffcheck-d6f20",
  storageBucket: "staffcheck-d6f20.firebasestorage.app",
  messagingSenderId: "1055570421019",
  appId: "1:1055570421019:web:7b5dcc564bfe1c30189fbe"
});

const messaging = firebase.messaging();

// Notificações quando o app está fechado ou em segundo plano
messaging.onBackgroundMessage(function(payload) {
  const titulo = (payload.notification && payload.notification.title) || 'Vida Nova 🌱';
  const corpo  = (payload.notification && payload.notification.body)  || '';
  return self.registration.showNotification(titulo, {
    body: corpo,
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/240px-SNice.svg.png',
    badge: '',
    vibrate: [200, 100, 200],
    tag: 'vidanova-push'
  });
});
