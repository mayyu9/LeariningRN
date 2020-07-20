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
  } from 'react-native';

  const SearchBarList = props => {
      const [isLoading, setIsLoading] = useState(false);
      const [text, setText] = useState('');
      const [dataSource, setDataSource] = useState(['Chinkara',
      'MotorsForce',
      'MotorsIPMLHindustan',
      'Mahindra',
      'Reva',
      'Electric',
      'VehiclesMaruti',
      'Suzuki',
      'IndiaOpel',
      'IndiaPremier',
      'LtdSan',
      'StormSML',
      'IsuzuStandardTara',
      'InternationalTata',
      'Motor',
      'Chinkara',
      'MotorsForce',
      'MotorsIPMLHindustan',
      'Mahindra',
      'Reva',
      'Electric',
      'VehiclesMaruti',
      'Suzuki',
      'IndiaOpel',
      'IndiaPremier',
      'LtdSan',
      'StormSML',
      'IsuzuStandardTara',
      'InternationalTata',
      'Motor',
    ]);
      const [actualData,setActualData] = useState(['Chinkara',
      'MotorsForce',
      'MotorsIPMLHindustan',
      'Mahindra',
      'Reva',
      'Electric',
      'VehiclesMaruti',
      'Suzuki',
      'IndiaOpel',
      'IndiaPremier',
      'LtdSan',
      'StormSML',
      'IsuzuStandardTara',
      'InternationalTata',
      'Motor',
      'Chinkara',
      'MotorsForce',
      'MotorsIPMLHindustan',
      'Mahindra',
      'Reva',
      'Electric',
      'VehiclesMaruti',
      'Suzuki',
      'IndiaOpel',
      'IndiaPremier',
      'LtdSan',
      'StormSML',
      'IsuzuStandardTara',
      'InternationalTata',
      'Motor',
    ]);
    const ListView_Ref = useRef(null);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(responseJson => {
    //         setIsLoading(false);
    //         setDataSource(responseJson);
    //         setActualData(responseJson);
    //       }
    //     );
    // });

    const LoadActivityIndicator = (
        <View style={{ flex: 1, paddingTop: 20 }}>
        <ActivityIndicator />
        </View>
    );

    const ListSeparator = () => {
        return (
            <View
              style={{
                height: 0.3,
                width: '90%',
                backgroundColor: '#080808',
              }}
            />
          );
    }
    const SearchFilterFunction = text => {
        const newDataSource = actualData.filter( item => {
            const itemData = item ? item.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setDataSource(newDataSource);
        setText(text);
    };
    const upButtonHandler = () => {
        //OnCLick of Up button we scrolled the list to top
        ListView_Ref.current.scrollToOffset({ offset: 0,  animated: true });
      };

    const downButtonHandler = () => {
        //OnCLick of down button we scrolled the list to bottom
        ListView_Ref.current.scrollToEnd({ animated: true });
      };
      
    const LoadFlatList = (
        <View style={styles.viewStyle}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={ text => SearchFilterFunction(text)}
          value={text}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <ScrollView>
        <FlatList
            data={dataSource}
            ItemSeparatorComponent={ListSeparator}
            renderItem={({item}) => { 
                console.log('item:', item);
            return (<Text>{item}</Text>);
            }}
            enableEmptySections={true}
            style={{ marginTop: 10 }}
            keyExtractor={(item, index) => item.key}
            ref={ListView_Ref}
        />
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={downButtonHandler}
          style={styles.downButton}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/arrow_down.png',
            }}
            style={styles.downButtonImage}

          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={upButtonHandler}
          style={styles.upButton}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/arrow_up.png',
            }}
            style={styles.upButtonImage}
          />
        </TouchableOpacity>
        </View>
        // <Text>Hello</Text>
    );

   return (
       <View>
          { isLoading ? <>{LoadActivityIndicator}</> : <>{LoadFlatList}</> }
       </View>
   )
};

  const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: 'center',
        flex: 1,
        marginTop: 40,
        padding: 16,
      },
      textStyle: {
        padding: 10,
      },
      textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 10,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
      },
      upButton: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 70,
      },
      upButtonImage: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
      },
      downButton: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        top: 70,
      },
      downButtonImage: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
      },
  });

  export default SearchBarList;
