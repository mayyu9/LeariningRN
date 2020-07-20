/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
import {WebView} from 'react-native-webview';

const RenderWebview = (props) => {
  const [visible, setVisible] = useState(true);
  const url = {uri: 'https://aboutreact.com'};
  const showSpinner= () => {
    console.log('Show Spinner');
    setVisible(true);
  };

  const hideSpinner = () => {
    console.log('Hide Spinner');
    setVisible(false);
  };

  return (
    <View style={visible ? styles.stylOld : styles.styleNew}>
      {visible ? (
        <ActivityIndicator
          color="#009688"
          size="large"
          style={styles.ActivityIndicator}
        />
      ) : null}
      <WebView
        style={styles.WebViewStyle}
        //Loading URL
        source={url}
        //Enable Javascript support
        javaScriptEnabled={true}
        //For the Cache
        domStorageEnabled={true}
        //View to show while loading the webpage
        //Want to show the view or not
        //startInLoadingState={true}
        onLoadStart={() =>showSpinner()}
        onLoad={() =>hideSpinner()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  stylOld: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleNew: {
    flex: 1,
  },
  WebViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 40,
  },
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});
// class RenderWebview extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { visible: true };
//     }
  
//     showSpinner() {
//       console.log('Show Spinner');
//       this.setState({ visible: true });
//     }
  
//     hideSpinner() {
//       console.log('Hide Spinner');
//       this.setState({ visible: false });
//     }
  
//     render() {
//       return (
//         <View
//           style={this.state.visible === true ? styles.stylOld : styles.styleNew}>
//           {this.state.visible ? (
//             <ActivityIndicator
//               color="#009688"
//               size="large"
//               style={styles.ActivityIndicatorStyle}
//             />
//           ) : null}
  
//           <WebView
//             style={styles.WebViewStyle}
//             //Loading URL
//             source={{ uri: 'https://aboutreact.com' }}
//             //Enable Javascript support
//             javaScriptEnabled={true}
//             //For the Cache
//             domStorageEnabled={true}
//             //View to show while loading the webpage
//             //Want to show the view or not
//             //startInLoadingState={true}
//             onLoadStart={() => this.showSpinner()}
//             onLoad={() => this.hideSpinner()}
//           />
//         </View>
//       );
//     }
//   }
//   const styles = StyleSheet.create({
//     stylOld: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     styleNew: {
//       flex: 1,
//     },
//     WebViewStyle: {
//       justifyContent: 'center',
//       alignItems: 'center',
//       flex: 1,
//       marginTop: 40,
//     },
//     ActivityIndicatorStyle: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       position: 'absolute',
//     },
//   });

export default RenderWebview;
