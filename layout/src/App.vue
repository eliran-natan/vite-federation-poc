<script>

import Layout from "./Layout.vue";
import SuspenseWithErrors from "./SuspenseWithErrors";
import { computed, ref } from "vue";
import ReactDOMServer from "react-dom/server";

async function fetchAxoniusDashboard() {
  return new Promise(async (resolve, reject) => {
    try {
      const res = (await import("axonius/Button")).default;
      resolve(ReactDOMServer.renderToString(res()))
    } catch (err) {
      reject(err);
    }
  });
}

const SidebarItem = {
  props: ['title', 'info'],
  template: `
    <div class="wrapper">
        <div class="item">
            <div class="title">
                {{title}}
            </div>
            <div class="code info">
                {{info}}
            </div>
        </div>
    </div>
    `
};


export default {

   setup() {
    const data = ref(null);
    async function load(element) {
        switch (element) {
            case 'AXONIUS_DASHBOARD':
                data.value = await fetchAxoniusDashboard()
                break;
            default:
                break;
        }
    }
    return {
      button: computed(() => {
        return data.value;
      }),
      load
    };
  },
 
  components: {
      Layout,
      SidebarItem,
      SuspenseWithErrors,
  }
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
                    <div>
                        <div class="top-bar">
                            hi
                        </div>
                        <div class="main">
                            <div class="side-bar-panel">
                                <div class="side-bar">
                                    <sidebar-item title="Home" info="Dashboard in Axonius" @click="load('AXONIUS_DASHBOARD')"/>
                                    <sidebar-item title="Home" info="Dashboard in Axonius" @click="load('AxoniusDashboard')"/>
                                    <sidebar-item title="Home" info="Dashboard in Axonius" @click="load('AxoniusDashboard')"/>
                                </div>
                            </div>
                            <div class="content">
                                <div v-html="button"></div>
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
        flex-direction: column;
    }
    .top-bar {
        width: 100%;
        height: 120px;
        border: 1px solid black;
    }
    .main {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 20px;
    }
    .side-bar-panel {
        display: flex;
        width: 350px;
        border: 1px solid black;
        height: 100vh;
        margin-right: 20px;
    }
    .content {
        display: flex;
        width: 100%;
        border: 1px solid black;
        height: 100vh;
    }
    .side-bar {
        display: flex;
        width: 100%;
        flex-direction: column;
        padding: 20px;
        .item {
            width: 100%;
            padding: 20px;
            border: 1px solid #eee;
            border-radius: 6px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
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