import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {useLocalSearchParams, usePathname,router} from "expo-router";
import icons from "@/constants/icons";
import {useDebounce, useDebouncedCallback} from "use-debounce";

const Search = () => {
    const path = usePathname();
    const params = useLocalSearchParams<{query?: string}>();

    const [search, setSearch] = useState(params.query || "");

    const debouncedSearch = useDebouncedCallback((text: string) => router.setParams({query: text}),500)

    const handleSearch = (text: string) => {
        setSearch(text);
        debouncedSearch(text);

    }
    return (
        <View className={"flex flex-row items-center justify-between w-full px-4 rounded-lg bg-accent-100 border border-primary-100 mt-5 py-2"}>
            <View className={"flex-1 flex flex-row items-center justify-start z-50"}>
                <Image source={icons.search} className={"size-5"} />
                <TextInput
                    value={search}
                    onChangeText={handleSearch}
                    className={"flex-1  font-rubik text-black-300 ml-2 z-50 p-4"}
                    placeholder={"Search for anything"}
                    placeholderTextColor={"#666876"}
                />
            </View>
            <TouchableOpacity className={"flex flex-row items-center justify-center"}>
                <Image source={icons.filter} className={"size-5"} />
            </TouchableOpacity>
        </View>
    )
}
export default Search