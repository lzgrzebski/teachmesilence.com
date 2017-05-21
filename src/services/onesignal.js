import settings from './settings';

let OneSignal;

export default (enableNotifications) => {
  if (OneSignal) return;

  OneSignal = window.OneSignal || [];
  OneSignal.push(['init', {
    appId: settings.oneSignalId,
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
