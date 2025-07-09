<script lang="ts">
	import DoubleLineDivide from "$lib/DoubleLineDivide.svelte";
</script>

<div class="body">

    <img class="cropped-image" src="/three_people_at_laptops.JPG" alt="Three people at laptops" />
    <DoubleLineDivide />
</div>

<slot />

<style>
    .body {
        width: 60%;
        margin: 0 auto;
    }
    .cropped-image {
        width: 100%;
        height: 60vh; /* Adjust this to control the crop */
        object-fit: cover;
        object-position: top;
        display: block;
    }
</style>