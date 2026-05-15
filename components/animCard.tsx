
import React from 'react';
import Animated, { 
  FadeInDown, 
  SlideInLeft,
  Layout,
} from 'react-native-reanimated';
import { Text, StyleSheet } from 'react-native';
import { NewsItem } from '../types/NewsItem';

export const AnimatedCard = ({ item, index }: { item: NewsItem; index: number }) => {
  return (
    <Animated.View 
      entering={FadeInDown.delay(index * 100).springify()} 
      layout={Layout.springify()}
      style={styles.card}
    >
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardBody}>{item.body}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 16, marginBottom: 12, borderRadius: 8 },
  cardTitle: { fontSize: 18, fontWeight: '600', marginBottom: 8 },
  cardBody: { fontSize: 14, color: '#555' }
});