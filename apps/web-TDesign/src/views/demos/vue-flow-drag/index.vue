<script setup lang="ts">
import { ref } from 'vue';

import { Panel, useVueFlow, VueFlow } from '@vue-flow/core';

import DropzoneBackground from './DropzoneBackground.vue';
import Sidebar from './Sidebar.vue';
import useDragAndDrop from './useDnD';

const a = useVueFlow();
const { onConnect, addEdges, screenToFlowCoordinate } = a;

const { onDragOver, onDrop, onDragLeave, isDragOver } = useDragAndDrop();

const nodes = ref<Node[]>([]);

onConnect(addEdges);
const drawingMode = ref(false);
let startPoint = null;

function changeType(mode: boolean) {
  drawingMode.value = mode;
}
watchEffect(() => {
  console.log(drawingMode.value);
});
// 处理点击事件
function onPaneClick(event: MouseEvent) {
  console.log(drawingMode.value);
  console.log(1111);
  console.log(a);
  if (!drawingMode.value) return;

  console.log('event', event);
  const position = screenToFlowCoordinate({
    x: event.clientX,
    y: event.clientY,
  });

  console.log('position', position);
  if (startPoint) {
    // 添加终点节点
    const id = `point-${Date.now()}`;
    nodes.value.push({
      id,
      type: 'default',
      data: {},
      position,
      draggable: false,
    });

    const newEdge = {
      id: `e${startPoint.id}-${id}`,
      source: startPoint.id,
      target: id,
      animated: true,
      style: { stroke: 'blue', strokeWidth: 2 },
    };

    edges.value.push(newEdge);

    startPoint = null;
  } else {
    startPoint = position;
    // 添加一个可见的小点作为起始节点（可选）
    const id = `point-${Date.now()}`;
    nodes.value.push({
      id,
      type: 'default',
      data: {},
      position,
      draggable: false,
    });
    startPoint.id = id;
  }
}
</script>

<template>
  <div class="dnd-flow relative" @drop="onDrop">
    <div class="fixed top-4 left-4 rounded bg-white p-2 shadow">
      <label>
        <input type="checkbox" v-model="drawingMode" />
        画笔模式
      </label>
    </div>
    <Panel class="process-panel" position="top-left">
      <div class="layout-panel">
        <t-button
          shape="square"
          variant="base"
          v-if="!drawingMode"
          class="stop-btn"
          title="stop"
          @click="() => changeType(true)"
        >
          <icon-custom-stop class="text-2xl" />
          <span class="spinner"></span>
        </t-button>
        <t-button
          shape="square"
          variant="base"
          v-else
          title="start"
          @click="() => changeType(false)"
        >
          <icon-custom-play class="text-2xl" />
        </t-button>
      </div>

      <!-- <div class="checkbox-panel">
          <label>Cancel on error</label>
          <input v-model="cancelOnError" type="checkbox" />
        </div> -->
    </Panel>
    <VueFlow
      :nodes="nodes"
      @dragover="onDragOver"
      @dragleave="onDragLeave"
      @pane-click="onPaneClick"
    >
      <DropzoneBackground
        :style="{
          backgroundColor: isDragOver ? '#e7f3ff' : 'transparent',
          transition: 'background-color 0.2s ease',
        }"
      >
        <p v-if="isDragOver">Drop here</p>
      </DropzoneBackground>
    </VueFlow>

    <Sidebar />
  </div>
</template>
<style lang="css" scoped>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';
@import '@vue-flow/controls/dist/style.css';
@import '@vue-flow/minimap/dist/style.css';
@import '@vue-flow/node-resizer/dist/style.css';

@media screen and (min-width: 640px) {
  .dnd-flow {
    flex-direction: row;
  }

  .dnd-flow aside {
    min-width: 25%;
  }
}

@media screen and (max-width: 639px) {
  .dnd-flow aside .nodes {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
}

html,
body,
#app {
  height: 100%;
  margin: 0;
}

#app {
  font-family: 'JetBrains Mono', monospace;
  color: #2c3e50;
  text-align: center;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.vue-flow__minimap {
  transform: scale(75%);
  transform-origin: bottom right;
}

.dnd-flow {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.dnd-flow aside {
  padding: 15px 10px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  background: #10b981bf;
  border-right: 1px solid #eee;
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 30%);
  box-shadow: 0 5px 10px #0000004d;
}

.dnd-flow aside .nodes > * {
  margin-bottom: 10px;
  font-weight: 500;
  cursor: grab;
  box-shadow: 5px 5px 10px 2px rgb(0 0 0 / 25%);
  box-shadow: 5px 5px 10px 2px #00000040;
}

.dnd-flow aside .description {
  margin-bottom: 10px;
}

.dnd-flow .vue-flow-wrapper {
  flex-grow: 1;
  height: 100%;
}

.dropzone-background {
  position: relative;
  width: 100%;
  height: 100%;
}

.dropzone-background .overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

process-panel,
.layout-panel {
  display: flex;
  gap: 10px;
}

.process-panel {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #2d3748;
  border-radius: 8px;
  box-shadow: 0 0 10px rgb(0 0 0 / 50%);
}

.process-panel button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  background-color: #4a5568;
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 10px rgb(0 0 0 / 50%);
}

/* .checkbox-panel {
  display: flex;
  align-items: center;
  gap: 10px;
} */

.process-panel button:hover,
.layout-panel button:hover {
  background-color: #2563eb;
  transition: background-color 0.2s;
}

.process-panel label {
  font-size: 12px;
  color: white;
}

.stop-btn svg {
  display: none;
}

.stop-btn:hover svg {
  display: block;
}
</style>
