<template>
  <div class="character-card flex flex-col items-center w-full">
    <!-- Image -->
    <div
      class="relative w-full max-w-[342px] aspect-square rounded-xl border-[5px] overflow-hidden"
      style="border-color: rgba(255, 255, 255, 0.30);"
    >
      <div
        class="w-full h-full bg-[#D9D9D9]"
        :style="{
          backgroundImage: `url(${character.image})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }"
      />
    </div>

    <!-- Name -->
    <h2 class="mt-6 text-[30px] font-black leading-9 text-[#005287] text-center font-inter">
      {{ character.name }}
    </h2>

    <!-- Subtitle -->
    <p
      class="mt-2 text-[18px] font-light text-[#909090] text-center tracking-[0.1em] font-inter"
    >
      {{ character.subtitle }}
    </p>

    <!-- ID -->
    <p class="mt-3 text-[16px] font-normal text-[#909090] text-center leading-[26px] font-inter">
      {{ character.id }}
    </p>

    <!-- Abilities Box -->
    <div
      class="mt-4 w-full max-w-[484px] rounded-lg border border-[#BCBCBC] bg-[#F1F1F1] px-6 py-4"
    >
      <p class="text-[14px] font-bold text-[#B7B7B7] tracking-[0.1em] leading-5 font-inter uppercase">
        Abilities
      </p>
      <p class="mt-2 text-[16px] font-normal text-[#303030] leading-5 font-inter">
        {{ character.abilities }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Character {
  name: string
  subtitle: string
  id: string
  abilities: string
  image: string
}

defineProps<{
  character: Character
}>()
</script>
