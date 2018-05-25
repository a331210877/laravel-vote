<template>
  <div>

    <!-- <uploader
        :max="varmax"
        :images="images"
        :handle-click="true"
        :show-header="false"
        :readonly="true"
        :upload-url="uploadUrl"
        name="img"
        :params="params"
        size="small"
        @preview="previewMethod"
        @add-image="addImageMethod"
        @remove-image="removeImageMethod"
    ></uploader> -->
  </div>
</template>


<script>
    import Uploader from 'vux-uploader'
    export default {
        components: {
            Uploader,
        },
        data(){
            return {
      
            }
        },
        methods:{
    
        },
        mounted() {
        }
    }
</script>
<style>

</style>

