//App.js
import { useEffect } from 'react';
import { Platform, PermissionsAndroid } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Linking from 'expo-linking';

const CLEAN_SCRIPT = `
(function() {
  const IDS = ["adCtn","menuBarEl","perchance-error-indicator","minimalModeMenuBtn","perchanceConsoleEl","mainModelTextEditorCtn","mainOutputTemplateEditorCtn","statusEl"];
  const SELECTORS = ["#main .gutter.gutter-vertical"];
  function clean() {
    IDS.forEach(id => { const el = document.getElementById(id); if(el) el.remove(); });
    SELECTORS.forEach(sel => { const el = document.querySelector(sel); if(el) el.remove(); });
  }
  function attendreBody() {
    if (!document.body) return setTimeout(attendreBody, 10);
    clean();
    new MutationObserver(clean).observe(document.body, { childList: true, subtree: true });
  }
  attendreBody();
})();
true;
`;

export default function App() {
    useEffect(() => {
        if (Platform.OS === 'android') {
            PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO);
        }
    }, []);

    return (
        <WebView
            source={{ uri: 'https://perchance.org/corex-aria' }}
            injectedJavaScript={CLEAN_SCRIPT}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            mediaPlaybackRequiresUserAction={false}
            allowsInlineMediaPlayback={true}
            allowFileAccess={true}
            onPermissionRequest={(request) => {
                request.nativeEvent.grant(request.nativeEvent.resources);
            }}
            onShouldStartLoadWithRequest={(request) => {
                if (!request.url.includes('perchance.org/corex-aria')) {
                    Linking.openURL(request.url);
                    return false;
                }
                return true;
            }}
        />
    );
}