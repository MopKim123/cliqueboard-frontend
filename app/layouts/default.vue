<template>
  <div class="min-h-screen flex flex-col">

    <!-- HEADER -->
    <header class="fixed top-0 left-0 right-0 z-50 h-14 bg-blue-200">
      <SNavBar />
    </header>

    <!-- CONTENT WRAPPER -->
    <div class="flex flex-1 pt-14">
      <SidebarProvider class="flex w-full">
        <!-- SIDEBAR -->
        <SSideBar />
        <!-- MAIN CONTENT -->
        <div class="flex-1 flex flex-col bg-blue-300 relative bg-blue-400">
          <SidebarTrigger class="-ml-1 absolute top-3 left-3" />
          <main class="flex-1 overflow-y-auto p-6 bg-red-500">
            <slot />
          </main>
        </div>
      </SidebarProvider>

    </div>

  </div>
</template>


<script setup lang="ts">
import SSideBar from '~/components/SSideBar.vue';

// const { isPanelActive } = useMenuBar()
</script>

<style scoped>
.p-divider.p-divider-horizontal {
  border-top: 4px solid;
  border-color: #1F9E9C;
}
</style>
