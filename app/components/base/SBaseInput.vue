<script setup lang="ts">
import { computed } from 'vue'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface Props {
    modelValue?: string | number
    label?: string
    id?: string
    type?: string
    placeholder?: string
    disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    type: 'text',
    disabled: false,
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: string | number): void
}>()

const inputId = computed(() => props.id ?? `input-${Math.random().toString(36).slice(2)}`)
</script>

<template>
    <div class="grid w-full max-w-sm items-center gap-1.5">
        <Label
            v-if="label"
            :for="inputId"
        >
            {{ label }}
        </Label>

        <Input
            :id="inputId"
            :type="type"
            :placeholder="placeholder"
            :disabled="disabled"
            :model-value="modelValue"
            @update:model-value="emit('update:modelValue', $event)"
        />
    </div>
</template>
