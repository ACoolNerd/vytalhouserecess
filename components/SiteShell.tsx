import { useMemo, useState, type PropsWithChildren } from 'react';
import {
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions
} from 'react-native';
import { Link, type Href, usePathname } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, layout } from '@/constants/theme';

const nav: { label: string; href: Href }[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Memberships', href: '/memberships' },
  { label: 'The House', href: '/facility' },
  { label: 'Floor Plan', href: '/floor-plan' },
  { label: 'Contact', href: '/contact' }
];

export function SiteShell({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const { width } = useWindowDimensions();
  const [menuOpen, setMenuOpen] = useState(false);
  const desktop = width >= 1020;
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.announcement}>
        <Text style={styles.announcementText}>HOWARD COUNTY FLAGSHIP IN DEVELOPMENT · COMPLETE 5,760 SF CONCEPT NOW AVAILABLE</Text>
      </View>
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Link href="/" asChild>
            <Pressable accessibilityRole="link" style={styles.brand}>
              <Text style={styles.brandMark}>V</Text>
              <View>
                <Text style={styles.brandName}>VYTAL HOUSE</Text>
                <Text style={styles.brandLine}>RECHARGE · RECOVER · EVOLVE</Text>
              </View>
            </Pressable>
          </Link>

          {desktop ? (
            <View style={styles.desktopNav}>
              {nav.map((item) => {
                const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(String(item.href)));
                return (
                  <Link key={item.label} href={item.href} asChild>
                    <Pressable accessibilityRole="link" style={styles.navLinkWrap}>
                      <Text style={[styles.navLink, active && styles.navLinkActive]}>{item.label}</Text>
                    </Pressable>
                  </Link>
                );
              })}
              <Link href="/contact" asChild>
                <Pressable accessibilityRole="link" style={styles.primaryButton}>
                  <Text style={styles.primaryButtonText}>JOIN THE LIST</Text>
                </Pressable>
              </Link>
            </View>
          ) : (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Toggle navigation menu"
              onPress={() => setMenuOpen((value) => !value)}
              style={styles.menuButton}
            >
              <Text style={styles.menuButtonText}>{menuOpen ? 'CLOSE' : 'MENU'}</Text>
            </Pressable>
          )}
        </View>
        {!desktop && menuOpen ? (
          <View style={styles.mobileNav}>
            {nav.map((item) => (
              <Link key={item.label} href={item.href} asChild>
                <Pressable onPress={() => setMenuOpen(false)} style={styles.mobileNavItem}>
                  <Text style={styles.mobileNavText}>{item.label}</Text>
                </Pressable>
              </Link>
            ))}
          </View>
        ) : null}
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {children}
        <View style={styles.footer}>
          <View style={styles.footerInner}>
            <View style={styles.footerTop}>
              <View style={styles.footerBrandColumn}>
                <Text style={styles.footerBrand}>VYTAL HOUSE</Text>
                <Text style={styles.footerTagline}>A modern wellness and recovery house for Howard County.</Text>
                <Text style={styles.footerStatus}>Flagship planning reference: 6785 Business Parkway, Units 1 and 2, Howard County, Maryland.</Text>
              </View>
              <View style={styles.footerLinks}>
                <View>
                  <Text style={styles.footerLabel}>EXPLORE</Text>
                  {nav.slice(1).map((item) => (
                    <Link key={item.label} href={item.href} asChild>
                      <Pressable><Text style={styles.footerLink}>{item.label}</Text></Pressable>
                    </Link>
                  ))}
                </View>
                <View>
                  <Text style={styles.footerLabel}>CONNECT</Text>
                  <Pressable onPress={() => Linking.openURL('mailto:Info@VYTALHouse.com')}>
                    <Text style={styles.footerLink}>Info@VYTALHouse.com</Text>
                  </Pressable>
                  <Link href="/legal" asChild><Pressable><Text style={styles.footerLink}>Legal + Disclosures</Text></Pressable></Link>
                </View>
              </View>
            </View>
            <View style={styles.footerBottom}>
              <Text style={styles.copyright}>© {currentYear} VYTAL House. All rights reserved.</Text>
              <Text style={styles.copyright}>Floor plan, services, pricing, location, providers, and opening timing remain subject to professional validation and final approval.</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.ink },
  announcement: {
    minHeight: 34,
    backgroundColor: colors.ice,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 7
  },
  announcementText: {
    color: colors.ink,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.25,
    textAlign: 'center'
  },
  header: {
    backgroundColor: 'rgba(9,11,14,0.97)',
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
    zIndex: 50,
    ...(Platform.OS === 'web' ? ({ position: 'sticky', top: 0 } as object) : {})
  },
  headerInner: {
    width: '100%',
    maxWidth: layout.maxWidth,
    minHeight: 78,
    alignSelf: 'center',
    paddingHorizontal: layout.pagePadding,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 18
  },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  brandMark: {
    width: 38,
    height: 38,
    borderWidth: 1,
    borderColor: colors.gold,
    borderRadius: 19,
    color: colors.gold,
    textAlign: 'center',
    lineHeight: 36,
    fontSize: 21,
    fontWeight: '500'
  },
  brandName: { color: colors.ivory, fontSize: 16, fontWeight: '700', letterSpacing: 2.2 },
  brandLine: { color: colors.muted, fontSize: 8, letterSpacing: 1.35, marginTop: 3 },
  desktopNav: { flexDirection: 'row', alignItems: 'center', gap: 17 },
  navLinkWrap: { paddingVertical: 12 },
  navLink: { color: colors.muted, fontSize: 11, fontWeight: '600', letterSpacing: 1.05 },
  navLinkActive: { color: colors.ivory },
  primaryButton: {
    backgroundColor: colors.gold,
    paddingHorizontal: 18,
    paddingVertical: 13,
    borderRadius: 999
  },
  primaryButtonText: { color: colors.ink, fontSize: 10, fontWeight: '800', letterSpacing: 1.2 },
  menuButton: { borderWidth: 1, borderColor: colors.line, borderRadius: 999, paddingHorizontal: 16, paddingVertical: 11 },
  menuButtonText: { color: colors.ivory, fontSize: 11, fontWeight: '700', letterSpacing: 1.5 },
  mobileNav: { borderTopWidth: 1, borderTopColor: colors.line, paddingHorizontal: layout.pagePadding, paddingVertical: 10 },
  mobileNavItem: { paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: colors.line },
  mobileNavText: { color: colors.ivory, fontSize: 16, fontWeight: '500' },
  scroll: { flex: 1, backgroundColor: colors.ink },
  scrollContent: { flexGrow: 1 },
  footer: { backgroundColor: '#07090B', paddingHorizontal: layout.pagePadding, paddingTop: 72, paddingBottom: 36, borderTopWidth: 1, borderTopColor: colors.line },
  footerInner: { width: '100%', maxWidth: layout.maxWidth, alignSelf: 'center' },
  footerTop: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 48 },
  footerBrandColumn: { maxWidth: 500 },
  footerBrand: { color: colors.ivory, fontSize: 28, fontWeight: '600', letterSpacing: 2.5 },
  footerTagline: { color: colors.goldSoft, fontSize: 18, lineHeight: 28, marginTop: 16 },
  footerStatus: { color: colors.muted, fontSize: 13, lineHeight: 21, marginTop: 18 },
  footerLinks: { flexDirection: 'row', flexWrap: 'wrap', gap: 70 },
  footerLabel: { color: colors.ice, fontSize: 10, fontWeight: '800', letterSpacing: 2, marginBottom: 15 },
  footerLink: { color: colors.mist, fontSize: 14, marginBottom: 13 },
  footerBottom: { marginTop: 54, paddingTop: 22, borderTopWidth: 1, borderTopColor: colors.line, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12 },
  copyright: { color: colors.muted, fontSize: 11, lineHeight: 17, maxWidth: 620 }
});
