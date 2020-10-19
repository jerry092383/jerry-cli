const fs = require('fs');

module.exports = () => ({
    /** 基本模板 */
    make: (sourceFile, fileName, type) => {
        fs.readFile(sourceFile, (error, data) => {
            if (error) throw error;
            fs.writeFile(`${fileName}.${type}`, data.toString(), (err) => {
                if (err) throw err;
            });
        });
    }
});
