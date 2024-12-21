import {SafeAreaView} from "react-native-safe-area-context";
import React from "react";
import useGlobalContext from "@/lib/global-provider";
import {ActivityIndicator} from "react-native";
import {Redirect, Slot} from "expo-router";

export default function AppLayout() {
    const {loading,isLoggedIn} = useGlobalContext();

    if(loading) {
        return (
            <SafeAreaView className="h-full bg-light-700 flex justify-center items-center">
                <ActivityIndicator className={"text-primary-300"} size={"large"}/>
            </SafeAreaView>
        )
    }

    if(!isLoggedIn)  return <Redirect href={"/sign-in"}/>

    return <Slot/>
}