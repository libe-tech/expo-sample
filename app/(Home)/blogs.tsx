import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type BlogItemProps = {
  title: string;
  content: string;
  style?: ViewStyle;
};

function BlogItem({ title, content, style }: BlogItemProps) {
  return (
    <View style={[styles.item, style]}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.itemContent}>{content}</Text>
    </View>
  );
}

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      content: "Content 1",
    },
    {
      id: 2,
      title: "Blog 2",
      content: "Content 2",
    },
    {
      id: 3,
      title: "Blog 3",
      content: "Content 3",
    },
    {
      id: 4,
      title: "Blog 4",
      content: "Content 4",
    },
    {
      id: 5,
      title: "Blog 5",
      content: "Content 5",
    },
  ];

  // 横スクロール用のデータ
  const horizontalScrollItems = blogs.map((blog) => (
    <BlogItem
      key={blog.id}
      title={blog.title}
      content={blog.content}
      style={styles.horizontalScrollItem}
    />
  ));

  // 縦スクロール用のデータ
  const verticalScrollItems = blogs.map((blog) => (
    <BlogItem
      key={blog.id}
      title={blog.title}
      content={blog.content}
      style={styles.verticalScrollItem}
    />
  ));

  // FlatList用のレンダリング関数（横スクロール用）
  const renderHorizontalItem = ({ item }: { item: BlogItemProps }) => (
    <BlogItem
      title={item.title}
      content={item.content}
      style={styles.horizontalListItem}
    />
  );

  // FlatList用のレンダリング関数（縦スクロール用）
  const renderVerticalItem = ({ item }: { item: BlogItemProps }) => (
    <BlogItem
      title={item.title}
      content={item.content}
      style={styles.verticalListItem}
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* 上部: 横スクロールのScrollView */}
        <View style={styles.scrollViewContainer}>
          <Text style={styles.sectionTitle}>ScrollView（横スクロール）</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScrollView}
            contentContainerStyle={styles.horizontalScrollViewContent}
          >
            {horizontalScrollItems}
          </ScrollView>
        </View>

        {/* 中央: 縦スクロールのScrollView */}
        <View style={styles.scrollViewContainer}>
          <Text style={styles.sectionTitle}>ScrollView（縦スクロール）</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.verticalScrollView}
            contentContainerStyle={styles.verticalScrollViewContent}
          >
            {verticalScrollItems}
          </ScrollView>
        </View>

        {/* 下部: 横スクロールのFlatList */}
        <View style={styles.listViewContainer}>
          <Text style={styles.sectionTitle}>FlatList（横スクロール）</Text>
          <FlatList
            data={blogs}
            renderItem={renderHorizontalItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalFlatList}
            contentContainerStyle={styles.horizontalFlatListContent}
          />
        </View>

        {/* 最下部: 縦スクロールのFlatList */}
        <View style={styles.listViewContainer}>
          <Text style={styles.sectionTitle}>FlatList（縦スクロール）</Text>
          <FlatList
            data={blogs}
            renderItem={renderVerticalItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            style={styles.verticalFlatList}
            contentContainerStyle={styles.verticalFlatListContent}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
  scrollViewContainer: {
    marginBottom: 24,
  },
  // 横スクロールのScrollViewスタイル
  horizontalScrollView: {
    maxHeight: 200,
  },
  horizontalScrollViewContent: {
    paddingHorizontal: 8,
  },
  horizontalScrollItem: {
    width: 200,
    marginRight: 12,
  },
  // 縦スクロールのScrollViewスタイル
  verticalScrollView: {
    maxHeight: 200,
  },
  verticalScrollViewContent: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  verticalScrollItem: {
    marginBottom: 12,
  },
  // 共通のアイテムスタイル
  item: {
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  itemContent: {
    fontSize: 14,
    color: "#666",
  },
  listViewContainer: {
    marginBottom: 24,
  },
  // 横スクロールのFlatListスタイル
  horizontalFlatList: {
    maxHeight: 200,
  },
  horizontalFlatListContent: {
    paddingHorizontal: 8,
  },
  horizontalListItem: {
    width: 200,
    marginRight: 12,
  },
  // 縦スクロールのFlatListスタイル
  verticalFlatList: {
    maxHeight: 200,
  },
  verticalFlatListContent: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  verticalListItem: {
    marginBottom: 12,
  },
});
