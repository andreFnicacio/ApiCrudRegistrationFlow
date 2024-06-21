/*
  Warnings:

  - A unique constraint covering the columns `[type]` on the table `AcceptOBJ` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AcceptOBJ_type_key" ON "AcceptOBJ"("type");
