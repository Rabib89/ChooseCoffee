<template>
    <transition name="direction">
    <div v-show="visibleSlide === index" class="slide">
        <slot></slot>
    </div>
</transition>
</template>
 
<script>
export default{
    name: 'SlideSlider',
Data (){
 return{
 
 }
},
props: ['visibleSlide', 'index', 'direction'],
}
</script>
 
<style>
 
.left-enter-active {
    animation: leftInAnimation 0.4s ease-in-out;
}
.left-leave-active {
    animation: leftOutAnimation 0.4s ease-in-out;
}
@keyframes leftInAnimation {
    from {transform: translateX(100%);}
    to {transform: translateX(0);}
}
 
@keyframes leftOutAnimation {
    from {transform: translateX(0);}
    to {transform: translateX(-100%);}
}
.right-enter-active {
    animation: lrightInAnimation 0.4s ease-in-out;
}
.right-leave-active {
    animation: righttOutAnimation 0.4s ease-in-out;
}
@keyframes rightInAnimation {
    from {transform: translateX(100%);}
    to {transform: translateX(0);}
}
 
@keyframes rightOutAnimation {
    from {transform: translateX(0);}
    to {transform: translateX(+100%);}
}
</style>