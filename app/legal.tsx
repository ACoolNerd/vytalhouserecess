import { StyleSheet, Text, View } from 'react-native';
import { Head } from 'expo-router/head';
import { SiteShell } from '@/components/SiteShell';
import { Section } from '@/components/Section';
import { colors, layout } from '@/constants/theme';

export default function LegalPage() {
  return (
    <SiteShell>
      <Head>
        <title>Legal + Disclosures | VYTAL House</title>
        <meta name="description" content="Development, medical, privacy, and website disclosures for the VYTAL House preview experience." />
      </Head>
      <View style={styles.hero}>
        <View style={styles.heroInner}>
          <Text style={styles.eyebrow}>LEGAL + DISCLOSURES</Text>
          <Text style={styles.title}>A transparent preview of a project in development.</Text>
          <Text style={styles.intro}>This page provides planning disclosures for the current VYTAL House website prototype. Final legal policies must be reviewed by qualified counsel before commercial launch.</Text>
        </View>
      </View>
      <Section dark={false}>
        <View style={styles.content}>
          <LegalBlock title="Development status">
            VYTAL House is in development. References to 6785 Business Parkway, Units 1 and 2, Howard County, Maryland are planning references only. Site control, square footage, design, construction, financing, zoning, occupancy, licensing, providers, services, pricing, memberships, and opening timing remain subject to final agreements and approvals.
          </LegalBlock>
          <LegalBlock title="No medical advice or provider relationship">
            The information presented is general planning and educational information. It is not medical advice, diagnosis, treatment, or a substitute for care from a qualified health professional. Viewing this website, joining an interest list, or sending an email does not create a clinician-patient relationship.
          </LegalBlock>
          <LegalBlock title="Regulated services">
            Any medical, aesthetic, hyperbaric, IV, or other regulated service described as planned will only be offered if supported by properly licensed providers, compliant entities and agreements, written protocols, informed consent, privacy controls, insurance, device requirements, and all applicable approvals.
          </LegalBlock>
          <LegalBlock title="No outcomes or performance guarantee">
            Individual wellness experiences and outcomes vary. The website does not guarantee recovery, performance, health, sleep, energy, pain, inflammation, appearance, or any other outcome.
          </LegalBlock>
          <LegalBlock title="Interest registration only">
            The current website does not collect payment and does not form a membership contract, reservation, deposit, presale, securities offering, investment solicitation, lease commitment, or medical intake.
          </LegalBlock>
          <LegalBlock title="Privacy and sensitive information">
            Do not send medical records, diagnoses, insurance information, payment credentials, government identifiers, or other sensitive personal information through the public email link. A production launch will require a reviewed privacy policy, terms of use, consent flow, security controls, and any required HIPAA or state-law measures.
          </LegalBlock>
          <LegalBlock title="Reference-site analysis">
            The project includes a development audit script that can inspect public site structure and design signals. The VYTAL House implementation is original and should not copy another company's protected text, branding, images, testimonials, code, or proprietary assets.
          </LegalBlock>
        </View>
      </Section>
    </SiteShell>
  );
}

function LegalBlock({ title, children }: { title: string; children: string }) {
  return (
    <View style={styles.block}>
      <Text style={styles.blockTitle}>{title}</Text>
      <Text style={styles.blockText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: { backgroundColor: colors.ink, paddingHorizontal: layout.pagePadding, paddingVertical: 100, borderBottomWidth: 1, borderBottomColor: colors.line },
  heroInner: { width: '100%', maxWidth: layout.maxWidth, alignSelf: 'center' },
  eyebrow: { color: colors.gold, fontSize: 11, fontWeight: '800', letterSpacing: 2.2 },
  title: { color: colors.ivory, fontSize: 54, lineHeight: 61, fontWeight: '400', letterSpacing: -1.6, maxWidth: 900, marginTop: 20 },
  intro: { color: colors.muted, fontSize: 17, lineHeight: 28, maxWidth: 760, marginTop: 24 },
  content: { maxWidth: 900 },
  block: { paddingVertical: 26, borderBottomWidth: 1, borderBottomColor: 'rgba(9,11,14,0.14)' },
  blockTitle: { color: colors.ink, fontSize: 24, lineHeight: 30, fontWeight: '600' },
  blockText: { color: '#545D64', fontSize: 15, lineHeight: 25, marginTop: 12 }
});
