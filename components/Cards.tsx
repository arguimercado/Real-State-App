import {View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import images from "@/constants/images";
import icons from "@/constants/icons";
import {Models} from "react-native-appwrite";

interface IProps {
    onPress?: () => void,
    item: Models.Document
}

export const FeaturedCard = ({onPress,item: {image,rating,name,address,price}}: IProps) => {
    return (
        <TouchableOpacity onPress={onPress} className={"flex bg-light-900 flex-col items-start w-60 h-80 relative"} >
            <Image source={{uri: image}}
                className={"size-full rounded-2xl"} style={{borderRadius: "5%"}}/>
            <Image source={images.cardGradient} className={"size-full rounded-2xl absolute bottom-0"} style={{borderRadius: "5%"}} />

            <View className={"flex flex-row items-center bg-light-900 py-1.5 px-3 rounded-full absolute top-5 right-5"} style={{borderRadius: "20%"}}>
                <Image source={icons.star} className={"size-3.5"} />
                <Text className={"text-xs font-rubik-bold text-primary-300 ml-1"}>{rating}</Text>
            </View>
            <View className={"flex flex-col items-start absolute bottom-5 inset-x-5"}>
                <Text className={"text-xl font-rubik-extrabold text-light-700 "} numberOfLines={1}>{name}</Text>
                <Text className={"text-light-900 text-base font-rubik"}>
                    {address}
                </Text>
                <View className={"w-full flex flex-row items-center justify-between"}>
                    <Text className={"text-xl font-rubik-extrabold text-light-900"}>${price.toString()}</Text>
                    <Image source={icons.heart} className={"size-5"}/>
                </View>
            </View>

        </TouchableOpacity>
    )
}


export const Card = ({onPress,item: {image,rating,name,address,price}}: IProps) => {
    return (
        <TouchableOpacity onPress={onPress} className={"flex-1 w-full mt-4 px-3 py-4 rounded-lg  bg-light-900 shadow-lg shadow-black-100/70 relative"} style={{borderRadius: "2%"}}>
            <View className={"flex flex-row items-center absolute px-2 top-5 right-5 bg-light-900 rounded-lg z-50"} style={{borderRadius: "20%"}}>
                <Image source={icons.star} className={"size-2.5"} />
                <Text className={"text-xs font-rubik-bold text-primary-300 ml-0.5"}>{rating}</Text>
            </View>
            <Image source={{uri: image}} className={"w-full h-40 rounded-lg"} style={{borderRadius: "2%"}} />
            <View className={"flex flex-col mt-2"}>
                <Text className={"text-base font-rubik-bold text-black-300 "} numberOfLines={1}>{name}</Text>
                <Text className={"text-black-200 text-xs font-rubik"}>
                    {address}
                </Text>
                <View className={"mt-2flex flex-row items-center justify-between"}>
                    <Text className={"text-base font-rubik-bold text-black-300"}>{price}</Text>
                    <Image source={icons.heart} className={"w-5 h-5 mr-2"} tintColor={"#191d31"}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

