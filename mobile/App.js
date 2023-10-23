import * as React from "react";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { BackHandler, StyleSheet } from "react-native";
import { Camera } from 'expo-camera';
import { Audio } from 'expo-av';


export default function App() {

  const [permission, requestPermission] = Camera.useCameraPermissions();

  const webViewRef = React.useRef();

  const [canGoBack, setCanGoBack] = React.useState(false);
  const [currentUrl, setCurrentUrl] = React.useState(
    "https://ar-app-beta.vercel.app"
  );

  const handleBackButtonPress = () => {
    if (canGoBack) {
      try {
        webViewRef.current?.goBack();
        return true;
      } catch (err) {
        console.log("[handleBackButtonPress] Error : ", err.message);
      }
    }
    BackHandler.exitApp();
    return true;
  };

  const onNavigationStateChange = (event) => {
    setCurrentUrl(event.url);
    setCanGoBack(event.canGoBack);
  };

  React.useEffect(() => {
    (async () => {
      const { status } = await requestPermission()
      console.log('Camera: ', status)
    })();
    (async () => {
      const { status } = await Audio.requestPermissionsAsync();
      console.log('Audio: ', status)
    })();

  }, []);


  React.useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonPress);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButtonPress
      );
    };
  }, [webViewRef, canGoBack]);

  return (
    <WebView
      style={styles.container}
      originWhiteList={["*"]}
      ref={webViewRef}
      source={{
        uri: currentUrl,
      }}
      onNavigationStateChange={onNavigationStateChange}
      allowUniversalAccessFromFileURLs
      scrollEnabled={true}
      allowFileAccessFromFileURLs
      mediaCapturePermissionGrantType='grant'
      domStorageEnableds
      allowFileAccess
      useWebKit
      allowsInlineMediaPlayback
      mediaPlaybackRequiresUserAction={false}
      startInLoadingState
      thirdPartyCookiesEnabled
      javaScriptEnabledAndroid
      javaScriptEnabled
      scalesPageToFit
      webviewDebuggingEnabled
      javaScriptCanOpenWindowsAutomatically={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
