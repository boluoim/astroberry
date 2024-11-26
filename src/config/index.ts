import { z } from 'zod';

export const ConfigSchema = z.object({
    brand: z.string(),
    author: z.string(),
    social: z.array(z.object({
        name: z.string(),
        icon: z.string(),
        url: z.string().url(),
    })),
    ga: z.string().optional(),
});

export type Config = z.infer<typeof ConfigSchema>;

export const config: Config = {
    brand: 'Astroberry',
    author: 'Astroberry',
    social: [
        {
            name: 'Github',
            icon: 'mdi:github',
            url: 'https://github.com/boluoim/astroberry'
        },
        {
            name: 'Twitter',
            icon: 'mdi:twitter',
            url: 'https://github.com/boluoim/astroberry'
        },
        {
            name: 'Discord',
            icon: 'mdi:discord',
            url: 'https://github.com/boluoim/astroberry'
        },
        {
            name: 'Facebook',
            icon: 'mdi:facebook',
            url: 'https://github.com/boluoim/astroberry'
        },
        {
            name: 'Instagram',
            icon: 'mdi:linkedin',
            url: 'https://github.com/boluoim/astroberry'
        }
    ],
    // Google Analytics tracking ID (leave blank to disable)
    ga: 'G-F544SMQW96'
};
