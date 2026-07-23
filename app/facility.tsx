import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
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
        <meta name="description" content="Explore the complete 5,760-square-foot flagship floor plan and development principles for VYTAL House in Howard County, Maryland." />
      </Head>
      <ImageBackground source={require('../assets/images/thermal-chamber.jpg')} style={styles.hero} imageStyle={styles.heroImage}>
        <View style={styles.heroOverlay}>
          <View style={styles.heroInner}>
            <Text style={styles.eyebrow}>THE HOWARD COUNTY FLAGSHIP</Text>
            <Text style={styles.title}>A complete twenty-zone wellness and recovery house.</Text>
            <Text style={styles.intro}>Premium hospitality, executive screening, clinical wellness, recovery technologies, nutrition, and outdoor decompression organized inside a 5,760-square-foot design target.</Text>
          </View>
        </View>
      </ImageBackground>

      <Section dark={false} eyebrow="CURRENT DESIGN TARGET" title="6785 Business Parkway · Units 1 and 2" intro="The complete concept now controls the intended member experience and room program. Licensed architectural and engineering professionals must still verify the existing conditions and convert the concept into code-compliant permit documents.">
        <View style={styles.factGrid}>
          {[
            ['MARKET', 'Howard County, Maryland'],
            ['WORKING AREA', '5,760 SF design target'],
            ['PROGRAM', '20 numbered zones'],
            ['STATUS', 'Digital concept locked · survey and A/E validation pending']
          ].map(([label, value]) => (
            <View key={label} style={styles.factCard}>
              <Text style={styles.factLabel}>{label}</Text>
              <Text style={styles.factValue}>{value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.planPreview}>
          <Image
            source={require('../assets/images/vytal-house-floor-plan.jpg')}
            resizeMode="contain"
            style={styles.planImage}
            accessibilityLabel="Complete VYTAL House 5,760 square foot floor plan"
          />
          <View style={styles.planCopy}>
            <Text style={styles.planEyebrow}>COMPLETE FLOOR PLAN</Text>
            <Text style={styles.planTitle}>Every numbered room, service lane, premium amenity, and construction gate in one place.</Text>
            <Text style={styles.planText}>Open the interactive floor-plan page to review all twenty zones—from the welcome lounge and executive health suite through IV, HBOT, red light, cryotherapy, contrast, compression, massage, float, breathwork, café, and outdoor recovery.</Text>
            <Link href="/floor-plan" asChild>
              <Pressable style={styles.darkButton}><Text style={styles.darkButtonText}>OPEN THE COMPLETE FLOOR PLAN</Text></Pressable>
            </Link>
          </View>
        </View>
      </Section>

      <Section eyebrow="OPERATING CLUSTERS" title="A clear member journey from arrival to decompression." intro="The twenty rooms group into six operating clusters so staffing, privacy, utilities, cleaning, supervision, and member movement can be coordinated.">
        <View style={styles.zoneGrid}>
          {[
            ['01', 'Arrival + hospitality', 'Welcome lounge, concierge, wellness lounge, café, nutrition bar, and member support.'],
            ['02', 'Executive health', 'DEXA, VO₂ max, body composition, screenings, dashboards, and approved provider consultation.'],
            ['03', 'Licensed clinical wellness', 'IV and NAD+ therapies and HBOT delivered only through the correct clinical structure.'],
            ['04', 'Technology recovery', 'Red light, cryotherapy, PEMF, compression, salt therapy, and recovery technology.'],
            ['05', 'Fire + Ice + water', 'Infrared sauna, cold plunge, showers, contrast suite, float, drainage, waterproofing, and sanitation.'],
            ['06', 'Mind-body + outdoor', 'Massage, meditation, breathwork, sound healing, landscaped terrace, and decompression.']
          ].map(([number, title, copy]) => (
            <View key={number} style={styles.zoneCard}>
              <Text style={styles.zoneNumber}>{number}</Text>
              <Text style={styles.zoneTitle}>{title}</Text>
              <Text style={styles.zoneCopy}>{copy}</Text>
            </View>
          ))}
        </View>
      </Section>

      <Section dark={false} eyebrow="DESIGN LANGUAGE" title="Black marble. Warm gold. Ice blue. Calm light." intro="The environment should feel like a private longevity and recovery club—cinematic and elevated, but approachable and easy to navigate.">
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

      <Section eyebrow="DEVELOPMENT GATE" title="The design is complete; the construction translation comes next." intro="Proceed through field verification, code analysis, equipment coordination, MEP engineering, clinical separation, pricing, financing, permits, inspections, and certificate of occupancy before treating any room as construction-ready or available to members.">
        <View style={styles.actionRow}>
          <Link href="/floor-plan" asChild><Pressable style={styles.button}><Text style={styles.buttonText}>REVIEW THE 20-ZONE PLAN</Text></Pressable></Link>
          <Link href="/contact" asChild><Pressable style={styles.secondaryButton}><Text style={styles.secondaryButtonText}>REQUEST THE PROJECT OVERVIEW</Text></Pressable></Link>
        </View>
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
  title: { color: colors.ivory, fontSize: 62, lineHeight: 68, fontWeight: '400', letterSpacing: -2, maxWidth: 950, marginTop: 20 },
  intro: { color: colors.mist, fontSize: 18, lineHeight: 29, maxWidth: 800, marginTop: 24 },
  factGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
  factCard: { flexGrow: 1, flexBasis: 260, minWidth: 240, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: 'rgba(9,11,14,0.1)', borderRadius: 18, padding: 24 },
  factLabel: { color: colors.iceDeep, fontSize: 10, fontWeight: '900', letterSpacing: 1.7 },
  factValue: { color: colors.ink, fontSize: 18, lineHeight: 26, fontWeight: '500', marginTop: 16 },
  planPreview: { marginTop: 28, flexDirection: 'row', flexWrap: 'wrap', gap: 24, backgroundColor: colors.ink, borderRadius: 24, padding: 20, alignItems: 'center' },
  planImage: { flexGrow: 1, flexBasis: 390, width: '100%', aspectRatio: 2 / 3, maxHeight: 720, backgroundColor: '#07090B', borderRadius: 16 },
  planCopy: { flexGrow: 1, flexBasis: 390, padding: 16 },
  planEyebrow: { color: colors.gold, fontSize: 10, fontWeight: '900', letterSpacing: 1.7 },
  planTitle: { color: colors.ivory, fontSize: 32, lineHeight: 39, fontWeight: '500', marginTop: 18 },
  planText: { color: colors.muted, fontSize: 15, lineHeight: 25, marginTop: 16 },
  darkButton: { alignSelf: 'flex-start', backgroundColor: colors.gold, borderRadius: 999, paddingHorizontal: 21, paddingVertical: 15, marginTop: 26 },
  darkButtonText: { color: colors.ink, fontSize: 10, fontWeight: '900', letterSpacing: 1.2 },
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
  actionRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 14 },
  button: { backgroundColor: colors.gold, borderRadius: 999, paddingHorizontal: 24, paddingVertical: 16 },
  buttonText: { color: colors.ink, fontSize: 11, fontWeight: '900', letterSpacing: 1.25 },
  secondaryButton: { borderWidth: 1, borderColor: colors.line, borderRadius: 999, paddingHorizontal: 24, paddingVertical: 16 },
  secondaryButtonText: { color: colors.ivory, fontSize: 11, fontWeight: '900', letterSpacing: 1.25 }
});
