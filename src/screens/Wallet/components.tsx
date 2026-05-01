import RoundIcon from '@components/RoundIcon'
import { MAIN_BUTTON_SIZE, MAIN_TEXT_SIZE } from '@components/values'
import Bus01Icon from '@hugeicons/Bus01Icon'
import Car01Icon from '@hugeicons/Car01Icon'
import Home01Icon from '@hugeicons/Home01Icon'
import NaturalFoodIcon from '@hugeicons/NaturalFoodIcon'
import PlaneIcon from '@hugeicons/PlaneIcon'
import ShoppingCart01Icon from '@hugeicons/ShoppingCart01Icon'
import StarIcon from '@hugeicons/StarIcon'
import TaxiIcon from '@hugeicons/TaxiIcon'
import Wallet02Icon from '@hugeicons/Wallet02Icon'
import type { HugeIconProps } from '@hugeicons/constants'
import { Colors } from '@utils/colors'
import { SemiBold } from '@utils/fonts'
import { type GradientName, TOP_SEVEN_GRADIENTS, isGradientName, resolveGradient } from '@utils/gradients'
import React from 'react'
import { TouchableOpacity, View, useColorScheme } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { PALETTE, type WalletIconName, isWalletIconName, normalizeWalletIconName } from './types'

const HEX_COLOR = /^#[0-9a-fA-F]{6}$/
const ICON_COMPONENTS: Record<WalletIconName, React.FC<HugeIconProps>> = {
  'wallet-02': Wallet02Icon,
  'shopping-cart-01': ShoppingCart01Icon,
  'home-01': Home01Icon,
  'car-01': Car01Icon,
  'bus-01': Bus01Icon,
  taxi: TaxiIcon,
  plane: PlaneIcon,
  'natural-food': NaturalFoodIcon,
  star: StarIcon,
}

function WalletIconGlyph({ iconName, size, color }: { iconName: string; size: number; color: string }) {
  const safeIcon = normalizeWalletIconName(iconName, 'wallet-02')
  const Icon = ICON_COMPONENTS[safeIcon]
  return <Icon size={size} color={color} strokeWidth={2} variant='solid-rounded' />
}

export function getWalletIcon(iconName: string) {
  return ICON_COMPONENTS[normalizeWalletIconName(iconName, 'wallet-02')]
}

export function toRoundIconGradient(color: string): GradientName | [string, string] {
  if (HEX_COLOR.test(color)) return [color, color]
  if (isGradientName(color)) return color
  return 'accent'
}

// ── Color swatch picker ──────────────────────────────────────────────────────
export function ColorPicker({ value, onChange }: { value: string; onChange: (color: string) => void }) {
  return (
    <View className='flex-row flex-wrap px-5' style={{ gap: 10, paddingVertical: 8 }}>
      {PALETTE.map((c) => {
        const selected = c.toLowerCase() === value.toLowerCase()
        return (
          <TouchableOpacity
            key={c}
            onPress={() => onChange(c)}
            activeOpacity={0.7}
            style={{
              backgroundColor: c,
              width: 32,
              height: 32,
              borderRadius: 16,
              borderWidth: selected ? 3 : 0,
              borderColor: '#fff',
              elevation: selected ? 3 : 0,
            }}
          />
        )
      })}
    </View>
  )
}

export function GradientPicker({ value, onChange }: { value: string; onChange: (code: string) => void }) {
  return (
    <View className='flex-row flex-wrap px-5 pt-2 pb-0.5' style={{ gap: 10 }}>
      {TOP_SEVEN_GRADIENTS.map((code) => {
        const selected = code.toLowerCase() === value.toLowerCase()
        const [start, end] = resolveGradient(code)
        return (
          <TouchableOpacity
            key={code}
            onPress={() => onChange(code)}
            activeOpacity={0.7}
            style={{
              width: 32,
              height: 32,
              borderRadius: 50,
              borderWidth: selected ? 3 : 0,
              borderColor: Colors.accent,
              elevation: selected ? 3 : 0,
            }}
          >
            <LinearGradient
              colors={[start, end]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={{ width: '100%', height: '100%', borderRadius: 50 }}
            />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

// ── Predefined icon picker (single select) ───────────────────────────────────
export function IconPicker({
  value,
  options,
  onChange,
}: {
  value: string
  options: readonly WalletIconName[]
  onChange: (name: WalletIconName) => void
}) {
  const scheme = useColorScheme()

  return (
    <View className='flex-row flex-wrap px-5 pt-2' style={{ gap: 10 }}>
      {options.map((name) => {
        const selected = value === name
        return (
          <TouchableOpacity
            key={name}
            onPress={() => onChange(name)}
            activeOpacity={0.75}
            style={{
              width: 32,
              height: 32,
              borderRadius: 4,
              borderColor: selected ? '#0a84ff' : '#d4d4d8',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <WalletIconGlyph
              iconName={name}
              size={21}
              color={selected ? '#0a84ff' : scheme === 'dark' ? '#d4d4d8' : '#4b5563'}
            />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

// ── Compact colored badge used in lists (icon in colored circle) ─────────────
export function ColorBadge({ iconName, color, size = 36 }: { iconName: string; color: string; size?: number }) {
  const Icon = getWalletIcon(iconName)
  const scale = size / 31
  return (
    <RoundIcon
      Icon={Icon}
      gradient={toRoundIconGradient(color)}
      style={{ transform: [{ scale }], margin: ((scale - 1) * 31) / 2 }}
    />
  )
}

// ── Pill with optional selected state for picker rows ────────────────────────
export function Pill({
  iconName,
  label,
  color,
  selected,
  onPress,
}: {
  iconName: string
  label: string
  color: string
  selected?: boolean
  onPress?: () => void
}) {
  const [start, end] = resolveGradient(color)
  const textColor = selected ? '#fff' : start
  const safeIconName = isWalletIconName(iconName) ? iconName : 'wallet-02'
  const content = (
    <>
      <WalletIconGlyph iconName={safeIconName} size={14} color={textColor} />
      <SemiBold style={{ fontSize: MAIN_TEXT_SIZE - 1.5, color: textColor }}>{label}</SemiBold>
    </>
  )

  if (selected) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.75}>
        <LinearGradient
          colors={[start, end]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
            paddingHorizontal: 10,
            paddingVertical: 7,
            borderRadius: 100,
            borderWidth: 1.5,
            borderColor: start,
          }}
        >
          {content}
        </LinearGradient>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 100,
        backgroundColor: 'transparent',
        borderWidth: 1.5,
        borderColor: start,
      }}
    >
      {content}
    </TouchableOpacity>
  )
}

// ── Red text button used for destructive actions (e.g. Delete) ───────────────
export function DeleteButton({ title, onPress, disabled }: { title: string; onPress: () => void; disabled?: boolean }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      style={{ borderRadius: 14.5, paddingVertical: 13, opacity: disabled ? 0.6 : 1 }}
    >
      <SemiBold className='text-center' style={{ fontSize: MAIN_BUTTON_SIZE, color: '#ef4444' }}>
        {title}
      </SemiBold>
    </TouchableOpacity>
  )
}
