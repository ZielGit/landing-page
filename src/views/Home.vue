<template>
    <div class="Home">
        <Nav />
        <MainHeader />
        <Presentation v-for="obj, objIndex in presentations" :key="objIndex" :content="obj" class="mb-16" />
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
import { reactive, toRefs } from 'vue'
import PorscheCockpit from '../assets/porsche-cockpit.png'
import Gmotor from '../assets/g-motor5.jpeg'

export default {
    components: { 
        Nav,
        MainHeader,
        Presentation,
        Stats,
        Tabs,
        Footer 
    },
    setup() {
        let data = reactive({
            presentations: [{
                left: false,
                columns: [{
                    backgroundColor: 'customBlue',
                    title: 'Future is now',
                    subtitle: 'Taycan concept',
                    description: 'The soul has many aspects. It is variable and constantly changing. When viewing the Porsche Taycan, it reveals itself by a smile that expresses total delight. Or by the urge for freedom at the wheel of the new Taycan Cross Turismo that holds its ground, even away from everyday life.'
                }, {
                    imgSrc: PorscheCockpit
                }]
            }, {
                left: true,
                columns: [{
                    backgroundColor: 'white',
                    button: {
                        backgroundColor: 'customBlue',
                        text: 'Book a test'
                    },
                    title: 'Our first electric Sportscar',
                    subtitle: 'Taycan concept',
                    description: 'The soul has many aspects. It is variable and constantly changing. When viewing the Porsche Taycan, it reveals itself by a smile that expresses total delight. Or by the urge for freedom at the wheel of the new Taycan Cross Turismo that holds its ground, even away from everyday life.'
                }, {
                    imgSrc: Gmotor,
                    contain: true
                }]
            }]
        })

        return {
            ...toRefs(data)
        }
    }
}
</script>