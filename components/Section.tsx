import type { PropsWithChildren, ReactNode } from 'react';
import { StyleSheet, Text, View, type ViewStyle } from 'react-native';
import { colors, layout } from '@/constants/theme';

type SectionProps = PropsWithChildren<{
  eyebrow?: string;
  title?: string;
  intro?: string;
  trailing?: ReactNode;
  style?: ViewStyle;
  dark?: boolean;
}>;

export function Section({ eyebrow, title, intro, trailing, children, style, dark = true }: SectionProps) {
  return (
    <View style={[styles.section, dark ? styles.dark : styles.light, style]}>
      <View style={styles.inner}>
        {(eyebrow || title || intro || trailing) && (
          <View style={styles.headingRow}>
            <View style={styles.headingCopy}>
              {eyebrow ? <Text style={[styles.eyebrow, !dark && styles.eyebrowLight]}>{eyebrow}</Text> : null}
              {title ? <Text style={[styles.title, !dark && styles.titleLight]}>{title}</Text> : null}
              {intro ? <Text style={[styles.intro, !dark && styles.introLight]}>{intro}</Text> : null}
            </View>
            {trailing}
          </View>
        )}
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: '100%',
    paddingHorizontal: layout.pagePadding,
    paddingVertical: 88
  },
  dark: { backgroundColor: colors.ink },
  light: { backgroundColor: colors.ivory },
  inner: {
    width: '100%',
    maxWidth: layout.maxWidth,
    alignSelf: 'center'
  },
  headingRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: 28,
    marginBottom: 42
  },
  headingCopy: { maxWidth: 820 },
  eyebrow: {
    color: colors.ice,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2.4,
    marginBottom: 14
  },
  eyebrowLight: { color: colors.iceDeep },
  title: {
    color: colors.ivory,
    fontSize: 46,
    lineHeight: 52,
    fontWeight: '500',
    letterSpacing: -1.2
  },
  titleLight: { color: colors.ink },
  intro: {
    color: colors.muted,
    fontSize: 18,
    lineHeight: 29,
    marginTop: 18,
    maxWidth: 760
  },
  introLight: { color: '#545D64' }
});
