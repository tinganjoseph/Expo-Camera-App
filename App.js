
import React, { useState,useEffect } from 'react';
import {
  View, Text, TouchableOpacity,
  ScrollView, StatusBar, Image
} from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
const App = () => {
  const [CardImage, SetCardImage] = useState(null);
  const [cameraPermission, setCameraPermission] = useState(null);
  useEffect(() => {
    (async () => {
        // Ask for camera permission
        const { status } = await Camera.requestCameraPermissionsAsync();
        setCameraPermission(status === 'granted');
    })();
}, []);


  const handleOpenCamera = async (imageType) => {
    if (!cameraPermission) {
        alert('Camera permission is required to use the camera.');
        return;
    }
    const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
    });
    if (!result.canceled) {
      SetCardImage(result.assets[0].uri); 
    }
};

  return (
    <TailwindProvider>
      <View className="flex-1 bg-[#ffffff]">
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
        <View className="w-full h-10 bg-white" />
        <View className="justify-center p-2 mt-3 ">
                <View className="mt-8 items-center">
                    <Text className="text-[#000000] font-bold mx-5 text-[15px]">
                        Camera ...
                    </Text>
                    <Text className="text-[#000000] font-normal  text-xs mx-5  mb-8">
                        Take a Picture with the Camera
                    </Text>
                </View>
        </View>

        <View className="rounded-lg  mx-1  border-r-2 border-l-2 border-t-2 border-b-2 border-[#eeeeee] justify-center p-2">
                    <ScrollView
                        showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 300 }}>
                        <View className="flex-1 p-4 justify-center items-center">
                            <View className="flex flex-row space-x-3 mb-7">
                                <TouchableOpacity className="py-3 px-3 w-40 items-center bg-black rounded-xl " onPress={() => handleOpenCamera()}>
                                    <Text className="text-white font-semibold">Camera</Text>
                                </TouchableOpacity>
                            </View>
                            {CardImage && <Image source={{ uri: CardImage }} style={{
                                width: 350,
                                height: 230,
                                resizeMode: 'cover',
                            }} />}
                        </View>
                    </ScrollView>
                </View>
      </View>
    </TailwindProvider>
  )
}

export default App