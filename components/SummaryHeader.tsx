import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

interface IProps {
    header: string
    onPress?: () => void
    linkTitle?: string
}

const SummaryHeader = ({header,onPress,linkTitle = "See All"} : IProps) => {
    return (
        <View className={"flex flex-row items-center justify-between mt-5"}>
            <Text className={"text-xl font-rubik-bold text-black-300"}>{header}</Text>
            <TouchableOpacity onPress={onPress}>
                <Text className={"text-base font-rubik-bold text-primary-300"}>{linkTitle}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default SummaryHeader
