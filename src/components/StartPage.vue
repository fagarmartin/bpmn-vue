<template>
    <div class="flex justify-center pt-8">
        <Button class="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer" @click="isVisibleBpmn = true"> BPMN </Button>
    </div>
    {{ isVisibleBpmn }}
    <div v-show="isVisibleBpmn" class="h-full w-full">
        <BpmnView />

    </div>
</template>
<script lang="ts"setup>
    import { ref } from 'vue'
    import { Button } from '@/components/ui/button'
    import BpmnView from '@/components/BpmnView.vue'

    const isVisibleBpmn = ref<boolean>(false)
</script>