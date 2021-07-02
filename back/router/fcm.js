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
    'dG036TneAp39RvqTlwUDa4:APA91bGHdT4bkcraUlaLKjnMDDSYhxIOGvN9srhvT800f2ItSmyZqOVss8ar3pKu2hd8OGycHzZvCXkAFjOwhnGQyaqv0UixtANStSi2FFiK7kbkKI49Cr5P9z7uYu4jI_H-zvis2rcO';

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
