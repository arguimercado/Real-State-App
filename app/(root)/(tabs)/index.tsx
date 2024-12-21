import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text className="text-2xl mt-5 font-bold font-rubik">Welcome ReState</Text>
        <Link href="/sign-in">SignIn</Link>
        <Link href={"/explore"}>Explore</Link>
        <Link href={"/profile"}>Profile</Link>
        <Link href={"/properties/1"}>Property 1</Link>

    </View>
  );
}
