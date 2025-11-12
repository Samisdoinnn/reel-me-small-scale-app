import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { GradientBackground } from '../components/GradientBackground';
import { AppHeader } from '../components/AppHeader';
import { MessagePreview } from '../components/MessagePreview';
import { palette, typography } from '../theme';
import { messages } from '../data/mockData';

export const ChatScreen = () => {
  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <AppHeader
          title="Encrypted chats"
          subtitle="Disappearing after view"
          rightAction={{ icon: 'create-outline', onPress: () => undefined }}
        />
        <View style={styles.section}>
          <View style={styles.banner}>
            <Text style={styles.bannerTitle}>Private mode is on</Text>
            <Text style={styles.bannerSubtitle}>Screenshots trigger instant alerts</Text>
          </View>
          <Text style={styles.sectionTitle}>Recents</Text>
          {messages.map((message) => (
            <MessagePreview
              key={message.id}
              user={message.user}
              snippet={message.snippet}
              timestamp={message.timestamp}
              unread={message.unread}
              avatar={message.avatar}
            />
          ))}
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
  banner: {
    padding: 18,
    borderRadius: 20,
    marginBottom: 26,
    backgroundColor: 'rgba(148,163,184,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(124,58,237,0.3)',
  },
  bannerTitle: {
    ...typography.title,
  },
  bannerSubtitle: {
    ...typography.caption,
    color: palette.softGray,
    marginTop: 6,
  },
  sectionTitle: {
    ...typography.title,
    marginBottom: 16,
  },
});

