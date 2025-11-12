import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { palette, typography } from '../theme';

type MessagePreviewProps = {
  user: string;
  snippet: string;
  timestamp: string;
  unread?: boolean;
  avatar: string;
};

export const MessagePreview = ({ user, snippet, timestamp, unread, avatar }: MessagePreviewProps) => {
  return (
    <View style={[styles.container, unread && styles.containerUnread]}>
      <View style={styles.avatarWrapper}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        {unread ? (
          <View style={styles.unreadDot}>
            <Ionicons name="flash" size={12} color={palette.midnight} />
          </View>
        ) : null}
      </View>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.user}>{user}</Text>
          <Text style={styles.time}>{timestamp}</Text>
        </View>
        <Text style={styles.snippet} numberOfLines={1}>
          {snippet}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 18,
    backgroundColor: 'rgba(13,27,42,0.65)',
    marginBottom: 12,
  },
  containerUnread: {
    borderWidth: 1,
    borderColor: palette.aquaBlue,
  },
  avatarWrapper: {
    height: 52,
    width: 52,
    borderRadius: 26,
    overflow: 'hidden',
    marginRight: 14,
  },
  avatar: {
    height: '100%',
    width: '100%',
  },
  unreadDot: {
    position: 'absolute',
    right: -2,
    bottom: -2,
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: palette.aquaBlue,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: palette.midnight,
  },
  content: {
    flex: 1,
    gap: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  user: {
    ...typography.title,
  },
  time: {
    ...typography.micro,
    color: palette.softGray,
  },
  snippet: {
    ...typography.caption,
    color: palette.frostedWhite,
  },
});

