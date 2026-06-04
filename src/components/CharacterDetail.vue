<script setup lang="ts">
import CharacterCard from '@/components/CharacterCard.vue'
import { ref, computed } from 'vue'
interface Character {
  id: number
  name: string
  title: string
  description: string
  stats: string
  image: string
}

defineProps<{
  character: Character
}>()



const leftSelectedIndex = ref(0)
const rightSelectedIndex = ref(0)

const imgA = 'https://cdn.builder.io/api/v1/image/assets%2F8c2d6fe08afb428d81bfb737147473a1%2Fceab6d88b7d047a7b9c4234655afe417'
const imgB = 'https://cdn.builder.io/api/v1/image/assets%2F8c2d6fe08afb428d81bfb737147473a1%2Fb15c93f6be86454aa4e7eccaca033d3b'

const leftCharacters = [
  {
    name: 'Shadow (暗影)',
    subtitle: 'The Dark Knight',
    id: '123123121',
    abilities: '112312312312313123123wqeqeqweqweqwe',
    image: imgA
  },
  {
    name: 'Phantom (幻影)',
    subtitle: 'The Ghost Walker',
    id: '123123122',
    abilities: '透過光學折射進入隱形狀態，並能在短時間內進行三次短距離瞬移。',
    image: imgB
  },
  {
    name: 'Eclipse (蝕月)',
    subtitle: 'Void Monarch',
    id: '123123123',
    abilities: '召喚日蝕結界，大幅降低範圍內敵人的視野與移動速度。',
    image: imgA
  },
  {
    name: 'Reaper (收割者)',
    subtitle: 'Soul Harvester',
    id: '123123124',
    abilities: '每次擊殺敵人或助攻時，能吸取靈魂恢復自身最大生命值。',
    image: imgB
  },
  {
    name: 'Void (虛空)',
    subtitle: 'Abyssal Wanderer',
    id: '123123125',
    abilities: '開闢虛空傳送門，容許隊友在戰場兩個端點間快速移動。',
    image: imgA
  },
  {
    name: 'Tempest (暴風)',
    subtitle: 'Storm Bringer',
    id: '123123126',
    abilities: '操控暗黑雷暴，對範圍內敵人造成持續性雷電法術傷害。',
    image: imgB
  },
  {
    name: 'Frost (霜凍)',
    subtitle: 'Glacial Warden',
    id: '123123127',
    abilities: '凝結空氣中的水分，製造出不可逾越的冰牆並凍結地面。',
    image: imgA
  },
  {
    name: 'Onyx (黑曜石)',
    subtitle: 'Iron Bastion',
    id: '123123128',
    abilities: '將皮膚晶體化，短時間內免疫一切物理與魔法傷害。',
    image: imgB
  },
  {
    name: 'Specter (幽靈)',
    subtitle: 'Wraith Assassin',
    id: '123123129',
    abilities: '釋放幽冥之刃，穿透重重障礙物精準打擊後排目標。',
    image: imgA
  },
  {
    name: 'Crimson (緋紅)',
    subtitle: 'Blood Mage',
    id: '123123130',
    abilities: '消耗自身生命值以爆發更強大的血色法術與爆擊率。',
    image: imgB
  },
  {
    name: 'Nemesis (復仇者)',
    subtitle: 'Fate Weaver',
    id: '123123131',
    abilities: '反彈所受傷害的百分之三十，並標記攻擊者降低其抗性。',
    image: imgA
  },
  {
    name: 'Zenith (頂點)',
    subtitle: 'Celestial Blade',
    id: '123123132',
    abilities: '以光速穿梭於多個目標之間，造成無死角的全屏斬擊。',
    image: imgB
  },
  {
    name: 'Abyss (深淵)',
    subtitle: 'Terror of Deep',
    id: '123123133',
    abilities: '喚醒觸手束縛大範圍敵人，並造成窒息的溺水窒息負面效果。',
    image: imgA
  },
  {
    name: 'Vector (向量)',
    subtitle: 'Kinetic Master',
    id: '123123134',
    abilities: '自由操控動能方向，彈開所有飛行物並使自己高速飛躍。',
    image: imgB
  },
  {
    name: 'Chrono (時空)',
    subtitle: 'Time Keeper',
    id: '123123135',
    abilities: '倒轉時間至三秒前，恢復該時刻的生命值與法力狀態。',
    image: imgA
  },
  {
    name: 'Mirage (蜃樓)',
    subtitle: 'Illusionist',
    id: '123123136',
    abilities: '製造與本體完全一致的立體分身，迷惑敵方主力輸出。',
    image: imgB
  }
]

