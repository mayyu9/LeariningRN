/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useRef} from 'react';
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
    Image,
    Alert,
    UIManager,
    LayoutAnimation,
  } from 'react-native';

  import StarRating from 'react-native-star-rating';
  // import StarRattingExample from './StarRatingExample';

  const imageUrl = {
      uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
  };
/*
this component will render for item of the json, hence each and every item will have its own 
state for the stars and write review component
*/
  const RattingComponent = ({item}) => {
    const [starCount, setStarCount] = useState(0);
    return (
      <View style={{margin: 10}}>
          <View style={{flexDirection: 'row'}}>
              <View style={{borderWidth: 1, borderColor: 'green', height: 50}}>
                  <Image style={styles.thumbnail} source={imageUrl} />
              </View>
              <View style={{flexDirection: 'column', marginLeft: 10, flex: 1}}>
                  <View style={{
                      // alignItems: 'center',
                      justifyContent: 'center',
                      // borderWidth: 1,
                      // borderColor: 'yellow',
                      marginTop: 12,
                      }}>
                      <Text>{item.title}</Text>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between',
                  // borderWidth: 1,
                  //     borderColor: 'yellow',
                      }}>
                  <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={starCount}
                      fullStarColor={'yellow'}
                      starSize={30}
                      selectedStar={(rating) => setStarCount(rating)}
                  />
                  <TouchableOpacity style={{
                      marginRight: 10,
                      marginTop: 10,
                      borderWidth: 1,
                      height: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 8,
                      }}>
                      <Text>Write a Review</Text>
                  </TouchableOpacity>
                  </View>
              </View>
          </View>
      </View>
  );
  };

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: 'white',
      },
      thumbnail: {
        width: 50,
        height: 50,
        borderRadius: 25,
      },
  });

  export default RattingComponent;
