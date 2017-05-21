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
      if (!isEnabled) enableNotifications(true);
    });

    OneSignal.on('subscriptionChange', (isSubscribed) => {
      if (isSubscribed) enableNotifications(false);
    });

    OneSignal.on('notificationPermissionChange', (permissionChange) => {
      if (permissionChange.to === 'denied') {
        enableNotifications(false);
      } else if (permissionChange.to === 'default') {
        enableNotifications(true);
      }
    });
  });
};
