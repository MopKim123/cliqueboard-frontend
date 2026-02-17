<template>
    <!-- <SidebarProvider> -->
    <Sidebar>
        <!-- Header -->
        <!-- <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg">
                        <div
                            class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
                        >
                            <Home class="size-4" />
                        </div>
                        <div class="grid flex-1 text-left text-sm leading-tight">
                            <span class="truncate font-semibold">Acme Inc</span>
                            <span class="truncate text-xs">Enterprise</span>
                        </div>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader> -->

        <!-- Content -->
        <SidebarContent class="pt-15">
            <SidebarGroup>
                <!-- <SidebarGroupLabel>Platform</SidebarGroupLabel> -->
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem
                            v-for="item in sidebarItems"
                            :key="item.id"
                        >
                            <SidebarMenuButton as-child>
                                <a :href="item.href">
                                    <component :is="item.icon" />
                                    <span>{{ item.label }}</span>
                                </a>
                            </SidebarMenuButton>

                            <!-- Optional dropdown for future use -->
                            <SidebarGroupContent v-if="item.hasDropdown">
                                <SidebarMenu>
                                    <SidebarMenuItem
                                        v-for="sub in item.subItems"
                                        :key="sub.id"
                                    >
                                        <SidebarMenuButton as-child>
                                            <a :href="sub.href">{{ sub.label }}</a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>

        <SidebarFooter />
        <SidebarRail />
    </Sidebar>
    <!-- </SidebarProvider> -->
</template>


<script setup lang="ts">
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarRail,
    SidebarTrigger,
} from '@/components/ui/sidebar'

import { HomeIcon, ClipboardIcon } from '@heroicons/vue/24/outline'

// Sidebar items array
const sidebarItems = [
    {
        id: 1,
        label: 'Home',
        icon: HomeIcon,
        href: '#',
        hasDropdown: false,
        subItems: [],
    },
    {
        id: 2,
        label: 'Pinboard',
        icon: ClipboardIcon,
        href: '#',
        hasDropdown: false,
        subItems: [],
    },
    // Example for future dropdown
    // {
    //     id: 2,
    //     label: 'Settings',
    //     icon: CogIcon,
    //     href: '#',
    //     hasDropdown: true,
    //     subItems: [
    //         { id: 21, label: 'Profile', href: '#' },
    //         { id: 22, label: 'Security', href: '#' },
    //     ],
    // },
]
</script>