import { useMemo, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Head } from 'expo-router/head';
import { Link } from 'expo-router';
import { SiteShell } from '@/components/SiteShell';
import { Section } from '@/components/Section';
import { colors, layout } from '@/constants/theme';
import { deliveryGates, floorPlanZones, premiumAmenities } from '@/data/floorPlan';

export default function FloorPlanPage() {
  const { width } = useWindowDimensions();
  const compact = width < 860;
  const [selectedNumber, setSelectedNumber] = useState(1);
  const selectedZone = useMemo(
    () => floorPlanZones.find((zone) => zone.number === selectedNumber) ?? floorPlanZones[0],
    [selectedNumber]
  );

  return (
    <SiteShell>
      <Head>
        <title>5,760 SF Floor Plan | VYTAL House</title>
        <meta name="description" content="Explore the complete 20-zone VYTAL House flagship concept for 6785 Business Parkway, Units 1 and 2, Howard County, Maryland." />
      </Head>

      <View style={styles.hero}>
        <View style={styles.heroInner}>
          <Text style={styles.eyebrow}>CURRENT FLAGSHIP DESIGN TARGET</Text>
          <Text style={[styles.title, compact && styles.titleCompact]}>The complete 5,760-square-foot VYTAL House concept.</Text>
          <Text style={styles.intro}>Twenty programmed zones connect arrival, executive screening, clinical wellness, recovery technologies, hospitality, and outdoor decompression inside Units 1 and 2 at the Howard County planning location.</Text>
          <View style={styles.statusRow}>
            <View style={styles.statusPill}><Text style={styles.statusText}>20 PROGRAMMED ZONES</Text></View>
            <View style={styles.statusPill}><Text style={styles.statusText}>5,760 SF TARGET</Text></View>
            <View style={styles.statusPill}><Text style={styles.statusText}>PERMIT SET REQUIRED</Text></View>
          </View>
        </View>
      </View>

      <Section dark={false} eyebrow="COMPLETE FLOOR PLAN" title="Premium longevity and recovery club." intro="This exact rendering is now the controlling website concept. It is a design and programming target—not a surveyed, stamped, permitted, or construction-ready architectural plan.">
        <View style={[styles.planGrid, compact && styles.planGridCompact]}>
          <View style={styles.imageCard}>
            <Image
              source={require('../assets/images/vytal-house-floor-plan.jpg')}
              resizeMode="contain"
              style={styles.planImage}
              accessibilityLabel="VYTAL House 5,760 square foot floor plan showing twenty numbered wellness, clinical, recovery, hospitality, and outdoor zones"
            />
          </View>
          <View style={styles.selectedCard}>
            <Text style={styles.selectedEyebrow}>SELECTED ZONE · {String(selectedZone.number).padStart(2, '0')}</Text>
            <Text style={styles.selectedTitle}>{selectedZone.name}</Text>
            <Text style={styles.selectedLane}>{selectedZone.lane.toUpperCase()} LANE</Text>
            <Text style={styles.selectedDescription}>{selectedZone.description}</Text>
            <View style={styles.locationFacts}>
              <Fact label="LOCATION" value="6785 Business Parkway · Units 1 & 2" />
              <Fact label="MARKET" value="Howard County, Maryland" />
              <Fact label="TOTAL AREA" value="5,760 SF working target" />
              <Fact label="STATUS" value="Digital concept locked; A/E validation pending" />
            </View>
            <Link href="/contact" asChild>
              <Pressable style={styles.primaryButton}><Text style={styles.primaryButtonText}>REQUEST THE PROJECT PACKAGE</Text></Pressable>
            </Link>
          </View>
        </View>
      </Section>

      <Section eyebrow="FLOOR PLAN LEGEND" title="Explore all twenty programmed zones." intro="Choose a zone to bring its operating purpose into focus. Final dimensions, capacities, equipment quantities, and provider requirements remain subject to professional validation.">
        <View style={styles.zoneGrid}>
          {floorPlanZones.map((zone) => {
            const active = zone.number === selectedNumber;
            return (
              <Pressable key={zone.number} onPress={() => setSelectedNumber(zone.number)} style={[styles.zoneCard, active && styles.zoneCardActive]} accessibilityRole="button">
                <View style={[styles.zoneNumber, active && styles.zoneNumberActive]}><Text style={[styles.zoneNumberText, active && styles.zoneNumberTextActive]}>{zone.number}</Text></View>
                <View style={styles.zoneCopy}>
                  <Text style={[styles.zoneName, active && styles.zoneNameActive]}>{zone.name}</Text>
                  <Text style={styles.zoneLane}>{zone.lane.toUpperCase()}</Text>
                  <Text style={styles.zoneDescription}>{zone.description}</Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      </Section>

      <Section dark={false} eyebrow="PREMIUM AMENITIES" title="The technology and service matrix reflected in the plan." intro="Every amenity must be matched to a final vendor, compliant operating lane, utility requirement, installation scope, written protocol, and responsible operator before launch.">
        <View style={styles.amenityGrid}>
          {premiumAmenities.map((amenity, index) => (
            <View key={amenity} style={styles.amenityCard}>
              <Text style={styles.amenityNumber}>{String(index + 1).padStart(2, '0')}</Text>
              <Text style={styles.amenityText}>{amenity}</Text>
            </View>
          ))}
        </View>
      </Section>

      <Section eyebrow="FROM CONCEPT TO CONSTRUCTION" title="Six gates make this design buildable." intro="The rendering controls the intended experience. Licensed professionals must translate it into a field-verified, code-compliant, financeable, and permit-ready construction package.">
        <View style={styles.gateGrid}>
          {deliveryGates.map(([title, copy], index) => (
            <View key={title} style={styles.gateCard}>
              <Text style={styles.gateNumber}>{String(index + 1).padStart(2, '0')}</Text>
              <Text style={styles.gateTitle}>{title}</Text>
              <Text style={styles.gateCopy}>{copy}</Text>
            </View>
          ))}
        </View>
        <View style={styles.warningCard}>
          <Text style={styles.warningTitle}>Construction-control notice</Text>
          <Text style={styles.warningText}>Do not order fixed equipment, begin demolition, represent room capacities as final, or submit this rendering as a permit drawing. The next controlling documents are the verified existing-conditions survey, schematic test fit, equipment utility matrix, code analysis, and licensed architectural and engineering set.</Text>
        </View>
      </Section>
    </SiteShell>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.factRow}>
      <Text style={styles.factLabel}>{label}</Text>
      <Text style={styles.factValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: { backgroundColor: colors.ink, paddingHorizontal: layout.pagePadding, paddingVertical: 105, borderBottomWidth: 1, borderBottomColor: colors.line },
  heroInner: { width: '100%', maxWidth: layout.maxWidth, alignSelf: 'center' },
  eyebrow: { color: colors.gold, fontSize: 11, fontWeight: '800', letterSpacing: 2.2 },
  title: { color: colors.ivory, fontSize: 62, lineHeight: 69, fontWeight: '400', letterSpacing: -2, maxWidth: 980, marginTop: 20 },
  titleCompact: { fontSize: 46, lineHeight: 52, letterSpacing: -1.2 },
  intro: { color: colors.muted, fontSize: 18, lineHeight: 29, maxWidth: 800, marginTop: 24 },
  statusRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 30 },
  statusPill: { borderWidth: 1, borderColor: colors.line, borderRadius: 999, paddingHorizontal: 15, paddingVertical: 10 },
  statusText: { color: colors.ice, fontSize: 10, fontWeight: '900', letterSpacing: 1.2 },
  planGrid: { flexDirection: 'row', alignItems: 'flex-start', gap: 24 },
  planGridCompact: { flexDirection: 'column' },
  imageCard: { flex: 1.45, width: '100%', backgroundColor: '#07090B', borderRadius: 24, borderWidth: 1, borderColor: 'rgba(9,11,14,0.12)', overflow: 'hidden', padding: 10 },
  planImage: { width: '100%', aspectRatio: 2 / 3, backgroundColor: '#07090B' },
  selectedCard: { flex: 0.8, width: '100%', minWidth: 280, backgroundColor: colors.ink, borderRadius: 24, padding: 30 },
  selectedEyebrow: { color: colors.gold, fontSize: 10, fontWeight: '900', letterSpacing: 1.7 },
  selectedTitle: { color: colors.ivory, fontSize: 34, lineHeight: 40, fontWeight: '500', marginTop: 18 },
  selectedLane: { color: colors.ice, fontSize: 11, fontWeight: '800', letterSpacing: 1.6, marginTop: 12 },
  selectedDescription: { color: colors.mist, fontSize: 16, lineHeight: 26, marginTop: 18 },
  locationFacts: { marginTop: 28, borderTopWidth: 1, borderTopColor: colors.line },
  factRow: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: colors.line },
  factLabel: { color: colors.muted, fontSize: 9, fontWeight: '900', letterSpacing: 1.4 },
  factValue: { color: colors.ivory, fontSize: 14, lineHeight: 21, marginTop: 7 },
  primaryButton: { backgroundColor: colors.gold, borderRadius: 999, paddingHorizontal: 20, paddingVertical: 15, alignItems: 'center', marginTop: 26 },
  primaryButtonText: { color: colors.ink, fontSize: 10, fontWeight: '900', letterSpacing: 1.15 },
  zoneGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 14 },
  zoneCard: { flexGrow: 1, flexBasis: 360, minWidth: 280, backgroundColor: colors.panel, borderWidth: 1, borderColor: colors.line, borderRadius: 18, padding: 20, flexDirection: 'row', gap: 15 },
  zoneCardActive: { borderColor: colors.gold, backgroundColor: '#20242A' },
  zoneNumber: { width: 36, height: 36, borderRadius: 18, borderWidth: 1, borderColor: colors.gold, alignItems: 'center', justifyContent: 'center' },
  zoneNumberActive: { backgroundColor: colors.gold },
  zoneNumberText: { color: colors.gold, fontSize: 12, fontWeight: '900' },
  zoneNumberTextActive: { color: colors.ink },
  zoneCopy: { flex: 1 },
  zoneName: { color: colors.ivory, fontSize: 18, lineHeight: 24, fontWeight: '600' },
  zoneNameActive: { color: colors.goldSoft },
  zoneLane: { color: colors.ice, fontSize: 9, fontWeight: '900', letterSpacing: 1.4, marginTop: 7 },
  zoneDescription: { color: colors.muted, fontSize: 13, lineHeight: 21, marginTop: 9 },
  amenityGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 14 },
  amenityCard: { flexGrow: 1, flexBasis: 260, minWidth: 230, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: 'rgba(9,11,14,0.1)', borderRadius: 16, padding: 20, flexDirection: 'row', alignItems: 'center', gap: 14 },
  amenityNumber: { color: colors.iceDeep, fontSize: 10, fontWeight: '900', letterSpacing: 1.4 },
  amenityText: { color: colors.ink, fontSize: 15, lineHeight: 22, fontWeight: '600', flex: 1 },
  gateGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
  gateCard: { flexGrow: 1, flexBasis: 350, minWidth: 280, backgroundColor: colors.panel, borderWidth: 1, borderColor: colors.line, borderRadius: 18, padding: 24 },
  gateNumber: { color: colors.gold, fontSize: 10, fontWeight: '900', letterSpacing: 1.5 },
  gateTitle: { color: colors.ivory, fontSize: 21, lineHeight: 27, fontWeight: '600', marginTop: 20 },
  gateCopy: { color: colors.muted, fontSize: 14, lineHeight: 23, marginTop: 11 },
  warningCard: { marginTop: 24, borderWidth: 1, borderColor: colors.gold, borderRadius: 20, padding: 26, backgroundColor: 'rgba(199,164,106,0.08)' },
  warningTitle: { color: colors.goldSoft, fontSize: 19, fontWeight: '700' },
  warningText: { color: colors.mist, fontSize: 14, lineHeight: 24, marginTop: 10 }
});
