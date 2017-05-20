    export default () => {
      const OneSignal = window.OneSignal || [];
      OneSignal.push(['init', {
        appId: '5730a570-9af7-410f-9d95-5a8760a731c2',
        autoRegister: false,
        notifyButton: {
          enable: false,
        },
      }]);
    }

// function subscribe() {
//     OneSignal.push(["registerForPushNotifications"]);
//     event.preventDefault();
// }
// OneSignal.push(() => {
//   // If we're on an unsupported browser, do nothing
//   if (!OneSignal.isPushNotificationsSupported()) {
//     console.log('1');
//     return;
//   }
//   OneSignal.isPushNotificationsEnabled((isEnabled) => {
//     if (isEnabled) {
//       console.log('2');
//       // The user is subscribed to notifications
//       // Don't show anything
//     } else {
//       document.getElementByClassName('subscribe').addEventListener('click', subscribe);
//     }
//   });
// });
