<template>
  <div ref="container" class="flex-1"></div>
  <div ref="propertyPanel" class="border"></div>
</template>
<script setup lang="ts">
import { ref, onMounted  } from 'vue'
import type { Ref } from 'vue'

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

import { BpmnPropertiesProviderModule, BpmnPropertiesPanelModule, ZeebePropertiesProviderModule } from 'bpmn-js-properties-panel'
import ZeebeBehaviorsModule from 'camunda-bpmn-js-behaviors/lib/camunda-cloud'
import camundaCloudBehaviors from 'camunda-bpmn-js-behaviors/lib/camunda-cloud'
import zeebeModdle from 'zeebe-bpmn-moddle/resources/zeebe.json'

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
      ZeebePropertiesProviderModule,
      ZeebeBehaviorsModule,
      minimapModule,
      SearchModule,
      BpmnColorPickerModule,
      zeebeModdle,
      camundaCloudBehaviors
    ],
    moddleExtensions: {
      zeebe: zeebeModdle // for camunda 8
    }
  })
  let defaultXML = await fetchXML(diagram)

  await bpmnModeler.importXML(defaultXML)
}
</script>
