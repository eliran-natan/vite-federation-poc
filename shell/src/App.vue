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

function gotoMix() {
    view.component = Welcome
    view.framework = 'Vue'
}

function fetchAxoniusDashboard() {
    view.component = defineAsyncComponent(() =>
        import("axonius/Dashboard")
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
        <div class="shell-app">
            <SuspenseWithErrors>
                <template #error="props">
                    <p class="center error space-up">
                    {{ props.error }}
                    </p>
                </template>
                <template #default>
                        <div class="shell-top-bar">
                            Shell App (Vue on Vite)
                        </div>
                        <div class="shell-main">
                            <div class="shell-side-bar-panel">
                                <div class="shell-side-bar">
                                    <sidebar-item title="Welcome" @click="gotoWelcome()"/>
                                    <sidebar-item title="Axonius/Dashboard" @click="fetchAxoniusDashboard()"/>
                                    <sidebar-item title="AxoniusX/Dashboard" @click="fetchAxoniusXDashboard()"/>
                                    <sidebar-item title="Mix" @click="gotoMix()"/>
                                </div>
                            </div>
                            <div class="shell-content">
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
    .shell-app {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
    }
    .shell-top-bar {
        width: 100%;
        height: 120px;
        color: white; 
        padding: 40px;
        font-size: 30px;
        background-color:  #20c997;
        box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%), inset 0 -1px 0 rgb(0 0 0 / 15%);
    }
    .shell-main {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: calc(100vh - 260px);
        margin-top: 20px;
    }
    .shell-side-bar-panel {
        display: flex;
        width: 350px;
        margin-right: 20px;
        box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%), inset 0 -1px 0 rgb(0 0 0 / 15%);
        background-color: #7632f9;
        color: white;
    }
    .shell-content {
        display: flex;
        width: 100%;
        background-color: #f8f9fa;
        border-radius: 10px;
        justify-content: center;
    }
    .shell-side-bar {
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