/*
  Warnings:

  - You are about to drop the column `tagId` on the `topics` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "topics" DROP CONSTRAINT "topics_tagId_fkey";

-- AlterTable
ALTER TABLE "topics" DROP COLUMN "tagId",
ADD COLUMN     "tag_id" TEXT;

-- AddForeignKey
ALTER TABLE "topics" ADD CONSTRAINT "topics_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE SET NULL ON UPDATE CASCADE;
