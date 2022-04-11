const getEnvVariable = (property: string): string => import.meta.env[property] as string

export const socialMedia = {
    linkedin: getEnvVariable('VITE_LINKEDIN_URL'),
    twitter: getEnvVariable('VITE_TWITTER_URL'),
    twitch: getEnvVariable('VITE_TWITCH_URL'),
    github: getEnvVariable('VITE_GITHUB_URL'),
    instagram: getEnvVariable('VITE_INSTAGRAM_URL')
}
