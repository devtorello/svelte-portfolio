# My Portfolio 🚧
Hey, there! This is my portfolio site and it is still under development. It is **not** the final version. :)

## How to run this project?
After you cloned this repo, you will need to follow the following steps...

```bash
# enter the project folder
cd svelte-portfolio

# install the dependencies
npm install

# start the server locally
npm run dev
```

Have fun! 🤗

*PS: If you want to know more about svelte, feel free to access [Svelte Introduction](https://kit.svelte.dev/docs/introduction). Also, you should follow the steps to create the necessary env variables.*

### Creating the Environment Variables
We are going to use environment variables in order to make changes easier on our project, when we are talking about links and so on. Having that said, you should create a .env file (or use whatever secrets application you link, such as [doppler](https://www.doppler.com/)) on our root folder:

| Env Variable | Description |
|--------------|-------------|
| VITE_LINKEDIN_URL | URL of your Linkedin profile. |
| VITE_TWITTER_URL | URL of your Twitter profile. |
| VITE_TWITCH_URL | URL of your Twitch profile. |
| VITE_GITHUB_URL | URL of your Github profile. |
| VITE_INSTAGRAM_URL | URL of your Instagram profile. |

## How to build this project?
To create a production version of this project, you'll have to...

```bash
npm run build
```

Also, you can preview the production version with...

```bash
npm run preview
```

You need to keep in mind that, if you plan to deploy this app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Useful Links Utilized During the Project
- 💻 [Screen Sizes](https://screensiz.es/monitor).
