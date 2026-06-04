<script setup lang="ts">
import { ref, computed } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
import CharacterCarousel from '@/components/CharacterCarousel.vue'
import CharacterDetail from '@/components/CharacterDetail.vue'
import BuilderBlock from '@/components/BuilderBlock.vue';

// Sample character data
const characters = [
  {
    id: 1,
    name: 'Shadow',
    title: 'The Dark Knight',
    description: 'Master of stealth and shadow manipulation. A mysterious warrior shrouded in darkness, wielding ancient powers that bend the very fabric of light itself.',
    stats: 'Agility: 95 | Strength: 85 | Magic: 78',
    image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8f2c70?w=800&h=1000&fit=crop',
  },
  {
    id: 2,
    name: 'Blaze',
    title: 'The Inferno',
    description: 'Wielder of primal fire and raw power. A passionate warrior whose flames consume all in their path, leaving only victory and ash behind.',
    stats: 'Strength: 92 | Magic: 88 | Agility: 72',
    image: 'https://images.unsplash.com/photo-1618519764d92ad2a993f43bac6628e49eaf2f56?w=800&h=1000&fit=crop',
  },
  {
    id: 3,
    name: 'Frost',
    title: 'The Ice Mage',
    description: 'Keeper of eternal winter and crystalline magic. A serene presence that freezes enemies in time, controlling the battlefield with cold precision.',
    stats: 'Magic: 96 | Agility: 84 | Strength: 75',
    image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8f2c70?w=800&h=1000&fit=crop',
  },
  {
    id: 4,
    name: 'Storm',
    title: 'The Thunder God',
    description: 'Caller of lightning and master of the sky. An electrifying force that channels the power of nature itself to devastate enemies.',
    stats: 'Magic: 91 | Strength: 89 | Agility: 86',
    image: 'https://images.unsplash.com/photo-1618519764d92ad2a993f43bac6628e49eaf2f56?w=800&h=1000&fit=crop',
  },
  {
    id: 5,
    name: 'Vortex',
    title: 'The Wind Dancer',
    description: 'Master of wind currents and aerial combat. A swift warrior that moves like the breeze, striking from unexpected angles with deadly precision.',
    stats: 'Agility: 98 | Magic: 85 | Strength: 80',
    image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8f2c70?w=800&h=1000&fit=crop',
  },
  {
    id: 6,
    name: 'Nexus',
    title: 'The Reality Warper',
    description: 'Bender of dimensions and temporal forces. A cosmic entity that manipulates reality itself for the ultimate advantage.',
    stats: 'Magic: 99 | Strength: 83 | Agility: 81',
    image: 'https://images.unsplash.com/photo-1618519764d92ad2a993f43bac6628e49eaf2f56?w=800&h=1000&fit=crop',
  },
  {
    id: 7,
    name: 'Phoenix',
    title: 'The Reborn',
    description: 'Bearer of rebirth and eternal flames. A legendary warrior who rises stronger from every defeat, immortal and unstoppable.',
    stats: 'Strength: 90 | Magic: 87 | Agility: 79',
    image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8f2c70?w=800&h=1000&fit=crop',
  },
  {
    id: 8,
    name: 'Cipher',
    title: 'The Code Master',
    description: 'Controller of technology and digital realms. A cybernetic warrior that merges flesh and machine for ultimate power.',
    stats: 'Magic: 88 | Agility: 92 | Strength: 82',
    image: 'https://images.unsplash.com/photo-1618519764d92ad2a993f43bac6628e49eaf2f56?w=800&h=1000&fit=crop',
  },
]
// Create expanded grid (32 characters for the grid)
const gridCharacters = computed(() => {
  let expanded = []
  for (let i = 0; i < 32; i++) {
    expanded.push({
      ...characters[i % characters.length],
      id: i + 1,
    })
  }
  return expanded
})

const selectedCharacterId = ref(1)
const selectedCharacter = computed(() => {
  const char = gridCharacters.value.find(c => c.id === selectedCharacterId.value)
  return char || gridCharacters.value[0]
})

const handleCharacterSelect = (id: number) => {
  selectedCharacterId.value = id
}

</script>

<template>
  <div class="bg-gaming-darker min-h-screen">
    <!-- Section 1: Hero Banner -->
    <HeroSection />

    <!-- Section 2: Character Carousel -->
    <CharacterCarousel :characters="characters" />

    <!-- Section 3: Character Detail -->
    <CharacterDetail :character="selectedCharacter" />
    <BuilderBlock />
  </div>
</template>

<style scoped>
.font-inter {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
</style>
