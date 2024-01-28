import { defineCollection } from "astro:content"
import { AuthorSchema, PostSchema } from "~schemas"

const posts = defineCollection({
    type: 'content',
    schema: PostSchema,
})

const authors = defineCollection({
    type: 'data',
    schema: AuthorSchema,
})

export const collections = {
    posts,
    authors,
}
