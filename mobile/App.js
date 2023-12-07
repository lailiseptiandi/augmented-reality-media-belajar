import * as React from "react";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { BackHandler, StatusBar, StyleSheet } from "react-native";
import { Camera } from 'expo-camera';
import { Audio } from 'expo-av';
import useSound from "react-native-use-sound";

export default function App() {

  const [permission, requestPermission] = Camera.useCameraPermissions();

  const webViewRef = React.useRef();

  const [isPlay, setIsPlay] = React.useState(true);
  const [volume, setVolume] = React.useState(0.2);

  const [canGoBack, setCanGoBack] = React.useState(false);
  const [currentUrl, setCurrentUrl] = React.useState(
    "https://ar-app-beta.vercel.app"
  );

  const [play, pause, stop, data] = useSound('https://raw.githubusercontent.com/husnimubaraq/ar-app/main/public/assets/sounds/sound.mp3', {
    numberOfLoops: -1,
    soundEnabled: true,
  });

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
    console.log('event.url: ', event.url)
    const modeAr = event.url.match(/category/g);
    const modeIntro = event.url.match(/list/g);
    const modeCard = event.url.match(/mode-card/g);

    if([
      "https://ar-app-beta.vercel.app/mode-game/2d",
      "https://ar-app-beta.vercel.app/mode-game/3d",
      "https://ar-app-beta.vercel.app/intro/2d",
      "https://ar-app-beta.vercel.app/intro/3d",
    ].includes(event.url) || modeAr || modeIntro){
      stop()
    }else{
      pause()
      setTimeout(() => {
        play()
      }, 3500)
    }
    setCurrentUrl(event.url);
    setCanGoBack(event.canGoBack);
  };

  const onMessage = async (event) => {
    const { type } = JSON.parse(event.nativeEvent.data)

    if(type === 'btn-sound'){
      if(isPlay){
        stop()
      }else{
        play()
      }

      setIsPlay(!isPlay)
    }else if(type === 'btn-exit'){
      BackHandler.exitApp();
    }
  }

  React.useEffect(() => {
    play()
  }, [play])

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
    <>
      <StatusBar
        translucent
        backgroundColor='transparent'
        barStyle='dark-content'
      />
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
        onMessage={onMessage}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
