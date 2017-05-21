    let OneSignal;

    export default (enableNotifications) => {
      if (OneSignal) return;

      OneSignal = window.OneSignal || [];
      OneSignal.push(['init', {
        appId: '5730a570-9af7-410f-9d95-5a8760a731c2',
        autoRegister: false,
        persistNotification: false,
        notifyButton: {
          enable: false,
        },
      }]);

      OneSignal.push(() => {
        if (!OneSignal.isPushNotificationsSupported()) return;

        OneSignal.isPushNotificationsEnabled((isEnabled) => {
          if (isEnabled) {
            console.log('2');
          } else {
            enableNotifications();
          }
        });
      });

      OneSignal.push(() => {
        OneSignal.on('subscriptionChange', (isSubscribed) => {
          console.log("The user's subscription state is now:", isSubscribed);
        });
      });
    };
