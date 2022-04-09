<script lang="ts">
    let mobileMenu = false
    const toggleMobileMenu = () => mobileMenu = !mobileMenu
</script>

<header class="menu">
    <h1 class="menu-title">devtorello</h1>
    <nav>
        <ul class="desktop_menu">
            <li><a href="/"><span class="desktop_menu__contrast">01.</span> home</a></li>
            <li><a href="/about"><span class="desktop_menu__contrast">02.</span> about</a></li>
            <li><a href="/skills"><span class="desktop_menu__contrast">03.</span> skills</a></li>
            <li><a href="/posts"><span class="desktop_menu__contrast">04.</span> posts</a></li>
            <li><a href="/projects"><span class="desktop_menu__contrast">05.</span> projects</a></li>
            <li><a href="/contact"><span class="desktop_menu__contrast">06.</span> contact</a></li>
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

    @media (max-width: 1280px) {
        .desktop_menu {
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

        .desktop_menu__contrast {
            color: var(--secondary-color);
        }

        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            font-size: 16px;
        }
    
        li {
            padding: 1rem 3rem;
        }
    
        a {
            text-decoration: none;
            color: var(--default-color);
        }

        a:hover {
            color: var(--secondary-color);
        }
    }
</style>