<template>
    <footer>
        <p>{{ copyright }}</p>
    </footer>
</template>
<script>
export default {
    data(){
        return{
            copyright: 'Copyright 2017'
        }
    }
}
</script>
<style scoped>
footer{
    background-color: #f4c842;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1rem;
}
p{
        color: white;
        text-align: center;
}
</style>
