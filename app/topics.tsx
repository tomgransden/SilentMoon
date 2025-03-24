import {
  MasonryFlashList,
  MasonryListRenderItem,
  MasonryListRenderItemInfo,
} from "@shopify/flash-list";
import { View, Text, Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const listData: ItemType[] = [
  {
    type: "large",
    title: "Title 1",
    backgroundColor: "#8E97FD",
  },
  { type: "small", title: "Title 2", backgroundColor: "#F05D48" },
  { type: "small", title: "Title 3", backgroundColor: "#E49621" },
  { type: "large", title: "Title 4", backgroundColor: "#FFCF86" },
  { type: "large", title: "Title 5", backgroundColor: "#76C79E" },
  {
    type: "small",
    title: "Title 6",
    backgroundColor: "#3F414E",
    fontColor: "#EBEAEC",
  },
  { type: "small", title: "Title 7", backgroundColor: "#AEB4FC" },
  { type: "large", title: "Title 8", backgroundColor: "#D9A5B5" },
] as const;

type ItemType = {
  backgroundColor: string;
  fontColor?: string;
  title: string;
  type: "large" | "small";
};

export default function TopicsScreen() {
  const renderItem: MasonryListRenderItem<ItemType> = (info) => (
    <View
      style={{
        borderRadius: 8,
        margin: 8,
        height: info.item.type === "small" ? 167 : 210,
        backgroundColor: info.item.backgroundColor,
      }}
    >
      <Text
        style={{
          alignSelf: "flex-start",
          paddingLeft: 12,
          fontSize: 18,
          fontWeight: "bold",
          fontFamily: "HelveticaNeue",
          color: info.item.fontColor ?? "black",
        }}
      >
        {info.item.title}
      </Text>
    </View>
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MasonryFlashList
        numColumns={2}
        data={listData}
        renderItem={renderItem}
        estimatedItemSize={60}
      />
    </SafeAreaView>
  );
}
