"use server";

import { db } from "@/db";
import { postsTable, usersTable } from "@/db/schema";

export async function stff() {
  // await db.insert(usersTable).values({
  //   id: 1,
  //   age: 10,
  //   email: "tat",
  //   name: "hi",
  // });
  await db.insert(postsTable).values({
    title: "hi",
    content: "Ji",
    userId: 1,
  });
}
