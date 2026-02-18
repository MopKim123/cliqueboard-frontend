<template>
  <div class="min-h-screen flex flex-col">
 
    <!-- <header class="fixed top-0 left-0 right-0 z-50 h-14 bg-blue-200">
      <SNavBar />
    </header> -->
 
    <div class="flex flex-1">  
      <main class="flex-1 overflow-y-auto p-6">
        <slot />
      </main>  
    </div>

  </div>
</template>


<script setup lang="ts">
</script>

<style scoped>
.p-divider.p-divider-horizontal {
  border-top: 4px solid;
  border-color: #1F9E9C;
}
</style>
