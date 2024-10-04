import { S3 } from "@aws-sdk/client-s3";

// import fs from "node:fs";

import { nanoid } from "nanoid";

import sql from "better-sqlite3";
import { resolve } from "styled-jsx/css";
import slugify from "slugify";
import xss from "xss";

const s3 = new S3({
  region: "eu-north-1",
});

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // для имитации задержки при загрузке данных

  // throw new Error("loading meals failed"); // для имитации ошибки при загрузке данных
  const data = db.prepare("SELECT * FROM meals").all(); // run() исп если добавляются/изменяются данные. all() - для получения всех данных
  console.log("getMeals - data", data);
  return data;
}
getMeals;

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}${nanoid()}.${extension}`;

  // Код для записи данных в локальную БД
  // const stream = fs.createWriteStream(`public/images/${fileName}`); // создает поток, который позволит записывать данные в нужный файл
  //

  const bufferedImage = await meal.image.arrayBuffer();

  s3.putObject({
    Bucket: "dimakornieiev-nextjs-mealprogect-user-images",
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });

  // Код для записи данных в локальную БД
  // stream.write(Buffer.from(bufferedImage), (error) => {
  //   if (error) {
  //     throw new Error("saving image failed!");
  //   }
  // });

  // meal.image = `/images/${fileName}`;
  //

  meal.image = fileName;
  meal.slug = fileName;
  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(meal);
}
