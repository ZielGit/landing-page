<template>
    <div>
        <Nav />
        <MainHeader />
        <Presentation />
        <Presentation />
        <Stats />
        <Tabs />
        <Footer />
    </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import MainHeader from '../components/MainHeader.vue'
import Nav from '../components/Nav.vue'
import Presentation from '../components/Presentation.vue'
import Stats from '../components/Stats.vue'
import Tabs from '../components/Tabs.vue'

export default {
    components: { Nav, MainHeader, Presentation, Stats, Tabs, Footer },
}
</script>

<style lang="scss" scoped>

</style>