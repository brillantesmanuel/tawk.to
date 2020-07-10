<template>
    <div id="result">
        <div v-if="items.length > 0">
            <div v-for="(item, index) in items" :key="index">
                <h2>{{ item.title }}</h2>
                <p>{{ item.content }}</p>
            </div>
        </div>

        <div v-else>
            <p>No result found.</p>
        </div>
    </div>
</template>

<script>
const axios = require('axios');

export default {
    data () {
        return {
            items: []
        }
    },
    mounted () {
        let slug = this.$route.params.slug

        axios.get(`api/search/${ slug }`).then(response => {
            this.items = response.data.filter((item, index) => {
                return item.title == slug
            })
        }).catch(error => {
            console.log( error )
        })
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

#result {
    max-width: 1300px;
    margin: 0 auto;
    p {
        font: 400 14px $font-family;
    }
}
</style>