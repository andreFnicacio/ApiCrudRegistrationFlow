/*
  Warnings:

  - Added the required column `type` to the `AcceptOBJ` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AcceptOBJ" ADD COLUMN     "type" TEXT NOT NULL;
