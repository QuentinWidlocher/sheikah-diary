/*
  Warnings:

  - You are about to drop the column `preview` on the `Picture` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnail` on the `Picture` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Picture_preview_key";

-- DropIndex
DROP INDEX "Picture_thumbnail_key";

-- AlterTable
ALTER TABLE "Picture" DROP COLUMN "preview",
DROP COLUMN "thumbnail";
