@ECHO off
call npx create-react-app currency-converter
ROBOCOPY ".\src\Components" ".\currency-converter\src\Components" /mir
ROBOCOPY ".\public" ".\currency-converter\public" /mir
ROBOCOPY ".\src" ".\currency-converter\src" /mir
RMDIR "public" /S /Q
RMDIR "src" /S /Q
del ".gitignore"
del "package.json"
del "package-lock.json"
del "README.md"
cd currency-converter
npm start
PAUSE