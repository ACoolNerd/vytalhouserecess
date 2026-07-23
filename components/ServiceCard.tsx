import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import type { Service } from '@/data/content';
import { colors, layout, shadows } from '@/constants/theme';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <View style={[styles.card, shadows.card]}>
      <ImageBackground source={service.image} resizeMode="cover" style={styles.image} imageStyle={styles.imageRadius}>
        <View style={styles.imageOverlay}>
          <Text style={styles.eyebrow}>{service.eyebrow}</Text>
          <Text style={styles.title}>{service.title}</Text>
        </View>
      </ImageBackground>
      <View style={styles.body}>
        <Text style={styles.summary}>{service.summary}</Text>
        <View style={styles.list}>
          {service.includes.map((item) => (
            <View key={item} style={styles.listRow}>
              <View style={styles.dot} />
              <Text style={styles.listText}>{item}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.status}>{service.status}</Text>
        <Link href="/contact" asChild>
          <Pressable style={styles.linkButton}>
            <Text style={styles.linkButtonText}>ASK ABOUT THIS LANE →</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    flexBasis: 500,
    maxWidth: 590,
    minWidth: 280,
    borderRadius: layout.radius,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.line,
    overflow: 'hidden'
  },
  image: { minHeight: 340, justifyContent: 'flex-end' },
  imageRadius: { borderTopLeftRadius: layout.radius, borderTopRightRadius: layout.radius },
  imageOverlay: { padding: 28, paddingTop: 120, backgroundColor: 'rgba(9,11,14,0.42)' },
  eyebrow: { color: colors.ice, fontSize: 11, fontWeight: '800', letterSpacing: 2.2 },
  title: { color: colors.ivory, fontSize: 32, lineHeight: 38, fontWeight: '500', marginTop: 10 },
  body: { padding: 28 },
  summary: { color: colors.mist, fontSize: 16, lineHeight: 26 },
  list: { marginTop: 22, gap: 11 },
  listRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 11 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.gold, marginTop: 8 },
  listText: { color: colors.muted, fontSize: 14, lineHeight: 22, flex: 1 },
  status: { color: colors.goldSoft, fontSize: 12, lineHeight: 19, marginTop: 23, paddingTop: 18, borderTopWidth: 1, borderTopColor: colors.line },
  linkButton: { alignSelf: 'flex-start', marginTop: 24, paddingVertical: 8 },
  linkButtonText: { color: colors.ice, fontSize: 11, fontWeight: '800', letterSpacing: 1.4 }
});
