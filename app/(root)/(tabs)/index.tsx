import {View, FlatList, ActivityIndicator} from "react-native";
import {router, useLocalSearchParams} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import React, {useEffect} from "react";
import Search from "@/components/Search";
import {Card, FeaturedCard} from "@/components/Cards";
import SummaryHeader from "@/components/SummaryHeader";
import TopBar from "@/components/TopBar";
import {useAppwrite} from "@/lib/persistence/useAppwrite";
import {getLatestProperties, getProperties} from "@/lib/persistence/appwrite";
import Filters from "@/components/Filters";
import NoResult from "@/components/NoResult";


export default function Index() {
    const params = useLocalSearchParams<{ query?: string; filter?: string }>();

    const {data: latestProperties, loading: latestPropertiesLoading} = useAppwrite({
        fn: getLatestProperties,
    });

    const {data: properties, loading, refetch} = useAppwrite({
        fn: getProperties,
        params: {
            filter: params.filter || "All",
            query: params.query || "",
            limit: 6
        },
        skip: true
    });

    useEffect(() => {

        refetch({
            filter: params.filter || "All",
            query: params.query || "",
            limit: 6
        })
    }, [params.filter, params.query]);

    const handleCardPress = (id: string) => {
        router.push(`/properties/${id}`);
    }
    return (
        <SafeAreaView className={"bg-light-900 h-full"}>
            <FlatList
                contentContainerClassName={"pb-32"}
                columnWrapperClassName={"flex gap-5 px-5"}
                showsVerticalScrollIndicator={false}
                data={properties || []}
                renderItem={({item}) =>
                    <Card item={item} onPress={() => handleCardPress(item.$id)}/>}
                keyExtractor={(item) => item.$id}
                numColumns={2}
                ListEmptyComponent={
                    loading ? (<ActivityIndicator size={"large"} className={"text-primary-300 mt-5"}/>) : (<NoResult/>)
                }
                ListHeaderComponent={() => (
                    <>
                        <TopBar/>
                        <View className={"px-5"}>
                            <Search/>
                            {loading ? (<ActivityIndicator size={"large"} className={"text-primary-300"}/>) :
                                !latestProperties || latestProperties.length === 0 ? (<NoResult/>) : (
                                    <>
                                        <SummaryHeader header={"Featured"} linkTitle={"Show All"}/>
                                        <FlatList
                                            data={latestProperties || []}
                                            bounces={false}
                                            showsHorizontalScrollIndicator={false}
                                            contentContainerClassName={"flex gap-5 mt-5"}
                                            horizontal={true}
                                            keyExtractor={(item) => item.$id}
                                            renderItem={({item}) => <FeaturedCard item={item}
                                                                                  onPress={() => handleCardPress(item.$id)}/>}/>
                                    </>
                                )
                            }

                            <SummaryHeader header={"Properties"} linkTitle={"Show All"}/>
                            <Filters/>
                        </View>
                    </>
                )}
            />


        </SafeAreaView>
    );
}
