<script lang="ts">
    import "$styles/routes/__layout.css"

    let mobileMenu = false
    const toggleMobileMenu = () => mobileMenu = !mobileMenu
</script>

<header class="menu">
    <h1 class="menu-title">devtorello</h1>
    <nav>
        <ul class="desktop_menu">
            <li><a href="/"><span class="menu__contrast">01.</span> home</a></li>
            <li><a href="/about"><span class="menu__contrast">02.</span> about</a></li>
            <li><a href="/skills"><span class="menu__contrast">03.</span> skills</a></li>
            <li><a href="/posts"><span class="menu__contrast">04.</span> posts</a></li>
            <li><a href="/projects"><span class="menu__contrast">05.</span> projects</a></li>
            <li><a href="/contact"><span class="menu__contrast">06.</span> contact</a></li>
        </ul>
    </nav>
    <button class="btn-mobile" on:click={toggleMobileMenu}>menu</button>
</header>

<ul class="{mobileMenu ? "mobile-menu open" : "mobile-menu"}" id="mobile-menu">
    <li><a href="/" on:click={toggleMobileMenu}><span class="menu__contrast">01.</span> home</a></li>
    <li><a href="/about" on:click={toggleMobileMenu}><span class="menu__contrast">02.</span> about</a></li>
    <li><a href="/skills" on:click={toggleMobileMenu}><span class="menu__contrast">03.</span> skills</a></li>
    <li><a href="/posts" on:click={toggleMobileMenu}><span class="menu__contrast">04.</span> posts</a></li>
    <li><a href="/projects" on:click={toggleMobileMenu}><span class="menu__contrast">05.</span> projects</a></li>
    <li><a href="/contact" on:click={toggleMobileMenu}><span class="menu__contrast">06.</span> contact</a></li>
</ul>

<slot></slot>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700&display=swap');

    :global(:root) {
        --background-color: #0D0D0D;
        --primary-color: #3E4759;
        --secondary-color: #69788C;
        --terciary-color: #949BA6;
        --detail-color: #F2695C;
        --default-color: #F2F2F2;
    }

    :global(body) {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background-color: var(--background-color);
        color: var(--default-color);
        font-family: 'Poppins', sans-serif;
    }
</style>