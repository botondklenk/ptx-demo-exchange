import { Request, Response } from "express";
import { Category } from "../models/category.model";

export const getCategory = async (req: Request, res: Response) => {
  try {
    const fixedCategory = {
      category: "xAPI",
      description: "eLearning data format"
    };

    const existingCategory = await Category.findOne({ category: fixedCategory.category });

    if (existingCategory) {
      return res.status(200).json({ _id: existingCategory._id });
    }

    const newCategory = new Category(fixedCategory);
    const savedCategory = await newCategory.save();

    res.status(201).json({ _id: savedCategory._id });
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};