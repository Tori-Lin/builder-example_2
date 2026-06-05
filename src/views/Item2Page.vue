<script setup lang="ts"></script>

<template>
  <div class="min-h-screen bg-gaming-darker">
    <!-- Navigation Bar -->
    <nav class="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-6">
      <router-link to="/" class="text-2xl font-bold bg-gradient-gaming-accent bg-clip-text text-transparent">
        NEXUS
      </router-link>
      <div class="hidden md:flex gap-8 text-white/80">
        <router-link to="/item-1" class="hover:text-gaming-cyan transition">Characters</router-link>
        <router-link to="/item-2" class="hover:text-gaming-cyan transition">Story</router-link>
        <router-link to="/item-3" class="hover:text-gaming-cyan transition">Gallery</router-link>
        <router-link to="/item-4" class="hover:text-gaming-cyan transition">Contact</router-link>
      </div>
    </nav>

    <!-- Page Content -->
    <div class="relative pt-32 px-4">
      <div class="text-center mb-12">
        <h1 class="text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter">
          Story
        </h1>
      </div>
      <div class="max-w-4xl mx-auto text-white/80">
        <p class="text-lg">這是Story的頁面</p>
      </div>
    </div>
  </div>
</template>
