/*
  Warnings:

  - Added the required column `name` to the `sections` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sections" ADD COLUMN     "name" TEXT NOT NULL;
