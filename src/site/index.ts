import { z } from 'zod';

export const ConfigSchema = z.object({
    author: z.string(),
    social: z.array(z.object({
        icon: z.string(),
        url: z.string().url(),
    }))
});

export type Config = z.infer<typeof ConfigSchema>;

export const config: Config = {
    author: 'Boluo',
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
    ]
};
