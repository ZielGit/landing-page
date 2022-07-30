<template>
    <div>
        {{ content }}
    </div>
</template>

<script>
export default {
    props: {
        content: {
            default: () => {},
            type: Object
        }
    },
    setup(props) {
        console.log(props.content)
    }
}
</script>

<style lang="scss" scoped>

</style>