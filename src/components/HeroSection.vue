<script setup lang="ts"></script>

<template>
  <section
    class="relative w-full h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style="
        background-image: url('https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1920&h=1080&fit=crop');
      "
    >
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-gaming-darker"></div>
    </div>

    <!-- Navigation Bar -->
    <nav class="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-6">
      <div class="text-2xl font-bold bg-gradient-gaming-accent bg-clip-text text-transparent">
        NEXUS
      </div>
      <div class="hidden md:flex gap-8 text-white/80">
        <a href="#" class="hover:text-gaming-cyan transition">Characters</a>
        <a href="#" class="hover:text-gaming-cyan transition">Story</a>
        <a href="#" class="hover:text-gaming-cyan transition">Gallery</a>
        <a href="#" class="hover:text-gaming-cyan transition">Contact</a>
      </div>
    </nav>

    <!-- Centered Content -->
    <div class="relative z-5 text-center px-4">
      <h1
        class="text-6xl md:text-8xl font-black text-white mb-4 leading-tight tracking-tighter"
        style="text-shadow: 0 0 30px rgba(139, 92, 246, 0.6)"
      >
        hhhhhhNEXUS AWAKENS
      </h1>
      <h2 class="text-xl md:text-3xl text-gaming-cyan font-light tracking-widest">
        dcxcxvcxvvcxcvcxvxvc
      </h2>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 border-2 border-gaming-cyan rounded-full flex justify-center">
        <div class="w-1 h-2 bg-gaming-cyan rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
</template>
