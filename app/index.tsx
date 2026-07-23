import { ImageBackground, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Head } from 'expo-router/head';
import { Link } from 'expo-router';
import { SiteShell } from '@/components/SiteShell';
import { Section } from '@/components/Section';
import { ServiceCard } from '@/components/ServiceCard';
import { colors, layout } from '@/constants/theme';
import { faqs, services } from '@/data/content';

export default function HomePage() {
  const { width } = useWindowDimensions();
  const compact = width < 760;

  return (
    <SiteShell>
      <Head>
        <title>VYTAL House | Recharge. Recover. Evolve.</title>
        <meta name="description" content="VYTAL House is a premium wellness and recovery house in development for Howard County, Maryland." />
        <meta property="og:title" content="VYTAL House — Recharge. Recover. Evolve." />
        <meta property="og:description" content="Join the founding interest list for Howard County's modern wellness and recovery house." />
      </Head>

      <ImageBackground
        source={require('../assets/images/cold-plunge.jpg')}
        resizeMode="cover"
        style={[styles.hero, compact && styles.heroCompact]}
        imageStyle={styles.heroImage}
      >
        <View style={styles.heroOverlay}>
          <View style={styles.heroInner}>
            <View style={styles.heroCopy}>
              <Text style={styles.heroEyebrow}>HOWARD COUNTY · FLAGSHIP IN DEVELOPMENT</Text>
              <Text style={[styles.heroTitle, compact && styles.heroTitleCompact]}>Recharge. Recover. Evolve.</Text>
              <Text style={styles.heroText}>
                A modern wellness and recovery house built around intentional protocols, premium hospitality, and a compliance-first operating model.
              </Text>
              <View style={styles.heroActions}>
                <Link href="/contact" asChild>
                  <Pressable style={styles.heroPrimary}><Text style={styles.heroPrimaryText}>JOIN THE FOUNDING LIST</Text></Pressable>
                </Link>
                <Link href="/services" asChild>
                  <Pressable style={styles.heroSecondary}><Text style={styles.heroSecondaryText}>EXPLORE THE EXPERIENCE</Text></Pressable>
                </Link>
              </View>
            </View>
            <View style={styles.heroPanel}>
              <Text style={styles.heroPanelLabel}>THE VYTAL PATH</Text>
              {['Baseline', 'Restore', 'Elevate'].map((step, index) => (
                <View key={step} style={styles.stepRow}>
                  <Text style={styles.stepNumber}>0{index + 1}</Text>
                  <View>
                    <Text style={styles.stepTitle}>{step}</Text>
                    <Text style={styles.stepText}>{['Understand your current state.', 'Move through a guided recovery sequence.', 'Build a repeatable wellness rhythm.'][index]}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ImageBackground>

      <Section
        eyebrow="THE HOUSE MODEL"
        title="Not another appointment. A repeatable system for how you feel."
        intro="VYTAL House translates the strongest ideas in premium recovery hospitality into an original Howard County experience—without copying another operator's brand, content, or claims."
        dark={false}
      >
        <View style={styles.principles}>
          {[
            ['01', 'Guided, not guessed', 'Clear arrival, baseline, modality, and decompression pathways help members understand what happens next.'],
            ['02', 'Premium, not intimidating', 'Black marble, warm gold, ice-blue accents, and calm hospitality create a club-like experience rather than a clinical waiting room.'],
            ['03', 'Compliance by design', 'Medical, aesthetic, and non-medical services remain separated by provider scope, entity, protocol, insurance, and approval.']
          ].map(([number, title, copy]) => (
            <View key={number} style={styles.principleCard}>
              <Text style={styles.principleNumber}>{number}</Text>
              <Text style={styles.principleTitle}>{title}</Text>
              <Text style={styles.principleCopy}>{copy}</Text>
            </View>
          ))}
        </View>
      </Section>

      <Section eyebrow="PLANNED EXPERIENCE LANES" title="One house. Distinct pathways." intro="Each lane is presented as planned until equipment, providers, construction, zoning, licensing, and operating protocols are final.">
        <View style={styles.serviceGrid}>
          {services.slice(0, 2).map((service) => <ServiceCard key={service.id} service={service} />)}
        </View>
        <Link href="/services" asChild>
          <Pressable style={styles.centerButton}><Text style={styles.centerButtonText}>VIEW ALL PLANNED SERVICES</Text></Pressable>
        </Link>
      </Section>

      <Section dark={false} eyebrow="THE FLAGSHIP" title="Designed for Howard County." intro="The current planning reference is approximately 5,760 square feet across Units 1 and 2 at 6785 Business Parkway, with final square footage and site control subject to architectural and legal verification.">
        <View style={styles.locationGrid}>
          <ImageBackground source={require('../assets/images/thermal-chamber.jpg')} style={styles.locationImage} imageStyle={styles.locationImageRadius}>
            <View style={styles.locationOverlay}><Text style={styles.locationImageText}>A premium recovery environment with private flow, member hospitality, and technology-forward experiences.</Text></View>
          </ImageBackground>
          <View style={styles.locationPanel}>
            {[
              ['STATUS', 'In development'],
              ['PLANNING ADDRESS', '6785 Business Parkway · Units 1 & 2'],
              ['MARKET', 'Howard County, Maryland'],
              ['CONTACT', 'Info@VYTALHouse.com']
            ].map(([label, value]) => (
              <View key={label} style={styles.factRow}>
                <Text style={styles.factLabel}>{label}</Text>
                <Text style={styles.factValue}>{value}</Text>
              </View>
            ))}
            <Link href="/facility" asChild><Pressable style={styles.darkButton}><Text style={styles.darkButtonText}>SEE THE HOUSE PLAN</Text></Pressable></Link>
          </View>
        </View>
      </Section>

      <Section eyebrow="FOUNDING MEMBERSHIP" title="Build your recovery rhythm before doors open." intro="Essential, Elite, and Executive are the working membership lanes. Pricing and final inclusions will be released only after approvals and operating assumptions are confirmed.">
        <View style={styles.membershipCallout}>
          <View style={styles.membershipCopy}>
            <Text style={styles.membershipTitle}>Founding interest is open.</Text>
            <Text style={styles.membershipText}>Join for launch updates, first-access opportunities, community previews, and verified membership details when available.</Text>
          </View>
          <Link href="/memberships" asChild><Pressable style={styles.heroPrimary}><Text style={styles.heroPrimaryText}>EXPLORE MEMBERSHIP</Text></Pressable></Link>
        </View>
      </Section>

      <Section dark={false} eyebrow="QUESTIONS" title="What is confirmed today?">
        <View style={styles.faqGrid}>
          {faqs.map((faq) => (
            <View key={faq.question} style={styles.faqCard}>
              <Text style={styles.faqQuestion}>{faq.question}</Text>
              <Text style={styles.faqAnswer}>{faq.answer}</Text>
            </View>
          ))}
        </View>
      </Section>
    </SiteShell>
  );
}

const styles = StyleSheet.create({
  hero: { minHeight: 780, justifyContent: 'flex-end', backgroundColor: colors.ink },
  heroCompact: { minHeight: 880 },
  heroImage: { opacity: 0.88 },
  heroOverlay: { flex: 1, justifyContent: 'flex-end', paddingHorizontal: layout.pagePadding, paddingVertical: 64, backgroundColor: 'rgba(9,11,14,0.42)' },
  heroInner: { width: '100%', maxWidth: layout.maxWidth, alignSelf: 'center', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 36 },
  heroCopy: { maxWidth: 720, flexGrow: 1, flexBasis: 560 },
  heroEyebrow: { color: colors.ice, fontSize: 11, fontWeight: '800', letterSpacing: 2.2, marginBottom: 18 },
  heroTitle: { color: colors.ivory, fontSize: 76, lineHeight: 80, fontWeight: '400', letterSpacing: -2.8 },
  heroTitleCompact: { fontSize: 52, lineHeight: 57, letterSpacing: -1.8 },
  heroText: { color: colors.mist, fontSize: 19, lineHeight: 30, maxWidth: 650, marginTop: 24 },
  heroActions: { flexDirection: 'row', flexWrap: 'wrap', gap: 13, marginTop: 32 },
  heroPrimary: { backgroundColor: colors.gold, paddingHorizontal: 22, paddingVertical: 15, borderRadius: 999 },
  heroPrimaryText: { color: colors.ink, fontSize: 11, fontWeight: '900', letterSpacing: 1.3 },
  heroSecondary: { backgroundColor: 'rgba(9,11,14,0.44)', borderWidth: 1, borderColor: 'rgba(246,241,232,0.52)', paddingHorizontal: 22, paddingVertical: 15, borderRadius: 999 },
  heroSecondaryText: { color: colors.ivory, fontSize: 11, fontWeight: '800', letterSpacing: 1.2 },
  heroPanel: { flexBasis: 330, maxWidth: 390, minWidth: 280, backgroundColor: 'rgba(9,11,14,0.82)', borderWidth: 1, borderColor: colors.line, borderRadius: 22, padding: 24 },
  heroPanelLabel: { color: colors.gold, fontSize: 10, fontWeight: '800', letterSpacing: 2, marginBottom: 6 },
  stepRow: { flexDirection: 'row', gap: 16, paddingVertical: 17, borderBottomWidth: 1, borderBottomColor: colors.line },
  stepNumber: { color: colors.ice, fontSize: 12, fontWeight: '800' },
  stepTitle: { color: colors.ivory, fontSize: 17, fontWeight: '600' },
  stepText: { color: colors.muted, fontSize: 12, lineHeight: 18, marginTop: 4, maxWidth: 245 },
  principles: { flexDirection: 'row', flexWrap: 'wrap', gap: 18 },
  principleCard: { flexGrow: 1, flexBasis: 300, minWidth: 260, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: 'rgba(9,11,14,0.10)', borderRadius: 20, padding: 26 },
  principleNumber: { color: colors.iceDeep, fontSize: 12, fontWeight: '800', letterSpacing: 1.5 },
  principleTitle: { color: colors.ink, fontSize: 24, lineHeight: 30, fontWeight: '600', marginTop: 28 },
  principleCopy: { color: '#545D64', fontSize: 15, lineHeight: 24, marginTop: 13 },
  serviceGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24, justifyContent: 'center' },
  centerButton: { alignSelf: 'center', marginTop: 38, borderWidth: 1, borderColor: colors.line, borderRadius: 999, paddingHorizontal: 22, paddingVertical: 14 },
  centerButtonText: { color: colors.ivory, fontSize: 11, fontWeight: '800', letterSpacing: 1.3 },
  locationGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24 },
  locationImage: { flexGrow: 1, flexBasis: 560, minHeight: 520, justifyContent: 'flex-end' },
  locationImageRadius: { borderRadius: layout.radius },
  locationOverlay: { backgroundColor: 'rgba(9,11,14,0.48)', borderRadius: layout.radius, padding: 28 },
  locationImageText: { color: colors.ivory, fontSize: 22, lineHeight: 32, maxWidth: 600 },
  locationPanel: { flexGrow: 1, flexBasis: 340, backgroundColor: colors.ink, borderRadius: layout.radius, padding: 30, justifyContent: 'center' },
  factRow: { paddingVertical: 18, borderBottomWidth: 1, borderBottomColor: colors.line },
  factLabel: { color: colors.ice, fontSize: 10, fontWeight: '800', letterSpacing: 1.8 },
  factValue: { color: colors.ivory, fontSize: 17, lineHeight: 25, marginTop: 8 },
  darkButton: { alignSelf: 'flex-start', backgroundColor: colors.gold, borderRadius: 999, paddingHorizontal: 21, paddingVertical: 14, marginTop: 28 },
  darkButtonText: { color: colors.ink, fontSize: 11, fontWeight: '900', letterSpacing: 1.2 },
  membershipCallout: { backgroundColor: colors.panel, borderWidth: 1, borderColor: colors.line, borderRadius: layout.radius, padding: 34, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 28 },
  membershipCopy: { maxWidth: 720 },
  membershipTitle: { color: colors.ivory, fontSize: 32, lineHeight: 38, fontWeight: '500' },
  membershipText: { color: colors.muted, fontSize: 16, lineHeight: 25, marginTop: 12 },
  faqGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 18 },
  faqCard: { flexGrow: 1, flexBasis: 480, minWidth: 280, borderTopWidth: 1, borderTopColor: 'rgba(9,11,14,0.18)', paddingTop: 22, paddingBottom: 20 },
  faqQuestion: { color: colors.ink, fontSize: 20, lineHeight: 27, fontWeight: '600' },
  faqAnswer: { color: '#545D64', fontSize: 15, lineHeight: 24, marginTop: 12 }
});
