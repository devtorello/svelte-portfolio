<script lang="ts">
    import { socialMedia } from '$lib/config/env'
    import { logo } from '$assets/index'
    import "$styles/components/footer.css"
</script>

<footer>
    <section class="social_media">
        <a href={socialMedia.linkedin} target="_blank" alt="Linkedin Link" class="social_media__link"><img src={logo.linkedin} alt="Linkedin Logo" class="social_media__icon"></a>
        <a href={socialMedia.twitter} target="_blank" alt="Twitter Link" class="social_media__link"><img src={logo.twitter} alt="Twitter Logo" class="social_media__icon"></a>
        <a href={socialMedia.instagram} target="_blank" alt="Instagram Link" class="social_media__link"><img src={logo.instagram} alt="Instagram Logo" class="social_media__icon"></a>
        <a href={socialMedia.twitch} target="_blank" alt="Twitch Link" class="social_media__link"><img src={logo.twitch} alt="Twitch Logo" class="social_media__icon"></a>
        <a href={socialMedia.github} target="_blank" alt="Github Link" class="social_media__link"><img src={logo.github} alt="Github Logo" class="social_media__icon"></a>
    </section>
    <section class="made_by">
        <p>Made by Tati with 💜.</p>
    </section>
</footer>