from dataclasses import dataclass

@dataclass
class File:
    id: int
    name: str
    categories: list[str]
    parent: int
    size: int


"""
Task 1
"""
def leafFiles(files: list[File]) -> list[str]:
    parentFiles = {}
    for file in files: parentFiles[file.parent] = file
    noChildren = []
    for file in files:
        result = parentFiles.get(file.id)
        if not result: noChildren.append(file.name)

    return noChildren


"""
Task 2
"""
def kLargestCategories(files: list[File], k: int) -> list[str]:
    categoryDict = {}
    for file in files:
        for category in file.categories:
            categoryDict[category] = categoryDict.get(category, 0) + 1

    sortedCatergories = sorted(categoryDict, key=lambda k:(categoryDict[k], k[::-1]), reverse=True)
    return sortedCatergories[:k]


"""
Task 3
"""
def largestFileSize(files: list[File]) -> int:

    # Search for child Id
    def dfs(fileId):
        currentFile = filesDict[fileId]
        currentSize = currentFile.size
        for child in childrenDict[currentFile.id]:
            currentSize += dfs(child.id)
        return currentSize


    filesDict = {file.id: file for file in files}
    childrenDict = {file.id: [] for file in files}
    for file in files:
        if file.parent != -1:
            childrenDict[file.parent].append(file)

    maxSize = 0
    for file in files:
        if file.parent == -1:
            maxSize = max(maxSize, dfs(file.id))

    return maxSize




if __name__ == '__main__':
    testFiles = [
        File(1, "Document.txt", ["Documents"], 3, 1024),
        File(2, "Image.jpg", ["Media", "Photos"], 34, 2048),
        File(3, "Folder", ["Folder"], -1, 0),
        File(5, "Spreadsheet.xlsx", ["Documents", "Excel"], 3, 4096),
        File(8, "Backup.zip", ["Backup"], 233, 8192),
        File(13, "Presentation.pptx", ["Documents", "Presentation"], 3, 3072),
        File(21, "Video.mp4", ["Media", "Videos"], 34, 6144),
        File(34, "Folder2", ["Folder"], 3, 0),
        File(55, "Code.py", ["Programming"], -1, 1536),
        File(89, "Audio.mp3", ["Media", "Audio"], 34, 2560),
        File(144, "Spreadsheet2.xlsx", ["Documents", "Excel"], 3, 2048),
        File(233, "Folder3", ["Folder"], -1, 4096),
    ]

    assert sorted(leafFiles(testFiles)) == [
        "Audio.mp3",
        "Backup.zip",
        "Code.py",
        "Document.txt",
        "Image.jpg",
        "Presentation.pptx",
        "Spreadsheet.xlsx",
        "Spreadsheet2.xlsx",
        "Video.mp4"
    ]

    assert kLargestCategories(testFiles, 3) == [
        "Documents", "Folder", "Media"
    ]

    assert largestFileSize(testFiles) == 20992
