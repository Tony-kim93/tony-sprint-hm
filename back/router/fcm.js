import express from 'express';
import admin from 'firebase-admin';
import serviceAccount from '../serviceAccountKey.json';

const router = express.Router();

router.get('/', (req, res, next) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  }

  let fcm_target_token =
    'dG036TneAp39RvqTlwUDa4:APA91bG_T5flOQ6_Dqo_OSxpCMLck_y6eypOHXJKSGBCCOBbORuqmcDh33MfgTCjuQGaAyf7XdZ-3XMmnOiAd0VrZBUH6UDFF7TeGEu_avlm8edYxQjs37HTgY2zvOJMO-GfLNdI94Kk';

  let message = {
    notification: {
      title: '이미지 업로드 성공',
      body: 'test'
    },
    token: fcm_target_token
  };
  admin
    .messaging()
    .send(message)
    .then(function (res) {
      console.log('fcm success', res);
    })
    .catch(function (err) {
      console.log(err);
    });
  return res.send('success');
});

export default router;

// test for background

// import express from 'express';
// import admin from 'firebase-admin';
// import serviceAccount from '../serviceAccountKey.json';

// const router = express.Router();

// router.get('/', (req, res, next) => {
//   if (res.status(200)) {
//     res.send('tony');
//   } else {
//     res.send('aa');
//   }
// });

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// let fcm_target_token =
//   'dG036TneAp39RvqTlwUDa4:APA91bFpB6JzSZ0ws3m2p--5RL8uvyyPBz5v-SM-iNGl5vthxcUGiqwXWYyfmURUCu68kcLuGiljNn821iWDQJYvYh1jtosJWkYTgK0lwOKGamWu1WG4jnxTMJJaNY8_e6muilYqLIUf';
// let fcm_message = {
//   notification: {
//     title: 'happy tony',
//     body: 'test'
//   },
//   token: fcm_target_token
// };
// admin
//   .messaging()
//   .send(fcm_message)
//   .then(function (res) {
//     console.log('메세지 보내기 성공', res);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// export default router;
