import { defineType } from "sanity";

export const blog = defineType({
  name: "blog",
  title: "Blog",
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
      options: { source: "title", maxLength: 200 },
      validation: (rule) => rule.required(),
    },
    {
      name: "author",
      title: "Author",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
      validation: (rule) => rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
            
          { title: "Craft", value: "craft" },
          { title: "Design", value: "design" },
          { title: "Handmade", value: "handmade" },
          { title: "Interior", value: "interior" },
          { title: "Wood", value: "wood" },
        ],
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "image",
      title: "Blog Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    },
  ],
});
