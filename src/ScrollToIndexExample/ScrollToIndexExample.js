// /* eslint-disable prettier/prettier */
// import React, {useState, useRef} from 'react';
// import {
//   View,
//   TextInput,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   Alert,
//   NativeSyntheticEvent,
//   TextInputChangeEventData
// } from 'react-native';

// const ScrollToIndex = (props) => {
//   let items = [
//     'zero',
//     'one',
//     'two',
//     'three',
//     'four',
//     'five',
//     'six',
//     'seven',
//     'eight',
//     'nine',
//     'ten ',
//     'eleven',
//     'twelve',
//     'thirteen',
//     'fourteen',
//     'fifteen',
//     'sixteen',
//     'seventeen',
//     'eighteen',
//     'nineteen',
//     'twenty ',
//     'twenty-one',
//     'twenty-two',
//     'twenty-three',
//     'twenty-four',
//     'twenty-five',
//     'twenty-six',
//     'twenty-seven',
//     'twenty-eight',
//     'twenty-nine',
//     'thirty',
//     'thirty-one',
//     'thirty-two',
//     'thirty-three',
//     'thirty-four',
//     'thirty-five',
//     'thirty-six',
//     'thirty-seven',
//     'thirty-eight',
//     'thirty-nine',
//     'forty',
//   ];

//   let arr = [];
//   const [dynamicIndex, setDynamicIndex] = useState(0);
//   const scrollview_ref = useRef(null);

//   const onPressGoTo = () => {
//       debugger;
//     if (arr.length >= dynamicIndex) {
//         // To Scroll to the index 5 element
//         scrollview_ref.current.scrollTo({
//           x: 0,
//           y: arr[dynamicIndex],
//           animated: true,
//         });
//       } else {
//         alert('Out of Max Index');
//       }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={{flexDirection: 'row'}}>
//         <TextInput
//           value={String(dynamicIndex)}
//           numericvalue
//           keyboardType={'numeric'}
//           onChangeText={e => setDynamicIndex(e)}
//           placeholder={'Enter the index to scroll'}
//           style={{flex: 1, backgroundColor: 'white', padding: 10}}
//         />
//         <TouchableOpacity
//         activeOpacity={0.5}
//         onPress={onPressGoTo}
//         style={{justifyContent:'center', alignItems: 'center', padding: 15, backgroundColor: '#f4801e'}}
//         >
//             <Text style={{ color: '#fff' }}>GoToIndex</Text>
//         </TouchableOpacity>
//       </View>
//       <ScrollView
//           ref={scrollview_ref}>
//           {/*Loop of JS which is like foreach loop*/}
//           {items.map((item, key) => (
//             //key is the index of the array
//             //item is the single item of the array
//             <View
//               key={key}
//               style={styles.item}
//               onLayout={event => {
//                   debugger;
//                 const layout = event.nativeEvent.layout;
//                 arr[key] = layout.y;
//                 console.log('height:', layout.height);
//                 console.log('width:', layout.width);
//                 console.log('x:', layout.x);
//                 console.log('y:', layout.y);
//               }}>
//               <Text style={styles.text}>
//                 {key}. {item}
//               </Text>
//               <View style={styles.separator} />
//             </View>
//           ))}
//         </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 30,
//   },
//   separator: {
//     height: 1,
//     backgroundColor: '#707080',
//     width: '100%',
//   },

//   text: {
//     fontSize: 16,
//     color: '#606070',
//     padding: 10,
//   },
// });

import React, { Component } from 'react';
//import react in our project

import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
//import all the components we needed

class ScrollToIndex extends React.Component {
  constructor() {
    super();
    //Array of Item to add in Scrollview
    this.items = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten ',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
      'twenty ',
      'twenty-one',
      'twenty-two',
      'twenty-three',
      'twenty-four',
      'twenty-five',
      'twenty-six',
      'twenty-seven',
      'twenty-eight',
      'twenty-nine',
      'thirty',
      'thirty-one',
      'thirty-two',
      'thirty-three',
      'thirty-four',
      'thirty-five',
      'thirty-six',
      'thirty-seven',
      'thirty-eight',
      'thirty-nine',
      'forty',
    ];
    //Blank array to store the location of each item
    this.arr = [];
    this.state = { dynamicIndex: 0 };
  }
  downButtonHandler = () => {
    if (this.state.dynamicIndex < this.arr.length ) {
      // To Scroll to the index 5 element
      this.scrollview_ref.scrollTo({
        x: 0,
        y: this.arr[this.state.dynamicIndex],
        animated: true,
      });
    } else {
      alert('Out of Max Index');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#1e73be',
            padding: 5,
          }}>
          <TextInput
            value={String(this.state.dynamicIndex)}
            numericvalue
            keyboardType={'numeric'}
            onChangeText={dynamicIndex => this.setState({ dynamicIndex })}
            placeholder={'Enter the index to scroll'}
            style={{ flex: 1, backgroundColor: 'white', padding: 10 }}
          />
          <TouchableOpacity
            // activeOpacity={0.5}
            onPress={this.downButtonHandler}
            style={{ padding: 15, backgroundColor: '#f4801e' }}>
            <Text style={{ color: '#fff' }}>Go to Index</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          ref={ref => {
            //   console.log('ref: ', ref);
            this.scrollview_ref = ref;
          }}>
          {/*Loop of JS which is like foreach loop*/}
          {this.items.map((item, key) => (
            //key is the index of the array
            //item is the single item of the array
            <View
              key={key}
              style={styles.item}
              onLayout={event => {
                const layout = event.nativeEvent.layout;
                this.arr[key] = layout.y;
                // console.log('height:', layout.height);
                // console.log('width:', layout.width);
                // console.log('x:', layout.x);
                // console.log('y:', layout.y);
                // console.log('arr', this.arr);
              }}>
              <Text style={styles.text}>
                {key}. {item}
              </Text>
              <View style={styles.separator} />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  separator: {
    height: 1,
    backgroundColor: '#707080',
    width: '100%',
  },

  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
  },
});

export default ScrollToIndex;
