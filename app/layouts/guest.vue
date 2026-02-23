<template>
<div class="flex min-h-screen flex-col">
    <header class="fixed top-0 left-0 right-0 z-50 h-14 bg-blue-200">
        <SNavBarGuest />
    </header>

    <main class="flex-1 overflow-y-auto">
        <slot />
    </main>
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
