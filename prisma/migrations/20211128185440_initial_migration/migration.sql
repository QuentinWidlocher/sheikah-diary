-- CreateTable
CREATE TABLE "Entry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "content" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Picture" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "file" TEXT NOT NULL,
    "preview" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "entryId" TEXT NOT NULL,
    CONSTRAINT "Picture_entryId_fkey" FOREIGN KEY ("entryId") REFERENCES "Entry" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Entry_slug_key" ON "Entry"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Picture_file_key" ON "Picture"("file");

-- CreateIndex
CREATE UNIQUE INDEX "Picture_preview_key" ON "Picture"("preview");

-- CreateIndex
CREATE UNIQUE INDEX "Picture_thumbnail_key" ON "Picture"("thumbnail");
