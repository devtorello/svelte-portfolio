<svelte:head>
    <title>Devtorello</title>
</svelte:head>

<script lang="ts">
    import Footer from "$components/footer.svelte"
    import "$styles/routes/main.css"
</script>

<main>
    <section>
        <div class="presentation">
            <p class="presentation__title">hey there!</p>
            <p class="presentation__title">you can call me <span class="presentation__title__contrast">tati</span>,</p>
            <p class="presentation__title">a <span class="span presentation__title__contrast">back-end software engineer</span>.</p>
            <p class="presentation__subtitle">and also a <span class="presentation__subtitle__contrast">streamer</span> in my free time.</p>
        </div>
    </section>
    <section class="content">
        <img class="picture" src="http://assets.stickpng.com/images/5ede498db760540004f2c5e4.png" alt="An ilustration of me" />
    </section>
</main>

<Footer />
