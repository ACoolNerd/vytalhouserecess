import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { Head } from 'expo-router/head';
import { Link } from 'expo-router';
import { SiteShell } from '@/components/SiteShell';
import { Section } from '@/components/Section';
import { colors, layout } from '@/constants/theme';

export default function FacilityPage() {
  return (
    <SiteShell>
      <Head>
        <title>The House | VYTAL House</title>
        <meta name="description" content="Explore the working flagship space plan and development principles for VYTAL House in Howard County, Maryland." />
      </Head>
      <ImageBackground source={require('../assets/images/thermal-chamber.jpg')} style={styles.hero} imageStyle={styles.heroImage}>
        <View style={styles.heroOverlay}>
          <View style={styles.heroInner}>
            <Text style={styles.eyebrow}>THE HOWARD COUNTY FLAGSHIP</Text>
            <Text style={styles.title}>A house built to change the pace of your day.</Text>
            <Text style={styles.intro}>Premium hospitality, private flow, advanced wellness technology, and clear separation between recovery and regulated clinical care.</Text>
          </View>
        </View>
      </ImageBackground>

      <Section dark={false} eyebrow="PLANNING REFERENCE" title="6785 Business Parkway · Units 1 and 2" intro="The working program uses approximately 5,760 square feet. Lease documents must preserve architectural verification because prior materials have shown a conflicting square-footage figure.">
        <View style={styles.factGrid}>
          {[
            ['MARKET', 'Howard County, Maryland'],
            ['WORKING AREA', 'Approximately 5,760 SF'],
            ['STATUS', 'Site, lease, design, financing, and approvals in development'],
            ['PUBLIC CONTACT', 'Info@VYTALHouse.com']
          ].map(([label, value]) => (
            <View key={label} style={styles.factCard}>
              <Text style={styles.factLabel}>{label}</Text>
              <Text style={styles.factValue}>{value}</Text>
            </View>
          ))}
        </View>
      </Section>

      <Section eyebrow="WORKING SPACE PROGRAM" title="A clear member journey from arrival to decompression." intro="Final room counts and adjacencies require architectural, engineering, zoning, accessibility, fire, utility, and provider review.">
        <View style={styles.zoneGrid}>
          {[
            ['01', 'Arrival + membership', 'Reception, retail, check-in, education, and a premium first impression.'],
            ['02', 'Fire + Ice', 'Wet/dry recovery infrastructure with controlled circulation, changing, sanitation, and supervision.'],
            ['03', 'Technology recovery', 'Red light, compression, hyperbaric planning, and other approved modalities.'],
            ['04', 'Clinical lane', 'Separate consultation and treatment flow for licensed-provider services, where approved.'],
            ['05', 'Recovery lounge', 'Hydration, quiet seating, member education, and post-session decompression.'],
            ['06', 'Operations', 'Nurse/provider support, staff work areas, storage, cleaning, privacy, and back-of-house controls.']
          ].map(([number, title, copy]) => (
            <View key={number} style={styles.zoneCard}>
              <Text style={styles.zoneNumber}>{number}</Text>
              <Text style={styles.zoneTitle}>{title}</Text>
              <Text style={styles.zoneCopy}>{copy}</Text>
            </View>
          ))}
        </View>
      </Section>

      <Section dark={false} eyebrow="DESIGN LANGUAGE" title="Black marble. Warm gold. Ice blue. Calm light." intro="The environment should feel like a private recovery club—cinematic and elevated, but approachable and easy to navigate.">
        <View style={styles.designGrid}>
          <ImageBackground source={require('../assets/images/red-light.jpg')} style={styles.designImage} imageStyle={styles.designImageRadius}>
            <View style={styles.designOverlay}><Text style={styles.designImageText}>Technology should feel integrated into the house—not displayed like a trade-show floor.</Text></View>
          </ImageBackground>
          <View style={styles.designList}>
            {[
              'Warm indirect lighting and controlled sensory transitions',
              'Durable premium materials that can meet sanitation needs',
              'Private circulation for clinical and high-touch services',
              'Accessible paths, clear wayfinding, and quiet decompression zones',
              'Member-facing education without unsupported health claims'
            ].map((item) => (
              <View key={item} style={styles.designRow}><View style={styles.dot} /><Text style={styles.designText}>{item}</Text></View>
            ))}
          </View>
        </View>
      </Section>

      <Section eyebrow="DEVELOPMENT GATE" title="No unconditional opening promise." intro="The project should move from written use confirmation to final design, construction pricing, financing, permits, provider readiness, and inspections before launch communications become definitive.">
        <Link href="/contact" asChild><Pressable style={styles.button}><Text style={styles.buttonText}>REQUEST THE PROJECT OVERVIEW</Text></Pressable></Link>
      </Section>
    </SiteShell>
  );
}

