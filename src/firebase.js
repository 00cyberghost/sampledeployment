import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getMessaging,
  getToken,
  onMessage,
  isSupported,
} from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAmr1OTKdoMLnif38gw1JiqkPoWrRQnqa8",
  authDomain: "grocerylist-jamaica.firebaseapp.com",
  projectId: "grocerylist-jamaica",
  storageBucket: "grocerylist-jamaica.appspot.com",
  messagingSenderId: "1097623423378",
  appId: "1:1097623423378:web:b9d0f02eb2a155905d594b",
  measurementId: "G-8EV8HE1HBT"
};
const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();
const messaging = (async () => {
  try {
    const isSupportedBrowser = await isSupported();
    if (isSupportedBrowser) {
      return getMessaging(firebaseApp);
    }
    return null;
  } catch (err) {
    return null;
  }
})();

export const fetchToken = async (setTokenFound, setFcmToken) => {
  return getToken(await messaging, {
    vapidKey: "BPnmtpVyBmkbQPI-c0wsXWmLfexcbzABDoLzxc-HoSixoMcdm98SqgSiULxaEG_tiZr8m_5rLE8x88QIQnvbX_g",
  })
    .then((currentToken) => {
      if (currentToken) {
        setTokenFound(true);
        setFcmToken(currentToken);

        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        setTokenFound(false);
        setFcmToken();
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.error(err);
      // catch error while creating client token
    });
};

export const onMessageListener = async () =>
  new Promise((resolve) =>
    (async () => {
      const messagingResolve = await messaging;
      onMessage(messagingResolve, (payload) => {
        resolve(payload);
      });
    })()
  );
