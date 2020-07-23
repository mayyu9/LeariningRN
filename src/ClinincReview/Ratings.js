/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarFiller } from '@fortawesome/free-solid-svg-icons';

const styles = StyleSheet.create({
  stars: {
    flexDirection: 'row',
  },
  star: {
    marginLeft: 2,
    marginBottom: 5,
  },
});

// type Props = {
//   totalRating: number;
//   size: number;
//   color: string;
//   style?: ViewStyle;
// };

const StarRatings = ({ totalRating, size, color, style }) => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <View style={{ ...styles.stars, ...style }}>
      {arr.map((i) => (
        <FontAwesomeIcon
          style={styles.star}
          size={size}
          key={`${i}-start`}
          color={color}
          icon={i <= totalRating ? faStarFiller : faStar}
        />
      ))}
    </View>
  );
};

export default StarRatings;
