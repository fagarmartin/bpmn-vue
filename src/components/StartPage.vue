<template>
    <div class="flex flex-col h-screen">
        <div class="flex justify-center items-center p-2">
            <Button class="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer" @click="isVisibleBpmn = true"> BPMN C7 </Button>
        </div>
        <div v-show="isVisibleBpmn" class="flex flex-1 border">
            <BpmnView />
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import { Button } from '@/components/ui/button'
    import BpmnView from '@/components/BpmnC7View.vue'

    const isVisibleBpmn = ref<boolean>(true)
</script>