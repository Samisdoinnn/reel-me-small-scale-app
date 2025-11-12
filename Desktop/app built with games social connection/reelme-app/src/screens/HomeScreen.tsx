import { useMemo } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppHeader } from '../components/AppHeader';
import { GradientBackground } from '../components/GradientBackground';
import { QuickActionButton } from '../components/QuickActionButton';
import { StoryBubble } from '../components/StoryBubble';
import { StoryCard } from '../components/StoryCard';
import { palette, typography } from '../theme';
import { featureStories, storyBubbles } from '../data/mockData';
import { StatPill } from '../components/StatPill';

export const HomeScreen = () => {
  const quickActions = useMemo(
    () => [
      { icon: 'camera-outline' as const, label: 'Capture' },
      { icon: 'sparkles-outline' as const, label: 'Filters' },
      { icon: 'people-outline' as const, label: 'Circle' },
      { icon: 'analytics-outline' as const, label: 'Insights' },
    ],
    [],
  );

  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <AppHeader
          title="ReelMe"
          subtitle="Real moments, real control"
          rightAction={{
            icon: 'notifications-outline',
            onPress: () => undefined,
          }}
          accessory={<StatPill label="Streak" value="Day 12" accent={palette.sunriseOrange} />}
        />
        <View style={styles.section}>
          <FlatList
            data={storyBubbles}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
            renderItem={({ item }) => <StoryBubble label={item.label} image={item.image} active={item.active} />}
          />
        </View>
        <View style={[styles.section, styles.actionsRow]}>
          {quickActions.map((action) => (
            <QuickActionButton key={action.label} icon={action.icon} label={action.label} />
          ))}
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Creator picks</Text>
          <Text style={styles.sectionLink}>View all</Text>
        </View>
        <FlatList
          data={featureStories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          renderItem={({ item }) => (
            <StoryCard title={item.title} author={item.author} views={item.views} expiry={item.expiry} media={item.media} />
          )}
        />
        <View style={[styles.sectionHeader, { marginTop: 28 }]}>
          <Text style={styles.sectionTitle}>Your momentum</Text>
          <Text style={styles.sectionLink}>Creator studio</Text>
        </View>
        <View style={styles.momentumRow}>
          <StatPill label="Stories" value="3 today" />
          <StatPill label="Reactions" value="148" accent={palette.neonPink} />
          <StatPill label="Shares" value="24" accent={palette.sunriseOrange} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: 120,
    gap: 28,
  },
  section: {
    paddingHorizontal: 20,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionHeader: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    ...typography.title,
  },
  sectionLink: {
    ...typography.caption,
    color: palette.aquaBlue,
  },
  momentumRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

