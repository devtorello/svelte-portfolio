<script lang="ts">
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
            padding: 0.5rem;
            background: transparent;
            border: 1px solid var(--primary-color);
            border-radius: 10px;
            color: var(--primary-color);
        }

        .mobile-menu {
            display: none;
        }

        .open {
            display: flex;
            flex-direction: column;
            position: absolute;
            width: 100%;
            height: calc(100vh - 80px);
            background: var(--background-color);
            align-items: center;
            justify-content: center;
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
            text-decoration: none;
            color: var(--default-color);
        }

        li {
            margin: 1rem;
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
            font-size: 16px;
        }
    
        li {
            padding: 1rem 3rem;
        }

        .menu__contrast {
            color: var(--secondary-color);
        }

        a {
            text-decoration: none;
            color: var(--default-color);
        }

        a:hover {
            color: var(--secondary-color);
        }
    }

    .menu__contrast {
        color: var(--secondary-color);
    }
</style>