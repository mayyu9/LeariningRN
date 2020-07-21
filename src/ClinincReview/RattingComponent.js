/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Alert,
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
          <View style={{flexDirection: 'column'}}>
              <View style={{
                  flexDirection: 'row',
                  }}>
                  <Image style={styles.thumbnail} source={item.uri} />
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={{width:110,marginTop: 5, marginLeft:8}}>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={item.stars}
                        fullStarColor={'yellow'}
                        starSize={20}
                        selectedStar={(rating) => setStarCount(rating)}
                    />
                </View>
                <Text style={styles.text}>Reviewed on {item.date}</Text>
                <Text style={{fontSize: 14,fontWeight: 'normal',marginTop: 10, marginLeft:8}}>Reviewd for {item.description}</Text>
                <Text style={{fontSize: 12,fontWeight: 'normal',marginTop: 10, marginLeft:8}}>{item.reviewText}</Text>
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
        borderWidth: 1,
        borderColor: 'blue',
        // marginLeft: 50,
      },
      title: {
          marginLeft: 12,
          fontSize: 14,
          fontWeight: 'bold',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
      },
      text: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft:8,
    },
  });

  export default RattingComponent;
