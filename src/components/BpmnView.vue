<template>
  <div ref="container" class="grow"></div>
  <div ref="propertyPanel"></div>
</template>
<script setup>
import { ref, onMounted  } from 'vue'

//import bpmn modules
import BpmnModeler from "bpmn-js/lib/Modeler"

// importing minimap module
import minimapModule from 'diagram-js-minimap'

//with ctrl+f you can search components
import SearchModule from 'bpmn-js/lib/features/search'

import { BpmnPropertiesProviderModule, BpmnPropertiesPanelModule, CamundaPlatformPropertiesProviderModule } from 'bpmn-js-properties-panel'

//import styles
import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-js.css'
import 'diagram-js-minimap/assets/diagram-js-minimap.css'
//import '@bpmn-io/element-template-chooser/dist/element-template-chooser.css'
//import 'bpmn-js-color-picker/colors/color-picker.css'
import 'bpmn-js/dist/assets/diagram-js.css'
import '@bpmn-io/properties-panel/assets/properties-panel.css'
//import 'bpmn-js-token-simulation/assets/css/bpmn-js-token-simulation.css'
//import 'bpmn-js-bpmnlint/dist/assets/css/bpmn-js-bpmnlint.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'

let bpmnModeler = null
const container = ref<HTMLDivElement | null>(null)
const propertyPanel = ref<HTMLDivElement | null>(null)

onMounted(() => {
    initializeBpmn()
})

const initializeBpmn = () => {
  bpmnModeler = new BpmnModeler({
    container: container.value,
    propertiesPanel: {
      parent: propertyPanel.value,
    },
    additionalModules: [
      BpmnPropertiesPanelModule,
      BpmnPropertiesProviderModule,
      CamundaPlatformPropertiesProviderModule, // for camunda 7
     // ElementTemplatesPropertiesProviderModule,
     // ElementTemplateChooserModule,
      minimapModule,
      SearchModule,
      //BpmnColorPickerModule,
      //customTranslateModule,
      //camundaPlatformBehaviors,
      //{ clipboard: ["value", props.clipboard] },
      //TokenSimulationModule,
      //lintModule,
    ],
    /* moddleExtensions: {
      camunda: CamundaModdleDescriptors, // for camunda 7
    },
    */
  })
  console.log('bpmnviewer', bpmnModeler)
}
</script>
