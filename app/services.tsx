import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Head } from 'expo-router/head';
import { Link } from 'expo-router';
import { SiteShell } from '@/components/SiteShell';
import { Section } from '@/components/Section';
import { ServiceCard } from '@/components/ServiceCard';
import { colors, layout } from '@/constants/theme';
import { services } from '@/data/content';

export default function ServicesPage() {
  return (
    <SiteShell>
      <Head>
        <title>Planned Services | VYTAL House</title>
        <meta name="description" content="Explore the planned wellness, recovery, performance, and licensed clinical service lanes for VYTAL House." />
      </Head>
      <View style={styles.hero}>
        <View style={styles.heroInner}>
          <Text style={styles.eyebrow}>PLANNED EXPERIENCE MENU</Text>
          <Text style={styles.title}>Restore your state with a pathway—not a pile of disconnected services.</Text>
          <Text style={styles.intro}>The final menu will be released after equipment, provider, zoning, construction, insurance, and licensing decisions are complete.</Text>
        </View>
      </View>

      <Section eyebrow="THE EXPERIENCE LANES" title="Designed to work together.">
        <View style={styles.grid}>
          {services.map((service) => <ServiceCard key={service.id} service={service} />)}
        </View>
      </Section>

      <Section dark={false} eyebrow="HOW A VISIT MAY FLOW" title="Baseline. Restore. Elevate. Decompress." intro="This is a working guest-experience framework, not a medical protocol or guaranteed service sequence.">
        <View style={styles.flowGrid}>
          {[
            ['01', 'Arrive + orient', 'A calm welcome, service confirmation, consent, and readiness check.'],
            ['02', 'Establish a baseline', 'Non-diagnostic wellness observations and any provider-required screening.'],
            ['03', 'Move through the pathway', 'One or more approved modalities delivered within the correct operating lane.'],
            ['04', 'Decompress + plan', 'Hydration, quiet recovery, education, and a clear next-step recommendation.']
          ].map(([number, title, copy]) => (
            <View key={number} style={styles.flowCard}>
              <Text style={styles.flowNumber}>{number}</Text>
              <Text style={styles.flowTitle}>{title}</Text>
              <Text style={styles.flowCopy}>{copy}</Text>
            </View>
          ))}
        </View>
      </Section>

      <Section eyebrow="DISCLOSURE" title="What ‘planned’ means here." intro="VYTAL House will not present unapproved devices, unlicensed care, unverified outcomes, or placeholder pricing as available services.">
        <View style={styles.disclosure}>
          <Text style={styles.disclosureText}>Regulated services require licensed providers, appropriate entity and MSO/clinical separation, written protocols, informed consent, insurance, privacy controls, and all applicable zoning and occupancy approvals.</Text>
          <Link href="/contact" asChild>
            <Pressable style={styles.button}><Text style={styles.buttonText}>ASK A PROJECT QUESTION</Text></Pressable>
          </Link>
        </View>
      </Section>
    </SiteShell>
  );
}

const styles = StyleSheet.create({
  hero: { backgroundColor: colors.charcoal, paddingHorizontal: layout.pagePadding, paddingVertical: 105, borderBottomWidth: 1, borderBottomColor: colors.line },
  heroInner: { width: '100%', maxWidth: layout.maxWidth, alignSelf: 'center' },
  eyebrow: { color: colors.ice, fontSize: 11, fontWeight: '800', letterSpacing: 2.2 },
  title: { color: colors.ivory, fontSize: 58, lineHeight: 64, fontWeight: '400', letterSpacing: -1.8, maxWidth: 980, marginTop: 20 },
  intro: { color: colors.muted, fontSize: 18, lineHeight: 29, maxWidth: 760, marginTop: 24 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 24 },
  flowGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 18 },
  flowCard: { flexGrow: 1, flexBasis: 250, minWidth: 235, backgroundColor: '#FFFFFF', borderRadius: 18, borderWidth: 1, borderColor: 'rgba(9,11,14,0.1)', padding: 24 },
  flowNumber: { color: colors.iceDeep, fontSize: 11, fontWeight: '900', letterSpacing: 1.6 },
  flowTitle: { color: colors.ink, fontSize: 21, lineHeight: 27, fontWeight: '600', marginTop: 26 },
  flowCopy: { color: '#545D64', fontSize: 14, lineHeight: 23, marginTop: 12 },
  disclosure: { borderWidth: 1, borderColor: colors.line, backgroundColor: colors.panel, borderRadius: 22, padding: 30, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 28 },
  disclosureText: { color: colors.mist, fontSize: 16, lineHeight: 27, maxWidth: 780 },
  button: { backgroundColor: colors.gold, borderRadius: 999, paddingHorizontal: 22, paddingVertical: 15 },
  buttonText: { color: colors.ink, fontSize: 11, fontWeight: '900', letterSpacing: 1.2 }
});
