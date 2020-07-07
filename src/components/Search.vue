<template>
    <form @submit.prevent="searchSubmit">
        <input type="search" 
                v-model="search"
                placeholder="Search for answers">
        <button type="submit">
            <i class="fa fa-search"></i>
        </button>
    </form>
</template>

<script>
export default {
    data () {
        return {
            search: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../scss/_variables.scss';
    
    form {
        max-width: 800px;
        margin: 40px auto;
        display: block;
        &:after {
            content: '';
            display: table;
            clear: both;
        }
        input, button {
            outline: none;
            -moz-border-radius: 0;
            -webkit-border-radius: 0;
            border-radius: 0;
        }
        input {
            width: calc(100% - 70px);
            float: left;
            vertical-align: middle;
            font-size: 20px;
            padding: 14px;
            border: 1px solid #e8e7ea;
            border-right: 0;
            border-radius: 4px 0 0 4px;
            background: #ffffff;
        }
        button {
            float: left;
            width: 70px;
            background: $green;
            color: #ffffff;
            border: 0;
            font-size: 20px;
            padding: 15px;
            border-radius: 0 4px 4px 0;
        }
    }
</style>