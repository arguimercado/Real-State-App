import {View, Text, ScrollView, Image, TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import {login} from "@/lib/persistence/appwrite";
import useGlobalContext from "@/lib/global-provider";
import {Redirect} from "expo-router";

const SignIn = () => {
    const {refetch,loading,isLoggedIn} = useGlobalContext();

    if(!loading && isLoggedIn) return <Redirect href={"/"}/>

    const handleLogin = async () => {
        const result = await login();



        if(result) {
            //navigate to home
            refetch();
        }
        else {
            Alert.alert("Error", "Failed to login");
        }
    }
    return (
        <SafeAreaView className="h-full bg-light-700">
            <ScrollView contentContainerClassName="h-full">
                <Image source={images.onboarding} className="w-full h-4/6" resizeMode="contain"/>

                <View className="px-10">
                    <Text className={"text-base text-center uppercase font-bold font-rubik text-black-200"}>Welcome to ReState</Text>
                    <Text className={"text-3xl font-rubik-bold text-black-300 text-center mt-2"}>
                        Let's Get you closer {"\n"}
                        <Text className={"text-primary-300"}>To Your Ideal Home</Text>
                    </Text>
                    <Text className="text-lg font-rubik text-black-200 text-center mt-12">Login to ReState with your Google Account</Text>

                    <TouchableOpacity  onPress={handleLogin}>
                        <View className="bg-white shadow-md shadow-zinc-200 rounded-full w-full py-4 mt-5">
                            <View className={"flex flex-row items-center justify-center"}>
                                <Image source={icons.google} className="w-10 h-10 mr-2" resizeMode="contain"/>
                                <Text className="text-lg font-rubik-medium text-black-300 ml-2">Continue with Google</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SignIn



