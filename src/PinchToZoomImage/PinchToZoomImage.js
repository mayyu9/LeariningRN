/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, View, Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const PinchToZoomImage = props => {
    const [isModelVisible, showModal] = useState(true);
    const images = [
        {url: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png'},
        {url: 'https://reactnativecode.com/wp-content/uploads/2018/02/desktop.jpeg'},
    ];
    const closeModal = () => {
        showModal(false);
    };

    return (
        <View style={styles.MainContainer}>
            <Modal
            visible={isModelVisible}
            transparent={false}
            onRequestClose={closeModal}>
                <ImageViewer imageUrls={images} />
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems: 'center',
      },
});

export default PinchToZoomImage;
