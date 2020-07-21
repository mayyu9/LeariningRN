/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    ScrollView,
  } from 'react-native';

  import RattingComponent from './RattingComponent';

  const imageUrl = {
      uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
  };
  const cardsData = [
    {
      key: 0,
      uri: imageUrl,
      title: 'Animate flat list',
      stars: 3,
      date: '21/07/2020',
      description: 'Reference from aboutreact.com',
      reviewText: `Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
      To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.
      Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.
      Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign.
      Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off - even on another device.`,
    },
    {
        key: 1,
        uri: imageUrl,
        title: 'Animate flat list',
        stars: 3,
        date: '21/07/2020',
        description: 'Reference from aboutreact.com',
        reviewText: `Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
      To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.
      Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.
      Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign.
      Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off - even on another device.`,
      },
      {
        key: 2,
        uri: imageUrl,
        title: 'Animate flat list',
        stars: 4,
        date: '21/07/2020',
        description: 'Reference from aboutreact.com',
        reviewText: `Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
      To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.
      Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.
      Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign.
      Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off - even on another device.`,
      },
      {
        key: 3,
        uri: imageUrl,
        title: 'Animate flat list',
        stars: 1,
        date: '21/07/2020',
        description: 'Reference from aboutreact.com',
        reviewText: `Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
      To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.
      Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.
      Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign.
      Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off - even on another device.`,
      },
      {
        key: 4,
        uri: imageUrl,
        title: 'Animate flat list',
        stars: 5,
        date: '21/07/2020',
        description: 'Reference from aboutreact.com',
        reviewText: `Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
      To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.
      Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.
      Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign.
      Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off - even on another device.`,
      },
];
  const StarRattingExample = props => {
      const renderReview = ({item}) => {
        return <RattingComponent item={item} />;
      };
      return(
          <ScrollView style={styles.container}>
              <FlatList
              data={cardsData}
              renderItem={renderReview}
            //   ItemSeparatorComponent={() => <View style={{
            //     height: 1,
            //     backgroundColor: '#707080',
            //     width: '100%',
            // }}
            // />}
              keyExtractor={item => item.key.toString()}/>
          </ScrollView>
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

  export default StarRattingExample;
