import { type SchemaTypeDefinition } from "sanity"

const post: SchemaTypeDefinition = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "Short summary shown in the blog grid.",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 6,
      description: "Full description or body preview.",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Technique", value: "TECHNIQUE" },
          { title: "Routes", value: "ROUTES" },
          { title: "Gear", value: "GEAR" },
          { title: "Training", value: "TRAINING" },
          { title: "Community", value: "COMMUNITY" },
        ],
      },
    },
    {
      name: "readTime",
      title: "Read Time",
      type: "string",
      description: "E.g. '5 min read'.",
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "mainImage",
    },
  },
}

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post],
}
