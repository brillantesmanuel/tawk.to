<template>
    <div class="content">
        <main>
            <div class="container">
                <div class="categories">
                    <div v-for="(item, index) in categories" :key="index" class="category">
                        <div class="column">
                            <router-link :to="`/category/${ item.id }`">
                                <div class="icon">
                                    <i :class="`fa fa-${ item.icon }`"></i>
                                </div>

                                <h2>{{ item.title }}</h2>
                                
                                <p v-if="item.totalArticle > 1" class="totalArticles">{{ item.totalArticle }} articles</p>
                                <p v-else class="totalArticles">{{ item.totalArticle }} article</p>

                                <p class="last_update">Last update: {{ item.updatedOn | moment('from') }}</p>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>


<script>
const axios = require('axios')

export default {
    data () {
        return {
            categories: null
        }
    },
    mounted () {
		axios.get(`api/categories`).then(response => {
			this.categories = response.data.filter(obj => {
                return obj.enabled == true
            }).sort((a, b) => {
                return a.order - b.order
            })
		}).catch(err => {
            console.log( err )
        })
    }
}
</script>

<style lang="scss" scoped>
    @import '../scss/_variables.scss';
    
    .content {
        background: #fafafa;
        height: 800px;
        width: 100%;
        display: table;
        font-family: $font-family;
        main {
            display: table-cell;
            vertical-align: middle;
            .container {
                padding-left: 15px;
                padding-right: 15px;
                margin: auto;
                max-width: 1300px;
                .categories {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-template-rows: repeat(2, 1fr);
                    grid-column-gap: 30px;
                    grid-row-gap: 30px;
                    .category {
                        .column {
                            box-sizing: border-box;
                            box-shadow: $shadow;
                            border-radius: 3px;
                            text-align: center;
                            padding: 15px;
                            background: #ffffff;
                            a {
                                display: block;
                                text-decoration: none;
                                color: $text-black;
                                .icon {
                                    color: $green;
                                    text-align: center;
                                    height: 125px;
                                    display: -ms-flexbox;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    .fa {
                                        font-size: 60px;
                                    }
                                }
                                h2 {
                                    text-align: center;
                                    margin: 20px 0;
                                }
                                .totalArticles {
                                    color: $green;
                                    line-height: 0;
                                }
                                .last_update {
                                    color: $text-gray;
                                    font-size: 14px;                        
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>