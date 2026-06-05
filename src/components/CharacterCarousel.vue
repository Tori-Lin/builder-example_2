<script setup lang="ts">
import { ref, computed } from 'vue'

interface Character {
  id: number
  name: string
  title: string
  image: string
}

const props = defineProps<{
  characters?: Character[]
}>()

const localCharacters: Character[] = [
  { id: 1, name: 'Cyber Vanguard', title: 'Elite Operative', image: 'https://picsum.photos/id/102/400/560' },
  { id: 2, name: 'Shadow Assassin', title: 'Silent Killer', image: 'https://images.unsplash.com/photo-1578926078328-123456789012?auto=format&fit=crop&w=400&h=560&q=80' },
  { id: 3, name: 'Neon Ronin', title: 'Blade Master', image: 'https://images.unsplash.com/photo-1535016120754-0c4c3acd3789?auto=format&fit=crop&w=400&h=560&q=80' },
  { id: 4, name: 'Phoenix Mage', title: 'Flame Keeper', image: 'https://images.unsplash.com/photo-1534531173927-aeb928d54385?auto=format&fit=crop&w=400&h=560&q=80' },
  { id: 5, name: 'Frost Guardian', title: 'Ice Warden', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=560&q=80' },
  { id: 6, name: 'Void Sentinel', title: 'Dark Protector', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=560&q=80' },
  { id: 7, name: 'Lyric Bard', title: 'Sound Weaver', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&h=560&q=80' },
  { id: 8, name: 'Titan Berserker', title: 'Wrath Incarnate', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=560&q=80' },
  { id: 9, name: 'Prism Elementalist', title: 'Rainbow Caster', image: 'https://images.unsplash.com/photo-1517331156700-3c69d00e8151?auto=format&fit=crop&w=400&h=560&q=80' },
  { id: 10, name: 'Spectral Wraith', title: 'Spirit Walker', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=560&q=80' },
  { id: 11, name: 'Aegis Knight', title: 'Shield Bearer', image: 'https://images.unsplash.com/photo-1506055613917-475e067392e0?auto=format&fit=crop&w=400&h=560&q=80' },
  { id: 12, name: 'Infernal Duke', title: 'Demon Lord', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&h=560&q=80' },
  { id: 13, name: 'Celestial Seraph', title: 'Divine Herald', image: 'https://images.unsplash.com/photo-1520634185298-1b434c919eba?auto=format&fit=crop&w=400&h=560&q=80' },
  { id: 14, name: 'Rogue Cipher', title: 'Code Breaker', image: 'https://images.unsplash.com/photo-1507451885569-e674e4a87d3e?auto=format&fit=crop&w=400&h=560&q=80' },
  { id: 15, name: 'Lunar Enchantress', title: 'Moon Witch', image: 'https://images.unsplash.com/photo-1506277886426-6f3efc2fb029?auto=format&fit=crop&w=400&h=560&q=80' },
  { id: 16, name: 'Tempest Avenger', title: 'Storm Bringer', image: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=400&h=560&q=80' },
]

const displayCharacters = computed(() => (props.characters && props.characters.length > 0 ? props.characters : localCharacters))

const currentIndex = ref(0)
const totalItems = computed(() => displayCharacters.value.length)

const handlePrev = () => {
  currentIndex.value = (currentIndex.value - 1 + totalItems.value) % totalItems.value
}

const handleNext = () => {
  currentIndex.value = (currentIndex.value + 1) % totalItems.value
}

const handleItemClick = (index: number) => {
  const relativeOffset = getRelativeOffset(index)
  if (Math.abs(relativeOffset) <= 2) {
    currentIndex.value = index
  }
}

const getRelativeOffset = (itemIndex: number): number => {
  const offset = itemIndex - currentIndex.value
  if (offset > totalItems.value / 2) return offset - totalItems.value
  if (offset < -totalItems.value / 2) return offset + totalItems.value
  return offset
}

const getTransformStyle = (itemIndex: number) => {
  const i = getRelativeOffset(itemIndex)
  const absI = Math.abs(i)

  // 1. 計算角度
  const angle = (i * 2 * Math.PI) / totalItems.value

  // 2. 3D 軌道座標
  const posX = Math.sin(angle) * 350
  const posY = -Math.cos(angle) * -70
  const posZ = (Math.cos(angle) - 1) * 50 

  const normalizedCos = (Math.cos(angle) + 1) / 2 
  
  // 3. 縮小前後大小差距
  const scale = 0.85 + normalizedCos * 0.3

  // 4. 動態透明度
  const opacity = 0.6 + normalizedCos * 0.4

  // 5. 強制劃分 z-index 圖層與 pointer-events 字面量限制
  const isClickable = absI <= 2
  // 💡 修改這行即可：
  const pointerEvents = isClickable ? ('auto' as const) : ('none' as const)

  let zIndex = Math.round(normalizedCos * 50)
  if (isClickable) {
    zIndex = 100 - absI * 10 
  } else {
    zIndex = Math.max(1, zIndex - 30) 
  }

  // 6. 後排模糊度
  const filter = isClickable
    ? 'none'
    : `blur(${0.3 + (1 - normalizedCos) * 1.0}px) brightness(${0.7 + normalizedCos * 0.3})`

  const transform = `translate3d(${posX.toFixed(1)}px, ${posY.toFixed(1)}px, ${posZ.toFixed(1)}px) scale(${scale.toFixed(2)})`

  return {
    transform,
    zIndex,
    opacity,
    pointerEvents, // 💡 現在這裡符合 PointerEvents 型別要求了
    filter,
  }
}

const getDotTransformStyle = (dotIndex: number) => {
  const isCurrent = dotIndex === currentIndex.value

  const scale = isCurrent ? 1.4 : 1.0
  const opacity = isCurrent ? 1.0 : 0.35

  return {
    transform: `scale(${scale})`,
    opacity,
    width: '10px',
    height: '10px',
    margin: '0 6px',
    position: 'relative' as const,
  }
}
</script>

<template>
  <section class="py-20 px-4 bg-gradient-to-b from-gaming-darker to-gaming-dark" style="perspective: 1200px">
    <div class="max-w-7xl mx-auto">
      <div class="relative flex items-center justify-center h-96 mb-12" style="transform-style: preserve-3d; transform: rotateX(20deg)">
        <button
          @click="handlePrev"
          class="absolute left-0 w-12 h-12 flex items-center justify-center bg-gaming-purple/20 hover:bg-gaming-purple/40 rounded-lg transition text-white"
          style="transform: rotateX(-20deg); z-index: 150;" >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <div class="relative w-full h-full flex items-center justify-center" style="transform-style: preserve-3d">
          <div
            v-for="(character, idx) in displayCharacters"
            :key="`char-${idx}`"
            class="absolute flex-shrink-0"
            style="transform-style: preserve-3d; will-change: transform"
            :style="[
              getTransformStyle(idx),
              {
                transitionProperty: 'transform, opacity, filter', // 💡 修正：移除不合適的 z-index 動態過渡屬性
                transitionDuration: '0.5s',
                transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)',
              },
            ]"
            @click="handleItemClick(idx)" 
          >
            <div
              class="w-40 h-56 rounded-xl overflow-hidden border-2 cursor-pointer transition-all duration-300"
              :class="[
                idx === currentIndex 
                  ? 'border-gaming-cyan shadow-lg shadow-gaming-cyan/50' 
                  : 'border-gaming-purple/50',
                Math.abs(getRelativeOffset(idx)) <= 2 ? 'hover:border-gaming-cyan hover:scale-105' : ''
              ]"
            >
              <img
                :src="character.image"
                :alt="character.name"
                class="w-full h-full object-cover pointer-events-none" />
            </div>
          </div>
        </div>

        <button
          @click="handleNext"
          class="absolute right-0 w-12 h-12 flex items-center justify-center bg-gaming-purple/20 hover:bg-gaming-purple/40 rounded-lg transition text-white"
          style="transform: rotateX(-20deg); z-index: 150;" >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      <div class="relative flex justify-center items-center h-8 w-full mx-auto flex-wrap">
        <div
          v-for="(character, idx) in displayCharacters"
          :key="`dot-${idx}`"
          @click="handleItemClick(idx)"
          class="rounded-full bg-gaming-cyan transition-all cursor-pointer"
          :style="[
            getDotTransformStyle(idx),
            {
              transitionProperty: 'transform, opacity, background-color',
              transitionDuration: '0.4s',
              transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)',
            },
          ]"
          :class="{ 'shadow-md shadow-gaming-cyan/80': idx === currentIndex }"
        ></div>
      </div>
    </div>
  </section>
</template>
