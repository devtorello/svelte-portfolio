<svelte:head>
    <title>Devtorello</title>
</svelte:head>

<script lang="ts">
    import { logo } from '$assets/index'
</script>

<main class="main">
    <section class="social-media">
        <a href="https://github.com" target="_blank" alt="Github Link"><img src={logo.github} alt="Github Logo"></a>
        <a href="https://instagram.com" target="_blank" alt="Instagram Link"><img src={logo.instagram} alt="Instagram Logo"></a>
        <a href="https://twitter.com" target="_blank" alt="Twitter Link"><img src={logo.twitter} alt="Twitter Logo"></a>
        <a href="https://linkedin.com" target="_blank" alt="Linkedin Link"><img src={logo.linkedin} alt="Linkedin Logo"></a>
        <a href="https://twitch.tv" target="_blank" alt="Twitch Link"><img src={logo.twitch} alt="Twitch Logo"></a>
    </section>
    <section class="content">
        <img class="picture" src="http://assets.stickpng.com/images/5ede498db760540004f2c5e4.png" alt="An ilustration of me" />
    </section>
    <section class="">
        <div class="presentation">
            <p class="presentation__title">hey there!</p>
            <p class="presentation__title">you can call me <span class="presentation__title__contrast">tati</span>,</p>
            <p class="presentation__title">a <span class="span presentation__title__contrast">back-end software engineer</span>.</p>
            <p class="presentation__subtitle">and also a <span class="presentation__subtitle__contrast">streamer</span> in my free time.</p>
        </div>
    </section>
</main>

<style>
    .main {
        width: 100%;
        height: calc(100vh - 80px);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .social-media {
        margin: 0rem 5rem;
        height: 100%;
        display: flex;
        align-items: center;
        align-content: center;
        flex-direction: column;
        justify-content: flex-end;
    }

    .social-media::after {
        content: "";
        display: block;
        width: 1px;
        height: 25rem;
        margin: 0px auto;
        background-color: var(--default-color);
    }

    a {
        margin: 1rem;
        padding: 0.5rem;
        border-radius: 15px;
    }

    .picture {
        width: 45rem;
    }

    .presentation {
        text-align: right;
        margin: 0rem 5rem;
    }

    p {
        margin: 0;
    }

    .presentation__title {
        font-size: 60px;
        font-weight: 700;
    }

    .presentation__title__contrast {
        color: var(--detail-color);
    }

    .presentation__subtitle {
        font-size: 40px;
    }

    .presentation__subtitle__contrast {
        color: var(--primary-color);
    }
</style>
