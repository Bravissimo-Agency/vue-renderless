<template>
    <div id="app">
        <Tabs
            v-slot="{ changeTab, isTabActive }"
            v-model="activeTab"
            class="tabs"
        >
            <TabList
                aria-label="My Tabs"
                class="tabList"
            >
                <Tab
                    :id="1"
                    :active="isTabActive(1)"
                    class="tab"
                    @change="changeTab"
                >
                    Tabb 1
                </Tab>

                <Tab
                    :id="2"
                    :active="isTabActive(2)"
                    class="tab"
                    @change="changeTab"
                >
                    Tabb 2
                </Tab>
            </TabList>

            <TabPanel
                :id="1"
                :active="isTabActive(1)"
                class="tabPanel"
            >
                <h1>Content för tabb 1</h1>
            </TabPanel>

            <TabPanel
                :id="2"
                :active="isTabActive(2)"
                class="tabPanel"
            >
                <h1>Content för tabb 2</h1>
            </TabPanel>
        </Tabs>
    </div>
</template>

<script>
import Tabs from './components/tabs/Tabs';
import TabList from './components/tabs/TabList';
import Tab from './components/tabs/Tab';
import TabPanel from './components/tabs/TabPanel';

export default {
    components: {
        Tabs,
        TabList,
        Tab,
        TabPanel
    },

    data: () => ({
        activeTab: 1
    })
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
