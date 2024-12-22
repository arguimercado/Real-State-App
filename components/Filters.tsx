import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {router, useLocalSearchParams} from "expo-router";
import {categories} from "@/constants/data";

const Filters = () => {

    const params = useLocalSearchParams<{ filter?: string }>();
    const [selectedCategory, setSelectedCategory] = useState(params.filter || 'All');

    const handleCategoryPress = (category: string) => {
        if(selectedCategory === category) {
            setSelectedCategory('All');
            router.setParams({filter: 'All'});
            return;
        }

        setSelectedCategory(category);
        router.setParams({filter: category});
    }
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className={"mt-3 mb-2"}>
            {categories.map((category, index) => (
                <TouchableOpacity
                    onPress={() => handleCategoryPress(category.category)}
                    key={index}
                    className={`flex flex-col items-start mr-4 px-4 py-2 rounded-full ${selectedCategory === category.category ? 'bg-primary-300 border border-primary-100' : 'bg-primary-100'}`}
                    style={{borderRadius: "10%"}}>
                    <Text className={"text-sm font-rubik"} style={selectedCategory === category.category ? {color:'#fff'} : {color: '#000'}}>{category.title}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}
export default Filters
