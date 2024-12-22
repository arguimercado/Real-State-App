import {Text, View, Image, TouchableOpacity, ScrollView, FlatList} from "react-native";
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
import useGlobalContext from "@/lib/global-provider";


export default function Index() {


    return (
        <SafeAreaView className={"bg-light-900 h-full"}>
            <FlatList
                contentContainerClassName={"pb-32"}
                columnWrapperClassName={"flex gap-5 px-5"}
                showsVerticalScrollIndicator={false}
                data={[1, 2]}
                renderItem={({item}) => (
                    <Card/>
                )}
                keyExtractor={(item) => item.toString()}
                numColumns={2}
                ListHeaderComponent={() => (
                    <>
                        <TopBar/>
                        <View className={"px-5"}>
                            <Search/>
                            <SummaryHeader header={"Featured"} linkTitle={"Show All"}/>
                            <FlatList
                                data={[1, 2,3 ]}
                                bounces={false}
                                showsHorizontalScrollIndicator={false}
                                contentContainerClassName={"flex gap-5 mt-5"}
                                horizontal={true}
                                keyExtractor={(item) => item.toString()}
                                renderItem={({item}) => <FeaturedCard />}/>
                        </View>
                    </>
                )}
            />


        </SafeAreaView>
    );
}
