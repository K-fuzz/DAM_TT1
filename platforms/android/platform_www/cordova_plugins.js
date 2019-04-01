cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification_android",
      "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection",
        "navigator.network.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "cordova-plugin-device-motion.Acceleration",
      "file": "plugins/cordova-plugin-device-motion/www/Acceleration.js",
      "pluginId": "cordova-plugin-device-motion",
      "clobbers": [
        "Acceleration"
      ]
    },
    {
      "id": "cordova-plugin-device-motion.accelerometer",
      "file": "plugins/cordova-plugin-device-motion/www/accelerometer.js",
      "pluginId": "cordova-plugin-device-motion",
      "clobbers": [
        "navigator.accelerometer"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-dialogs": "2.0.1",
    "cordova-plugin-network-information": "2.0.1",
    "cordova-plugin-device-motion": "2.0.1",
    "cordova-plugin-vibration": "3.1.0"
  };
});