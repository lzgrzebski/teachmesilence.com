import settings from './settings';
import ga from './ga';

let OneSignal;

export default (enableNotifications) => {
  if (OneSignal) return;
  OneSignal = window.OneSignal || [];
  OneSignal.push(['init', {
    appId: settings.oneSignalId,
    safari_web_id: settings.oneSignalSafariId,
    autoRegister: false,
    persistNotification: false,
    notifyButton: {
      enable: false,
    },
  }]);

  OneSignal.push(() => {
    const isSupported = OneSignal.isPushNotificationsSupported();
    ga()(
          'send',
          'event',
          'pushNotifications',
          'isSupported',
          isSupported.toString(),
        );

    if (!isSupported) return;

    OneSignal.isPushNotificationsEnabled((isEnabled) => {
      if (!isEnabled) enableNotifications(true);
      ga()(
          'send',
          'event',
          'pushNotifications',
          'isPushNotificationsEnabled',
          isEnabled.toString(),
        );
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
