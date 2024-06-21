-- CreateTable
CREATE TABLE "AcceptOBJ" (
    "id" TEXT NOT NULL,
    "data" JSONB NOT NULL,

    CONSTRAINT "AcceptOBJ_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AcceptOBJ_id_key" ON "AcceptOBJ"("id");
