<template>
  <NavigationMenu :viewport="true" class="w-full ml-auto p-2 flex flex-row">
    <h2 class="text-xl font-bold mr-auto">
      CliqueBoard
    </h2>
    <NavigationMenuList class="w-full flex justify-between items-center">

      <NavigationMenuItem>
        <NavigationMenuLink as-child class="bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent data-[state=open]:focus:bg-transparent">
          <a href="/dashboard">Home</a>
        </NavigationMenuLink>
      </NavigationMenuItem> 

      <NavigationMenuItem>
        <NavigationMenuTrigger class="bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent data-[state=open]:focus:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:active:bg-transparent data-[state=open]:bg-transparent">
          Username
        </NavigationMenuTrigger>

        <NavigationMenuContent>
          <ul class="grid w-[200px] gap-4">
            <li>
              <NavigationMenuLink as-child>
                <a href="#" class="flex-row items-center gap-2">
                  <User />
                  Profile
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink as-child>
                <a href="#" class="flex-row items-center gap-2">
                  <Settings />
                  Settings
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink as-child>
                <a href="#" class="flex-row items-center gap-2">
                  <LogOut />
                  Logout
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>

<script setup lang="ts">
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, LogOut, Settings, User } from 'lucide-vue-next'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
// eslint-disable-next-line import/no-named-default

const components: { title: string, href: string, description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]
</script>