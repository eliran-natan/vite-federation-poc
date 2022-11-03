<script setup>

import Card from './components/Card.vue'
import Dashboard from './components/Dashboard.vue'

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
        <div class="axonius-app">
            <SuspenseWithErrors>
                <template #error="props">
                    <p class="center error space-up">
                    {{ props.error }}
                    </p>
                </template>
                <template #default>
                        <div class="axonius-top-bar">
                          Axonius App (Vue on Vite)
                        </div>
                        <div class="axonius-main">
                            <div class="axonius-side-bar-panel">
                                <div class="axonius-side-bar">
                                    <sidebar-item title="Menu Item 1" />
                                    <sidebar-item title="Menu Item 2"/>
                                    <sidebar-item title="Menu Item 3"/>
                                </div>
                            </div>
                            <div class="axonius-content">
                              <Dashboard/>
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
</template>

<style lang="scss">
    .axonius-app {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
    }
    .axonius-top-bar {
        width: 100%;
        height: 120px;
        color: white; 
        padding: 40px;
        font-size: 30px;
        background-color: #dc3545;
        box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%), inset 0 -1px 0 rgb(0 0 0 / 15%);
    }
    .axonius-main {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: calc(100vh - 260px);
        margin-top: 20px;
    }
    .axonius-side-bar-panel {
        display: flex;
        width: 350px;
        margin-right: 20px;
        box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%), inset 0 -1px 0 rgb(0 0 0 / 15%);
        background-color: #dc3545;
        color: white;
    }
    .axonius-content {
        display: flex;
        width: 100%;
        background-color: #f8f9fa;
        border-radius: 10px;
        justify-content: space-around;
        padding: 50px;
    }
    .axonius-side-bar {
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