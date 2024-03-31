<template>
    <div class="entry-container mb-3 pointer p-2" @click="$router.push({ name: 'entry', params: { id: 10 } })">
        <!-- Titulo -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">24</span>
            <span class="mx-1 fs-5">Marzo</span>
            <span class="mx-2 fw-light">2024, Domingo</span>
        </div>

        <div class="entry-description">
            Officia tempor duis officia adipisicing id incididunt. Officia aliquip fugiat ad tempor Lorem do adipisicing
            ad sunt nulla exercitation cillum. Est proident deserunt culpa eiusmod aliquip reprehenderit. Sint sit
            commodo nostrud laboris aliquip nisi ad Lorem culpa et ad sunt.
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style lang="scss" scope>
.entry-container {
    border-bottom: 1px solid #2e3c50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: lightblue, $amount: 0);
        transition: 0.2s all ease-in;
    }

    .entry-description {
        font-size: 12px;
    }
}
</style>