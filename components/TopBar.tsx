import {Image, Text, View} from "react-native";
import images from "@/constants/images";
import icons from "@/constants/icons";
import React from "react";
import useGlobalContext from "@/lib/global-provider";

const TopBar = () => {
    const {user} = useGlobalContext();

    return (
        <View className={"flex flex-row items-center justify-between mt-5 bg-light-900 px-2 py-3"}>
            <View className={"flex flex-row items-center"}>
                <Image
                    style={{borderRadius: 50}}
                    source={{uri: user?.avatar}}
                    className={"size-12 rounded-full"}
                    resizeMode="contain"/>
                <View className={"flex flex-col items-start ml-2 justify-center"}>
                    <Text className={"text-xs font-rubik text-dark-800"}>Good Morning</Text>
                    <Text className={"text-base font-rubik-medium text-black-300"}>{user?.name}</Text>
                </View>
            </View>
            <Image source={icons.bell} className={"size-6"}/>
        </View>
    )
}

export default TopBar