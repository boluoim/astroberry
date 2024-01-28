import { z } from 'zod';

export const ConfigSchema = z.object({
    brand: z.string(),
    author: z.string(),
    social: z.array(z.object({
        icon: z.string(),
        url: z.string().url(),
    })),
    ga: z.string().optional(),
});

export type Config = z.infer<typeof ConfigSchema>;

export const config: Config = {
    brand: 'Astroberry',
    author: 'Boluo IM',
    social: [
        {
            icon: 'mdi:github',
            url: 'https://github.com/boluoim/astroberry'
        },
        {
            icon: 'mdi:twitter',
            url: 'https://github.com/boluoim/astroberry'
        },
        {
            icon: 'mdi:discord',
            url: 'https://github.com/boluoim/astroberry'
        },
        {
            icon: 'mdi:facebook',
            url: 'https://github.com/boluoim/astroberry'
        },
        {
            icon: 'mdi:linkedin',
            url: 'https://github.com/boluoim/astroberry'
        }
    ],
    // Google Analytics tracking ID (leave blank to disable)
    ga: 'G-F544SMQW96'
};
