# jerry-cli

## Note
  - 透過 fs 來建立資料夾或檔案

    + 讀檔案：
        fs.readFile("檔案名", callback);

    + 寫/建檔案：
        fs.writeFile("檔案名", "內容", callback);

    + 建資料夾：
        fs.mkdir("資料夾名", callback);