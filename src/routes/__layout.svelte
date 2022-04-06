<script lang="ts">
    let mobileMenu = false
    const toggleMobileMenu = () => mobileMenu = !mobileMenu
</script>

<header class="menu">
    <h1 class="menu-title">devtorello</h1>
    <nav>
        <ul class="desktop-menu">
            <li><a href="/">home</a></li>
            <li><a href="/about">about</a></li>
            <li><a href="/skills">skills</a></li>
            <li><a href="/posts">posts</a></li>
            <li><a href="/projects">projects</a></li>
            <li><a href="/contact">contact</a></li>
        </ul>
    </nav>
    <button class="btn-mobile" on:click={toggleMobileMenu}>menu</button>
</header>

<ul class="{mobileMenu ? "mobile-menu open" : "mobile-menu"}" id="mobile-menu">
    <li><a href="/" on:click={toggleMobileMenu}>home</a></li>
    <li><a href="/about" on:click={toggleMobileMenu}>about</a></li>
    <li><a href="/skills" on:click={toggleMobileMenu}>skills</a></li>
    <li><a href="/posts" on:click={toggleMobileMenu}>posts</a></li>
    <li><a href="/projects" on:click={toggleMobileMenu}>projects</a></li>
    <li><a href="/contact" on:click={toggleMobileMenu}>contact</a></li>
</ul>

<slot></slot>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700&display=swap');

    :global(:root) {
        --background-color: #000B0D;
        --primary-color: #A52502;
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

    .menu {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .menu-title {
        margin: 0;
        padding: 1rem;
    }

    @media (max-width: 1080px) {
        .desktop-menu {
            display: none;
        }

        .btn-mobile {
            margin: 1rem;
            width: 100px;
            height: 100%;
        }

        .mobile-menu {
            display: none;
        }

        .open {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }

        .mobile-menu li {
            margin-bottom: 10px;
        }
        
        ul {
            list-style: none;
            height: 100%;
            margin: 0;
            padding: 0;
        }

        ul a {
            color: var(--default-color);
        }
    }

    @media (min-width: 1280px) {
        .btn-mobile {
            display: none;
        }
        
        .mobile-menu {
            display: none;
        }

        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            font-size: 18px;
        }
    
        li {
            padding: 1rem 3rem;
        }
    
        a {
            position: relative;
            text-decoration: none;
            color: var(--default-color);
        }
    
        a::before {
            content: '';
            position: absolute;
            display: block;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: var(--primary-color);
            transform: scaleX(0);
            transform-origin: top left;
            transition: transform 0.3s ease;
        }
    
        a:hover::before {
            transform: scale(1);
        }
    }
</style>