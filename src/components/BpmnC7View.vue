<template>
  <div ref="container" class="flex-1 relative">
    <Button @click="downloadBpmn" class="absolute bottom-20 right-5 z-10 bg-blue-600 text-white hover:bg-blue-700 p-2 rounded shadow cursor-pointer">
      <Download />
    </Button>

  </div>
  <div ref="propertyPanel" class="border"></div>
</template>
<script setup lang="ts">
import { ref, onMounted  } from 'vue'
import type { Ref } from 'vue'

import Button from './ui/button/Button.vue'
import { Download } from 'lucide-vue-next';

//import bpmn modules
import BpmnModeler from "bpmn-js/lib/Modeler"

import { fetchXML } from '../utils'

// importing minimap module
import minimapModule from 'diagram-js-minimap'

import diagram from '../assets/diagram.bpmn'

//with ctrl+f you can search components
import SearchModule from 'bpmn-js/lib/features/search'

//color picker
import BpmnColorPickerModule from 'bpmn-js-color-picker'

import { BpmnPropertiesProviderModule, BpmnPropertiesPanelModule, CamundaPlatformPropertiesProviderModule } from 'bpmn-js-properties-panel'

//import styles
import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-js.css'
import 'diagram-js-minimap/assets/diagram-js-minimap.css'
import 'bpmn-js-color-picker/colors/color-picker.css'
import 'bpmn-js/dist/assets/diagram-js.css'
import '@bpmn-io/properties-panel/assets/properties-panel.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'


let bpmnModeler: BpmnModeler | null = null
const container: Ref<HTMLDivElement | null> = ref(null)
const propertyPanel: Ref<HTMLDivElement | null> = ref(null)

onMounted(() => {
    initializeBpmn()
})

const initializeBpmn = async () => {
    if (!container.value || !propertyPanel.value) return

  bpmnModeler = new BpmnModeler({
    container: container.value as HTMLElement,
    propertiesPanel: {
      parent: propertyPanel.value as HTMLElement,
    },
    additionalModules: [
      BpmnPropertiesPanelModule,
      BpmnPropertiesProviderModule,
      CamundaPlatformPropertiesProviderModule,
      minimapModule,
      SearchModule,
      BpmnColorPickerModule,
    ]
  })
  let defaultXML = await fetchXML(diagram)

  await bpmnModeler.importXML(defaultXML)
}

const downloadBpmn = async () => {
  if (!bpmnModeler) return

  const { xml }  = await bpmnModeler.saveXML({ format: true })
  if (!xml) return
  
  const blob = new Blob([xml], { type: 'application/bpmn20-xml' })
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = 'diagram.bpmn'
  a.click()
  URL.revokeObjectURL(url)
}

</script>
