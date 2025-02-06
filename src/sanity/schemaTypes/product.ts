import { defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().min(3).max(100),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule) => rule.required().min(10).max(5000),
    },
    {
      name: "productImage",
      type: "image",
      validation: (rule) => rule.required(),
      title: "Product Image",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) =>
        rule.required().min(1).error("Price must be greater than 0"),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) =>
        rule
          .min(1)
          .unique()
          .error("Please add at least one unique tag"),
    },
    {
      name: "discountPercentage",
      title: "Discount Percentage",
      type: "number",
      validation: (rule) =>
        rule
          .min(0)
          .max(100)
          .error("Discount percentage must be between 0 and 100"),
    },
    {
      name: "isNew",
      title: "New Badge",
      type: "boolean",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
      validation: (rule) => rule.required().error("Slug is required"),
    },
    // Updated category field with 5 types
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Craft", value: "craft" },
          { title: "Design", value: "design" },
          { title: "Handmade", value: "handmade" },
          { title: "Interior", value: "interior" },
          { title: "Wood", value: "wood" },
        ],
      },
      validation: (rule) =>
        rule.min(1).error("Please select at least one category"),
    },
    {
      name: "inventory",
      title: "Inventory",
      type: "number"},
  ],
});
