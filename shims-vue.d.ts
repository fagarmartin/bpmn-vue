declare module "*.vue" {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.bpmn' {
  const content: string;
  export default content;
}
  
declare module '*.dmn' {
  const content: string;
  export default content;
}

declare module 'bpmn-js-color-picker' {
  const BpmnColorPickerModule: any;
  export default BpmnColorPickerModule;
}
 
declare module 'diagram-js-minimap' {
  const DiagramMinimapModule: any;
  export default DiagramMinimapModule;
}

declare module 'bpmn-js-properties-panel' {
  export const BpmnPropertiesProviderModule: any;
  export const BpmnPropertiesPanelModule: any;
  export const CamundaPlatformPropertiesProviderModule: any;
  export const ZeebePropertiesProviderModule: any;
}