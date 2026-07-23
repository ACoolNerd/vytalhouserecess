import { useState } from 'react';
import { Linking, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Head } from 'expo-router/head';
import { useLocalSearchParams } from 'expo-router';
import { SiteShell } from '@/components/SiteShell';
import { Section } from '@/components/Section';
import { colors, layout } from '@/constants/theme';

export default function ContactPage() {
  const params = useLocalSearchParams<{ tier?: string }>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState(params.tier ? `${params.tier} membership` : 'Founding membership');
  const [message, setMessage] = useState('');

  const submit = async () => {
    const subject = `VYTAL House interest — ${interest || 'General inquiry'}`;
    const body = [`Name: ${name}`, `Email: ${email}`, `Interest: ${interest}`, '', message, '', 'Submitted from the VYTAL House preview experience.'].join('\n');
    await Linking.openURL(`mailto:Info@VYTALHouse.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  return (
    <SiteShell>
      <Head>
        <title>Contact | VYTAL House</title>
        <meta name="description" content="Join the VYTAL House founding interest list or ask a flagship development question." />
      </Head>
      <View style={styles.hero}>
        <View style={styles.heroInner}>
          <Text style={styles.eyebrow}>CONNECT WITH VYTAL HOUSE</Text>
          <Text style={styles.title}>Join the founding list. Ask the right question. Stay close to the build.</Text>
          <Text style={styles.intro}>This form opens a pre-addressed email to Info@VYTALHouse.com. No payment, medical intake, or protected health information should be submitted here.</Text>
        </View>
      </View>

      <Section dark={false} eyebrow="INTEREST REGISTRATION" title="Tell us what matters most to you.">
        <View style={styles.contactGrid}>
          <View style={styles.formCard}>
            <Field label="NAME" value={name} onChangeText={setName} placeholder="Your name" />
            <Field label="EMAIL" value={email} onChangeText={setEmail} placeholder="you@example.com" keyboardType="email-address" />
            <Field label="PRIMARY INTEREST" value={interest} onChangeText={setInterest} placeholder="Membership, partnership, service lane, project question" />
            <View style={styles.fieldWrap}>
              <Text style={styles.label}>MESSAGE</Text>
              <TextInput
                value={message}
                onChangeText={setMessage}
                placeholder="What would you like VYTAL House to know?"
                placeholderTextColor="#7C858B"
                multiline
                textAlignVertical="top"
                style={[styles.input, styles.textArea]}
                accessibilityLabel="Message"
              />
            </View>
            <Pressable onPress={submit} style={styles.submit} accessibilityRole="button">
              <Text style={styles.submitText}>OPEN EMAIL TO VYTAL HOUSE</Text>
            </Pressable>
            <Text style={styles.formNote}>Do not include medical records, diagnoses, insurance details, payment information, or other sensitive personal information.</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoEyebrow}>PROJECT CONTACT</Text>
            <Text style={styles.infoTitle}>Info@VYTALHouse.com</Text>
            <Text style={styles.infoText}>Use the public inbox for founding membership interest, vendor introductions, provider inquiries, financing or real-estate coordination, and Howard County community partnerships.</Text>
            <View style={styles.infoDivider} />
            <Text style={styles.infoEyebrow}>FLAGSHIP PLANNING REFERENCE</Text>
            <Text style={styles.infoTitleSmall}>6785 Business Parkway{`\n`}Units 1 and 2{`\n`}Howard County, Maryland</Text>
            <Text style={styles.infoText}>The address is a planning reference and does not represent an open location or final executed site commitment.</Text>
          </View>
        </View>
      </Section>
    </SiteShell>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  keyboardType?: 'default' | 'email-address';
};

function Field({ label, value, onChangeText, placeholder, keyboardType = 'default' }: FieldProps) {
  return (
    <View style={styles.fieldWrap}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#7C858B"
        keyboardType={keyboardType}
        autoCapitalize={keyboardType === 'email-address' ? 'none' : 'sentences'}
        style={styles.input}
        accessibilityLabel={label}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  hero: { backgroundColor: colors.charcoal, paddingHorizontal: layout.pagePadding, paddingVertical: 105, borderBottomWidth: 1, borderBottomColor: colors.line },
  heroInner: { width: '100%', maxWidth: layout.maxWidth, alignSelf: 'center' },
  eyebrow: { color: colors.ice, fontSize: 11, fontWeight: '800', letterSpacing: 2.2 },
  title: { color: colors.ivory, fontSize: 56, lineHeight: 63, fontWeight: '400', letterSpacing: -1.8, maxWidth: 960, marginTop: 20 },
  intro: { color: colors.muted, fontSize: 18, lineHeight: 29, maxWidth: 780, marginTop: 24 },
  contactGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24, alignItems: 'stretch' },
  formCard: { flexGrow: 1, flexBasis: 620, backgroundColor: '#FFFFFF', borderRadius: 24, borderWidth: 1, borderColor: 'rgba(9,11,14,0.1)', padding: 30 },
  fieldWrap: { marginBottom: 20 },
  label: { color: colors.iceDeep, fontSize: 10, fontWeight: '900', letterSpacing: 1.7, marginBottom: 9 },
  input: { minHeight: 52, borderWidth: 1, borderColor: 'rgba(9,11,14,0.16)', borderRadius: 13, paddingHorizontal: 15, paddingVertical: 13, color: colors.ink, fontSize: 16, backgroundColor: '#FAFAF8' },
  textArea: { minHeight: 150 },
  submit: { backgroundColor: colors.ink, borderRadius: 999, paddingHorizontal: 22, paddingVertical: 16, alignItems: 'center', marginTop: 4 },
  submitText: { color: colors.ivory, fontSize: 11, fontWeight: '900', letterSpacing: 1.2 },
  formNote: { color: '#626B72', fontSize: 12, lineHeight: 19, marginTop: 16 },
  infoCard: { flexGrow: 1, flexBasis: 360, backgroundColor: colors.ink, borderRadius: 24, padding: 30, justifyContent: 'center' },
  infoEyebrow: { color: colors.gold, fontSize: 10, fontWeight: '900', letterSpacing: 1.8 },
  infoTitle: { color: colors.ivory, fontSize: 27, lineHeight: 34, fontWeight: '500', marginTop: 14 },
  infoTitleSmall: { color: colors.ivory, fontSize: 22, lineHeight: 31, fontWeight: '500', marginTop: 14 },
  infoText: { color: colors.muted, fontSize: 14, lineHeight: 23, marginTop: 14 },
  infoDivider: { height: 1, backgroundColor: colors.line, marginVertical: 30 }
});
