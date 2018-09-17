<template>
  <div>
      template
      <mulit-template-a></mulit-template-a>
      <mulit-template-b></mulit-template-b>
  </div>

</template>

<script>
import mulitTemplateA from './mulitTemplateA.vue'
import mulitTemplateB from './mulitTemplateB.vue'
// import fullScreen from './utils/fullScreen'
export default {
  components: {
    mulitTemplateA,
    mulitTemplateB
  }
}
</script>
