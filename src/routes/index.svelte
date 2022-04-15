<svelte:head>
    <title>Devtorello</title>
</svelte:head>

<script lang="ts">
    import { socialMedia } from '$lib/config/env'
    import { logo } from '$assets/index'
    import "$styles/routes/main.css"
</script>

<main>
    <section class="social_media">
        <a href={socialMedia.github} target="_blank" alt="Github Link"><img src={logo.github} alt="Github Logo"></a>
        <a href={socialMedia.instagram} target="_blank" alt="Instagram Link"><img src={logo.instagram} alt="Instagram Logo"></a>
        <a href={socialMedia.twitter} target="_blank" alt="Twitter Link"><img src={logo.twitter} alt="Twitter Logo"></a>
        <a href={socialMedia.linkedin} target="_blank" alt="Linkedin Link"><img src={logo.linkedin} alt="Linkedin Logo"></a>
        <a href={socialMedia.twitch} target="_blank" alt="Twitch Link"><img src={logo.twitch} alt="Twitch Logo"></a>
    </section>
    <section class="content">
        <img class="picture" src="http://assets.stickpng.com/images/5ede498db760540004f2c5e4.png" alt="An ilustration of me" />
    </section>
    <section>
        <div class="presentation">
            <p class="presentation__title">hey there!</p>
            <p class="presentation__title">you can call me <span class="presentation__title__contrast">tati</span>,</p>
            <p class="presentation__title">a <span class="span presentation__title__contrast">back-end software engineer</span>.</p>
            <p class="presentation__subtitle">and also a <span class="presentation__subtitle__contrast">streamer</span> in my free time.</p>
        </div>
    </section>
</main>
