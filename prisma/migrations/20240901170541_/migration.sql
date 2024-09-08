-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_user_id_fkey";

-- DropForeignKey
ALTER TABLE "topics" DROP CONSTRAINT "topics_user_id_fkey";

-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "section_id" TEXT;

-- AlterTable
ALTER TABLE "comments" ALTER COLUMN "user_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "topics" ALTER COLUMN "user_id" DROP NOT NULL;

-- CreateTable
CREATE TABLE "sections" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sections_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "sections"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "topics" ADD CONSTRAINT "topics_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
