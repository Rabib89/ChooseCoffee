<template>
    <div class="slider">
        <slot></slot>
 
        <button @click="next" class="next">Next</button>
        <button @click="prev" class="prev">Prev</button>
 
    </div>
</template>
<script>
// import Slide from '../user/Slide.vue'
export default {
    name: 'SliderImage',
    data() {
        return{
           
        }
    },
    methods: {
        next() {
           
                this.$emit('next')
        },
        prev() {
           
                this.$emit('prev')
        }
    }
   
}
</script>
<style scoped>
/* .slider{
    position:relative;
    width:600px;
    height:35px;
    overflow: hidden;
} */
button{
    position: absolute;
    height: 40px;
    width: 50px;
    top: calc(50%-20Px);
    background-color: black;
    border: none;
    color:aliceblue;
 
}
button:focus, button:hover {
    outline: none;
    cursor: pointer;
}
.next{
    right: 0;
    margin-top: -30%;
}
.prev{
    left:0;
    margin-top: -30%;
}
</style>
