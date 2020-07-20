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
  import Card from './Card';

  console.disableYellowBox = true;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

  const imageUrl = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png';
  const cardsData = [
      {
        key: 0,
        uri: imageUrl,
        title: 'Animate flat list',
        description: 'Reference from aboutreact.com'
      },
      {
        key: 1,
        uri: imageUrl,
        title: 'Animate flat list',
        description: 'Reference from aboutreact.com'
      },
      {
        key: 2,
        uri: imageUrl,
        title: 'Animate flat list',
        description: 'Reference from aboutreact.com'
      }
  ];
    const setAnimation = () => {
        LayoutAnimation.configureNext({
        duration: 250,
        update: {
            type: LayoutAnimation.Types.easeIn,
            springDamping: 0.7,
        },
        });
        LayoutAnimation.configureNext({
        duration: 500,
        create: {
            type: LayoutAnimation.Types.easeIn,
            property: LayoutAnimation.Properties.scaleXY,
            springDamping: 0.7,
        },
        });
    };
  const AddRemoveEmptyFlatList = props => {
      const [cards, setCards] = useState(cardsData);
      const addItem = () => {
          let key = cards.length;
          cards.unshift({
              key,
              uri: imageUrl,
              title: 'Animated Flatlist',
              description: 'please vist www.aboutreact.com',
              animated: true
          });
          setAnimation();
        //   let newCard = cards.slice(0)
          setCards(cards);
          key++;
      };
      const removeItem = key => {
        // const { cards } = this.state;
        setAnimation();
        let newCard = cards.slice().filter(card => card.key !== key);
        setCards(newCard);
      };

      const renderCards = ({item}) => {
        return <Card item={item} removeItem={removeItem} />
      };

      const renderHeader = () => {
        //View to set in Header
        return (
          <View style={styles.header_footer_style}>
            <Text style={styles.textStyle}> This is Header </Text>
          </View>
        );
      };
    const renderFooter = () => {
        //View to set in Footer
        return (
          <View style={styles.header_footer_style}>
            <Text style={styles.textStyle}> This is Footer </Text>
          </View>
        )
    };

    const ListEmpty = () => {
        return (
          //View to show when list is empty
          <View style={styles.container}>
            <Text style={{ textAlign: 'center' }}>No Data Found</Text>
          </View>
        );
      };

      return (
          <View style={styles.container}>
              <TouchableOpacity style={styles.addItemBtn} onPress={addItem}>
                  <Text style={styles.btnStyle}>Add Item</Text>
                </TouchableOpacity>
              <FlatList
              contentContainerStyle={styles.paragraph}
              //dataSource to add data in the list
          ListHeaderComponent={renderHeader}
          //Header to show above listview
          ListFooterComponent={renderFooter}
              data={cards}
              renderItem={renderCards}
              ItemSeparatorComponent={() => <View style={{ marginTop: 10 }} />}
              keyExtractor={item => item.key.toString()}
              ListEmptyComponent={ListEmpty}
          //Message to show for the Empty list
              />
          </View>
      );
  };

  const styles= StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: '#FFF'
      },
      addItemBtn: {
          width: '100%',
          elevation: 3,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#808080',
          marginBottom: 15
      },
      paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
        paddingBottom: 10,
      },
      btnStyle: {
          color: 'white',
          padding: 10,
          fontSize: 20,
          textAlign: 'center'
      },
      header_footer_style: {
        width: '100%',
        height: 45,
        backgroundColor: '#606070',
      },
      textStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        padding: 7,
      },
  });

  export default AddRemoveEmptyFlatList;