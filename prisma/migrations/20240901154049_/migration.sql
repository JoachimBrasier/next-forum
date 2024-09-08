/*
  Warnings:

  - You are about to drop the column `topicId` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `topics` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `topics` table. All the data in the column will be lost.
  - Added the required column `topic_id` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `topics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `topics` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_topicId_fkey";

-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_userId_fkey";

-- DropForeignKey
ALTER TABLE "topics" DROP CONSTRAINT "topics_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "topics" DROP CONSTRAINT "topics_userId_fkey";

-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "parent_category_id" TEXT;

-- AlterTable
ALTER TABLE "comments" DROP COLUMN "topicId",
DROP COLUMN "userId",
ADD COLUMN     "topic_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "topics" DROP COLUMN "categoryId",
DROP COLUMN "userId",
ADD COLUMN     "category_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_category_id_fkey" FOREIGN KEY ("parent_category_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "topics" ADD CONSTRAINT "topics_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "topics" ADD CONSTRAINT "topics_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "topics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