const styles = StyleSheet.create({
  hero: { minHeight: 680, justifyContent: 'flex-end', backgroundColor: colors.ink },
  heroImage: { opacity: 0.83 },
  heroOverlay: { flex: 1, justifyContent: 'flex-end', paddingHorizontal: layout.pagePadding, paddingVertical: 70, backgroundColor: 'rgba(9,11,14,0.48)' },
  heroInner: { width: '100%', maxWidth: layout.maxWidth, alignSelf: 'center' },
  eyebrow: { color: colors.ice, fontSize: 11, fontWeight: '800', letterSpacing: 2.2 },
  title: { color: colors.ivory, fontSize: 62, lineHeight: 68, fontWeight: '400', letterSpacing: -2, maxWidth: 920, marginTop: 20 },
  intro: { color: colors.mist, fontSize: 18, lineHeight: 29, maxWidth: 760, marginTop: 24 },
  factGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
  factCard: { flexGrow: 1, flexBasis: 260, minWidth: 240, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: 'rgba(9,11,14,0.1)', borderRadius: 18, padding: 24 },
  factLabel: { color: colors.iceDeep, fontSize: 10, fontWeight: '900', letterSpacing: 1.7 },
  factValue: { color: colors.ink, fontSize: 18, lineHeight: 26, fontWeight: '500', marginTop: 16 },
  zoneGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 18 },
  zoneCard: { flexGrow: 1, flexBasis: 340, minWidth: 270, backgroundColor: colors.panel, borderWidth: 1, borderColor: colors.line, borderRadius: 20, padding: 25 },
  zoneNumber: { color: colors.gold, fontSize: 11, fontWeight: '900', letterSpacing: 1.7 },
  zoneTitle: { color: colors.ivory, fontSize: 23, lineHeight: 29, fontWeight: '500', marginTop: 24 },
  zoneCopy: { color: colors.muted, fontSize: 14, lineHeight: 23, marginTop: 11 },
  designGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24, alignItems: 'stretch' },
  designImage: { flexGrow: 1, flexBasis: 520, minHeight: 520, justifyContent: 'flex-end' },
  designImageRadius: { borderRadius: 24 },
  designOverlay: { padding: 28, backgroundColor: 'rgba(9,11,14,0.45)', borderRadius: 24 },
  designImageText: { color: colors.ivory, fontSize: 21, lineHeight: 31 },
  designList: { flexGrow: 1, flexBasis: 380, backgroundColor: colors.ink, borderRadius: 24, padding: 30, justifyContent: 'center' },
  designRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 13, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: colors.line },
  dot: { width: 7, height: 7, borderRadius: 4, backgroundColor: colors.ice, marginTop: 8 },
  designText: { color: colors.mist, fontSize: 15, lineHeight: 24, flex: 1 },
  button: { alignSelf: 'flex-start', backgroundColor: colors.gold, borderRadius: 999, paddingHorizontal: 24, paddingVertical: 16 },
  buttonText: { color: colors.ink, fontSize: 11, fontWeight: '900', letterSpacing: 1.25 }
});
