<template>
  <FormField v-slot="{ componentField }" :name="name">
    <FormItem>
      <FormLabel>{{ label }}</FormLabel>

      <FormControl>
        <Input
          :class="class"
          :type="type"
          :placeholder="placeholder"
          v-bind="componentField"
        />
      </FormControl>

      <FormMessage />
    </FormItem>
  </FormField>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  class?: string
  label: string
  type?: string
  placeholder?: string
}>()
</script>