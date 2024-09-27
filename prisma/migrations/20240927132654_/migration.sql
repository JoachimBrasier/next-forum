/*
  Warnings:

  - Added the required column `status` to the `topics` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TopicStatus" AS ENUM ('DRAFTED', 'PUBLISHED');

-- AlterTable
ALTER TABLE "topics" ADD COLUMN     "published_at" TIMESTAMP(3),
ADD COLUMN     "status" "TopicStatus" NOT NULL;
