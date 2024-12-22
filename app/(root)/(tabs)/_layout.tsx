import React from 'react'
import {View,Image,Text} from "react-native";
import {Tabs} from "expo-router";

import icons from "@/constants/icons";

const TabIcon = ({focused,icon,title,size,color}: {focused: boolean, icon: any, title: string,size: number,color:string}) => {
    return (
        <View className={"flex flex-col items-center justify-center mt-3"}>
            <Image source={icon} className={"size-6 "} tintColor={focused ? "#0061ff" : "#666876"} resizeMode="contain"/>
            <Text className={`${focused ? 'text-primary-300 font-rubik-medium' : 'text-black-200 font-rubik'} text-xs w-full text-center mt-1`}>
                {title}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "white",
                    position: "absolute",
                    borderTopColor: "#0061FF0A",
                    borderTopWidth: 1,
                    minHeight: 70,
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({color, size,focused}) => (
                        <TabIcon focused={focused} size={size} color={color} icon={icons.home} title={"Home"}/>
                    )
                }}
            />
            <Tabs.Screen
                name="explore"

                options={{
                    title: "Explore",
                    tabBarIcon: ({color, size,focused}) => (
                        <TabIcon focused={focused} size={size} color={color} icon={icons.search} title={"Explore"}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({color, size,focused}) => (
                        <TabIcon focused={focused} size={size} color={color} icon={icons.person} title={"Profile"}/>
                    )
                }}
            />
        </Tabs>
    )
}
export default TabsLayout
