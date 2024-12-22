import {Text, View, Image, TouchableOpacity, ScrollView} from "react-native";
import {Link} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import images from "@/constants/images";
import React from "react";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import {Card, FeaturedCard} from "@/components/Cards";
import SummaryHeader from "@/components/SummaryHeader";
import Filters from "@/components/Filters";
import TopBar from "@/components/TopBar";


export default function Index() {

    return (
        <SafeAreaView className={"bg-light-900 h-full"}>
            <TopBar />
            <View className={"px-5"}>
                <Search/>
                <ScrollView>
                    <SummaryHeader header="Featured" linkTitle="See All"/>
                    <View className={"flex flex-row gap-5 mt-5"}>
                        <FeaturedCard/>
                        <FeaturedCard/>
                        <FeaturedCard/>
                    </View>
                    <SummaryHeader header="Our Recommendation" linkTitle="See All"/>
                    <Filters />
                    <View className={"flex flex-row gap-5 mt-5"}>
                        <Card/>
                        <Card/>
                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>
    );
}
