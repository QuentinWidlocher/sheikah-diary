-- CreateTable
CREATE TABLE "Entry" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Entry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Picture" (
    "id" TEXT NOT NULL,
    "file" TEXT NOT NULL,
    "preview" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "entryId" TEXT NOT NULL,

    CONSTRAINT "Picture_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Entry_slug_key" ON "Entry"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Picture_file_key" ON "Picture"("file");

-- CreateIndex
CREATE UNIQUE INDEX "Picture_preview_key" ON "Picture"("preview");

-- CreateIndex
CREATE UNIQUE INDEX "Picture_thumbnail_key" ON "Picture"("thumbnail");

-- AddForeignKey
ALTER TABLE "Picture" ADD CONSTRAINT "Picture_entryId_fkey" FOREIGN KEY ("entryId") REFERENCES "Entry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
