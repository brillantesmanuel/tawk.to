<template>
    <div class="content">
        <main>
            <div class="container">
                <ul class="breadcrumb">
                    <li>
                        <router-link to="/">All Categories</router-link>
                    </li>
                    <li>
                        {{ category.title }}
                    </li>
                </ul>
            </div>

            <div class="container">
                <aside class="left">
                    <div class="box-container">
                        <div class="box box-center">
                            <div class="box-content">
                                <div class="box-header">
                                    <div class="icon">
                                        <i :class="`fa fa-${ category.icon }`"></i>
                                    </div>

                                    <h2>{{ category.title }}</h2>
                                    <p class="_updated">Updated {{ category.updatedOn | moment('from') }}</p>
                                </div>
                                <div class="box-body">
                                    <div class="icon">
                                        <i class="fa fa-info"></i>
                                    </div>

                                    <p>{{ category.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                <article class="right articles">
                    <div class="box-container">
                        <div v-for="(item, index) in articles" :key="index" class="box box-normal">
                            <div class="box-content">
                                <div class="box-header">
                                    <div class="icon">
                                        <i :class="`fa fa-${ item.icon }`"></i>
                                    </div>
                                </div>

                                <div class="box-body">
                                    <h2>{{ item.title }}</h2>
                                    <p class="_updated">Updated: {{ item.updatedOn | moment('from') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                
                <footer>
                    <div v-for="(item, index) in otherCategory" :key="index">
                        {{ item.title }}
                    </div>
                </footer>
            </div>
        </main>
    </div>
</template>

<script>
const axios = require('axios')

export default {
    data () {
        return {
            category: {
                icon: '',
                title: '',
                description: ''
            },
            articles: null
        }
    },
    mounted () {
        axios.get(`api/categories`).then(response => {
            const catID = this.$route.params.catID

            this.category = response.data.find(obj => obj.id == catID )
        })

        axios.get(`api/category/${ this.$route.params.catID }`).then(response => {
            this.articles = response.data.filter(obj => {
                return obj.status == 'published'
            })
        })
    }
}
</script>  

<style lang="scss" scoped>
    @import '../scss/_variables.scss';
    
    
    .content {
        background: #fafafa;
        width: 100%;
        font-family: $font-family;
        main {
            .container {
                max-width: 1300px;
                margin: 0 auto;
                &:after {
                    content: '';
                    display: table;
                    clear: both;
                }

                .breadcrumb {
                    margin: 0;
                    padding: 20px 0;
                    display: block;
                    li {
                        display: inline-block;
                        color: $text-gray;
                        margin-right: 5px;
                        & + li:before  {
                            content: '>';
                            margin-right: 5px;
                        }

                        a {
                            color: $green;
                            text-decoration: none;
                            font-weight: 600;
                        }
                    }
                }

                .left, .right {
                    float: left;
                    margin-top: 20px;
                    width: 100%;
                    .box-container {
                        padding: 0 15px;
                    }
                }
                .left {
                    max-width: 35%;
                    margin-left: -30px;
                }
                .right {
                    max-width: 65%;
                    margin-right: -30px;
                }
            }
        }

        .box {
            box-shadow: $shadow;
            background: #ffffff;
            width: 100%;
            margin: 15px;
            color: $text-black;
            &.box-center {
                text-align: center;
                .box-content {
                    padding: 15px;
                    .box-header {
                        .icon {
                            height: 120px;
                            display: -ms-flexbox;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        h2 {
                            line-height: 0;
                        }
                        ._updated {
                            color: $text-gray;
                            font-size: 12px;
                            margin-bottom: 30px;
                        }
                    }
                    .box-body {
                        border-top: 1px solid #f0efef;
                        margin-left: -15px;
                        margin-right: -15px;
                        padding-left: 15px;
                        padding-right: 15px;
                        .icon {
                            border: 2px solid $green;
                            max-width: 30px;
                            margin: 10px auto 0;
                            border-radius: 100px;
                            padding: 4px 12px;
                            display: inline-block;
                            .fa {
                                padding: 0;
                                margin: 0;
                                font-size: 10px;
                            }
                        }
                        p {
                            color: $text-gray;
                        }
                    }
                }
            }

            &.box-normal {
                position: relative;

                &:before, &:after {
                    content: '';
                    width: 0;
                    height: 0;
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    border: 20px solid;
                    border-color: transparent transparent  transparent $green;
                }
                &:after {
                    right: 3px;
                    border-color: transparent transparent  transparent #ffffff;
                }
                .box-content {
                    padding: 15px;
                    display: -ms-flexbox;
                    display: flex;
                    flex: wrap;
                    justify-items: center;
                    .box-header {
                        max-width: 15%;
                        flex: 0 0 15%;
                        -ms-flex: 0 0 15%;
                        align-self: center;
                        .icon {
                            text-align: center;
                            .fa {
                                font-size: 24px;
                            }
                        }
                    }
                    .box-body {
                        h2 {
                            line-height: .8em;
                            color: $text-black;
                            font-weight: 400;
                        }
                        ._updated {
                            font-size: 14px;
                            color: $text-gray;
                        }
                    }
                }
            }

            .icon {
                .fa {
                    font-size: 60px;
                    color: $green;
                }
            }
        }
    }
</style>