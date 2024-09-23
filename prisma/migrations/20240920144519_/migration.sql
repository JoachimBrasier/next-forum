/*
  Warnings:

  - Added the required column `content` to the `topics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "topics" ADD COLUMN     "content" TEXT NOT NULL;
