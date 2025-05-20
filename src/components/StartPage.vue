<template>
    <div class="flex flex-col h-screen">
        <div class="flex justify-center items-center p-2 space-x-4">
            <Button class="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer" @click="visibleComponent = BPMNC7"> BPMN C7 </Button>
            <Button class="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer" @click="visibleComponent = BPMNC8"> BPMN C8 </Button>
        </div>
        <div v-show="visibleComponent === 'BpmnC7'" class="flex flex-1 border">
            <BpmnC7View />
        </div>
        <div v-show="visibleComponent === 'BpmnC8'" class="flex flex-1 border">
            <BpmnC8View />
        </div>
    </div>
</template>
<script setup lang="ts" >
    import { ref } from 'vue'
    import { Button } from '@/components/ui/button'
    import BpmnC7View from '@/components/BpmnC7View.vue'
    import BpmnC8View from '@/components/BpmnC8View.vue'

    const BPMNC7 : string = 'BpmnC7'
    const BPMNC8 : string = 'BpmnC8'
    type BpmnComponent = typeof BPMNC7 | typeof BPMNC8

    const visibleComponent = ref<BpmnComponent>(BPMNC7)
</script>