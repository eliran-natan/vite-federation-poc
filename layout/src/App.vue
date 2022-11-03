<script setup>

import { computed, defineAsyncComponent, reactive } from "vue";
import ReactDOMServer from "react-dom/server";
import Welcome from './Welcome.vue';

const view = reactive({
  framework: 'Vue',
  component: Welcome
})

function gotoWelcome() {
    view.component = Welcome
    view.framework = 'Vue'
}

function fetchAxonius2Dashboard() {
    view.component = defineAsyncComponent(() =>
        import("axonius2/Dashboard")
    )
    view.framework = "Vue"
}

async function fetchAxoniusXDashboard() {
    view.component = await new Promise(async (resolve, reject) => {
        try {
            const res = (await import("axoniusX/Dashboard")).default;
            resolve(ReactDOMServer.renderToString(res()))
        } catch (err) {
            reject(err);
        }
    });
    view.framework = "React"
}

const component = computed(() => {
  return view.component
})

const framework = computed(() => {
  return view.framework
})

const SidebarItem = {
  props: ['title', 'info'],
  template: `
    <div class="item">
        <div class="title">
            {{title}}
        </div>
        <div class="code info">
            {{info}}
        </div>
    </div>
    `
};

</script>

<template>
    <div>
        <div class="app">
            <SuspenseWithErrors>
                <template #error="props">
                    <p class="center error space-up">
                    {{ props.error }}
                    </p>
                </template>
                <template #default>
                        <div class="top-bar">
                            Shell App (Vue on Vite)
                        </div>
                        <div class="main">
                            <div class="side-bar-panel">
                                <div class="side-bar">
                                    <sidebar-item title="Welcome" @click="gotoWelcome()"/>
                                    <sidebar-item title="Axonius/Dashboard" @click="fetchAxonius2Dashboard()"/>
                                    <sidebar-item title="AxoniusX/Dashboard" @click="fetchAxoniusXDashboard()"/>
                                    <sidebar-item title="Mix" @click="load('AxoniusDashboard')"/>
                                </div>
                            </div>
                            <div class="content">
                                <div v-if="framework">
                                    <component v-if="framework == 'Vue'" :is="component"></component>
                                    <div v-if="framework == 'React'" v-html="component"></div>
                                </div>
                            </div>
                        </div>
                 
                </template>
                <template #fallback>
                    <div class="space-up">
                        Loading please wait ... 
                    </div>
                </template>
            </SuspenseWithErrors>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .app {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
    }
    .top-bar {
        width: 100%;
        height: 120px;
        //border: 2px dashed #42b883;

        background-color: #20c997;
        box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%), inset 0 -1px 0 rgb(0 0 0 / 15%);
    }
    .main {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: calc(100vh - 260px);
        margin-top: 20px;
    }
    .side-bar-panel {
        display: flex;
        width: 350px;
        margin-right: 20px;
        box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%), inset 0 -1px 0 rgb(0 0 0 / 15%);
        background-color: #7632f9;
        color: white;
    }
    .content {
        display: flex;
        width: 100%;
        background-color: #f8f9fa;
        border-radius: 10px;
    }
    .side-bar {
        display: flex;
        width: 100%;
        flex-direction: column;
        padding: 20px;
        .item {
            width: 100%;
            padding: 20px;
            border-radius: 6px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            cursor: pointer;
            .title {
                font-size: 18px;
            }
            .info {
                font-size: 14px;
                margin-top: 10px;
            }
        }
    }    
</style>