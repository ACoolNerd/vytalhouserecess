import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Head } from 'expo-router/head';
import { Link } from 'expo-router';
import { SiteShell } from '@/components/SiteShell';
import { Section } from '@/components/Section';
import { colors, layout, shadows } from '@/constants/theme';
import { membershipTiers } from '@/data/content';

export default function MembershipsPage() {
  return (
    <SiteShell>
      <Head>
        <title>Founding Membership | VYTAL House</title>
        <meta name="description" content="Explore the working Essential, Elite, and Executive founding membership lanes for VYTAL House." />
      </Head>
      <View style={styles.hero}>
        <View style={styles.heroInner}>
          <Text style={styles.eyebrow}>FOUNDING ACCESS</Text>
          <Text style={styles.title}>A membership built around consistency, not one-off appointments.</Text>
          <Text style={styles.intro}>Join the interest list now. Final pricing, access limits, benefits, and launch timing will be published only after the flagship operating plan is approved.</Text>
        </View>
      </View>

      <Section eyebrow="WORKING MEMBERSHIP ARCHITECTURE" title="Choose the rhythm that fits your life." intro="These lanes are planning labels—not an offer for sale and not a guarantee of specific services.">
        <View style={styles.tierGrid}>
          {membershipTiers.map((tier, index) => (
            <View key={tier.name} style={[styles.tierCard, index === 1 && styles.featuredCard, shadows.card]}>
              <Text style={[styles.tierIndex, index === 1 && styles.featuredAccent]}>0{index + 1}</Text>
              <Text style={[styles.tierName, index === 1 && styles.featuredTitle]}>{tier.name}</Text>
              <Text style={[styles.tierDescription, index === 1 && styles.featuredBody]}>{tier.description}</Text>
              <View style={styles.benefitList}>
                {tier.benefits.map((benefit) => (
                  <View key={benefit} style={styles.benefitRow}>
                    <Text style={[styles.check, index === 1 && styles.featuredAccent]}>✓</Text>
                    <Text style={[styles.benefitText, index === 1 && styles.featuredBody]}>{benefit}</Text>
                  </View>
                ))}
              </View>
              <Text style={[styles.tierLabel, index === 1 && styles.featuredLabel]}>{tier.label}</Text>
              <Link href={{ pathname: '/contact', params: { tier: tier.name } }} asChild>
                <Pressable style={[styles.button, index === 1 && styles.featuredButton]}>
                  <Text style={[styles.buttonText, index === 1 && styles.featuredButtonText]}>REGISTER INTEREST</Text>
                </Pressable>
              </Link>
            </View>
          ))}
        </View>
      </Section>

      <Section dark={false} eyebrow="FOUNDING MEMBER ROADMAP" title="What happens after you join the list?">
        <View style={styles.roadmap}>
          {[
            ['Interest captured', 'Tell us which membership lane, services, and scheduling patterns matter most.'],
            ['Verified updates', 'Receive project milestones only when location, services, and timing are ready to communicate.'],
            ['Preview invitations', 'Qualified early supporters may receive invitations to community previews or information sessions.'],
            ['Offer review', 'Review final terms, pricing, policies, and disclosures before making any commitment.']
          ].map(([title, copy], index) => (
            <View key={title} style={styles.roadmapRow}>
              <View style={styles.roadmapNumber}><Text style={styles.roadmapNumberText}>{index + 1}</Text></View>
              <View style={styles.roadmapCopy}>
                <Text style={styles.roadmapTitle}>{title}</Text>
                <Text style={styles.roadmapText}>{copy}</Text>
              </View>
            </View>
          ))}
        </View>
      </Section>

      <Section eyebrow="NO SURPRISES" title="No payment is collected through this preview site." intro="The current call to action is an interest registration. It is not a presale, deposit, medical consultation, or membership contract.">
        <Link href="/contact" asChild>
          <Pressable style={styles.finalButton}><Text style={styles.finalButtonText}>JOIN THE FOUNDING INTEREST LIST</Text></Pressable>
        </Link>
      </Section>
    </SiteShell>
  );
}

const styles = StyleSheet.create({
  hero: { backgroundColor: colors.ink, paddingHorizontal: layout.pagePadding, paddingVertical: 105, borderBottomWidth: 1, borderBottomColor: colors.line },
  heroInner: { width: '100%', maxWidth: layout.maxWidth, alignSelf: 'center' },
  eyebrow: { color: colors.gold, fontSize: 11, fontWeight: '800', letterSpacing: 2.2 },
  title: { color: colors.ivory, fontSize: 58, lineHeight: 64, fontWeight: '400', letterSpacing: -1.8, maxWidth: 940, marginTop: 20 },
  intro: { color: colors.muted, fontSize: 18, lineHeight: 29, maxWidth: 760, marginTop: 24 },
  tierGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 20, justifyContent: 'center', alignItems: 'stretch' },
  tierCard: { flexGrow: 1, flexBasis: 335, maxWidth: 390, minWidth: 280, backgroundColor: colors.panel, borderWidth: 1, borderColor: colors.line, borderRadius: 24, padding: 28 },
  featuredCard: { backgroundColor: colors.ivory, borderColor: colors.gold },
  featuredTitle: { color: colors.ink },
  featuredBody: { color: '#545D64' },
  featuredAccent: { color: colors.iceDeep },
  featuredLabel: { color: '#75603F' },
  tierIndex: { color: colors.ice, fontSize: 11, fontWeight: '900', letterSpacing: 1.7 },
  tierName: { color: colors.ivory, fontSize: 34, fontWeight: '500', marginTop: 24 },
  tierDescription: { color: colors.muted, fontSize: 15, lineHeight: 24, marginTop: 12, minHeight: 72 },
  benefitList: { gap: 13, marginTop: 24, paddingTop: 22, borderTopWidth: 1, borderTopColor: colors.line },
  benefitRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  check: { color: colors.gold, fontWeight: '900', marginTop: 1 },
  benefitText: { color: colors.mist, fontSize: 14, lineHeight: 22, flex: 1 },
  tierLabel: { color: colors.goldSoft, fontSize: 12, lineHeight: 19, marginTop: 28 },
  button: { marginTop: 24, borderWidth: 1, borderColor: colors.line, borderRadius: 999, paddingHorizontal: 20, paddingVertical: 14, alignItems: 'center' },
  buttonText: { color: colors.ivory, fontSize: 11, fontWeight: '900', letterSpacing: 1.2 },
  featuredButton: { backgroundColor: colors.ink, borderColor: colors.ink },
  featuredButtonText: { color: colors.ivory },
  roadmap: { gap: 0, maxWidth: 900 },
  roadmapRow: { flexDirection: 'row', gap: 20, paddingVertical: 23, borderBottomWidth: 1, borderBottomColor: 'rgba(9,11,14,0.12)' },
  roadmapNumber: { width: 38, height: 38, borderRadius: 19, backgroundColor: colors.ink, alignItems: 'center', justifyContent: 'center' },
  roadmapNumberText: { color: colors.gold, fontSize: 13, fontWeight: '800' },
  roadmapCopy: { flex: 1 },
  roadmapTitle: { color: colors.ink, fontSize: 20, fontWeight: '600' },
  roadmapText: { color: '#545D64', fontSize: 15, lineHeight: 24, marginTop: 8 },
  finalButton: { alignSelf: 'flex-start', backgroundColor: colors.gold, borderRadius: 999, paddingHorizontal: 24, paddingVertical: 16 },
  finalButtonText: { color: colors.ink, fontSize: 11, fontWeight: '900', letterSpacing: 1.25 }
});