const rightCharacters = [
  {
    name: 'Shadow (暗影)',
    subtitle: 'The Dark Knight',
    id: '223123121',
    abilities: '112312312312313123123wqeqeqweqweqwe',
    image: imgA
  },
  {
    name: 'Blade (刀鋒)',
    subtitle: 'Wind Runner',
    id: '223123122',
    abilities: '疾風突襲，在移動路徑上留下一道能阻擋遠程道具的風牆。',
    image: imgB
  },
  {
    name: 'Viper (毒蛇)',
    subtitle: 'Toxic Ranger',
    id: '223123123',
    abilities: '射出劇毒箭雨，腐蝕敵方防具並造成重度持續中毒。',
    image: imgA
  },
  {
    name: 'Titan (泰坦)',
    subtitle: 'Stone Giant',
    id: '223123124',
    abilities: '大地怒擊，震碎地面造成範圍擊飛與短暫眩暈效果。',
    image: imgB
  },
  {
    name: 'Flare (閃焰)',
    subtitle: 'Solar Oracle',
    id: '223123125',
    abilities: '凝聚恆星之力釋放致盲光耀，並大幅度治療己方單位。',
    image: imgA
  },
  {
    name: 'Nebula (星雲)',
    subtitle: 'Cosmic Shaman',
    id: '223123126',
    abilities: '鋪設璀璨星路，走在星路上的友軍能獲得極高閃避率。',
    image: imgB
  },
  {
    name: 'Siren (塞壬)',
    subtitle: 'Deep Sea Echo',
    id: '223123127',
    abilities: '吟唱海妖之歌，令範圍內的敵方目標陷入不可抗拒的睡眠。',
    image: imgA
  },
  {
    name: 'Rogue (流氓)',
    subtitle: 'Shadow Bandit',
    id: '223123128',
    abilities: '潛影背刺，在隱身狀態下出手必定造成致命一擊與沉默。',
    image: imgB
  },
  {
    name: 'Warden (典獄長)',
    subtitle: 'Iron Chain',
    id: '223123129',
    abilities: '投擲勾爪鎖鏈，將遠處的敵方核心拉至身前並禁錮。',
    image: imgA
  },
  {
    name: 'Phoenix (鳳凰)',
    subtitle: 'Fire Reborn',
    id: '223123130',
    abilities: '陣亡後化為鳳凰蛋，在五秒內未被摧毀則原地滿血復活。',
    image: imgB
  },
  {
    name: 'Pulse (脈衝)',
    subtitle: 'Tech Soldier',
    id: '223123131',
    abilities: '引爆電磁脈衝，使範圍內敵方的電子科技設備與技能失效。',
    image: imgA
  },
  {
    name: 'Shard (碎片)',
    subtitle: 'Mirror Mirror',
    id: '223123132',
    abilities: '召喚鏡面護盾，能反射敵方投射的所有單體法術。',
    image: imgB
  },
  {
    name: 'Overlord (霸主)',
    subtitle: 'Ruin King',
    id: '223123133',
    abilities: '壓制全場，短時間內提升隊友攻擊力並免疫一切控制效果。',
    image: imgA
  },
  {
    name: 'Valkyrie (瓦爾基里)',
    subtitle: 'Shield Maiden',
    id: '223123134',
    abilities: '神聖守護，為目標套上一層能抵擋致死傷害的光之護盾。',
    image: imgB
  },
  {
    name: 'Oracle (神諭)',
    subtitle: 'Future Seer',
    id: '223123135',
    abilities: '預知未來，使目標隊友在接下來的攻擊中必定觸發爆擊。',
    image: imgA
  },
  {
    name: 'Jester (小丑)',
    subtitle: 'Mad Trickster',
    id: '223123136',
    abilities: '驚嚇盒子，在指定地點放置隱形驚嚇盒，觸發時令周圍恐懼。',
    image: imgB
  }
]
</script>

<template>
  <div class="min-h-screen font-inter">
    <!-- White top section -->
    <div class="bg-white px-4 py-10 sm:px-8 lg:px-16">
      <div
        class="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6"
      >
        <CharacterCard :character="leftCharacters[leftSelectedIndex]" />
        <CharacterCard :character="rightCharacters[rightSelectedIndex]" />
      </div>
    </div>

    <!-- Bottom section (updated background color and dynamic selection) -->
    <div class="bg-[#F1F1F1] px-4 py-10 sm:px-8 lg:px-16">
      <div class="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6">
        <!-- Left icon grid for left characters selection -->
        <div class="flex flex-col items-center">
          <div class="grid grid-cols-8 gap-2">
            <div
              v-for="(item, index) in leftCharacters"
              :key="'left-' + index"
              @click="leftSelectedIndex = index"
              class="w-10 h-10 rounded-md border cursor-pointer transition-all duration-300 flex items-center justify-center overflow-hidden"
              :class="[
                leftSelectedIndex === index
                  ? 'bg-[#005287] border-[#005287] scale-105 shadow-md'
                  : 'bg-[#B7B7B7] border-[#DEDEDE] hover:bg-[#959595]'
              ]"
              :title="item.name"
            >
              <!-- Small thumbnail of character image -->
              <div
                class="w-full h-full opacity-80 hover:opacity-100 transition-opacity"
                :style="{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }"
              />
            </div>
          </div>
        </div>
        <!-- Right icon grid for right characters selection -->
        <div class="flex flex-col items-center">
          <div class="grid grid-cols-8 gap-2">
            <div
              v-for="(item, index) in rightCharacters"
              :key="'right-' + index"
              @click="rightSelectedIndex = index"
              class="w-10 h-10 rounded-md border cursor-pointer transition-all duration-300 flex items-center justify-center overflow-hidden"
              :class="[
                rightSelectedIndex === index
                  ? 'bg-[#005287] border-[#005287] scale-105 shadow-md'
                  : 'bg-[#B7B7B7] border-[#DEDEDE] hover:bg-[#959595]'
              ]"
              :title="item.name"
            >
              <!-- Small thumbnail of character image -->
              <div
                class="w-full h-full opacity-80 hover:opacity-100 transition-opacity"
                :style="{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
