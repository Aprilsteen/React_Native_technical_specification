import React, { useEffect, useState, useCallback  } from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { fetchNews } from '../utils/api';
import { NewsItem } from '../types/NewsItem';
import { AnimatedCard } from '../components/animCard';


const LegacyListScreen = () => {
  const [data, setData] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);


  const renderItem = useCallback(({ item, index }: { item: NewsItem; index: number }) => (
         <AnimatedCard item={item} index={index} />
    ), []);

   const keyExtractor = useCallback((item: NewsItem) => item.id.toString(), []);


  if (loading) return <ActivityIndicator size="large" />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Новости</Text>
     <FlatList
        style={styles.list}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  list: { flex: 1 },
});

export default LegacyListScreen;