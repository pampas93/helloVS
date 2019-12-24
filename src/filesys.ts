import * as fs from 'fs';
import * as path from 'path';

interface IResult {
    (result: boolean) : void;
}

export class FileSys {
    
    static CreateFile(currFile: string, filename: string, onDone: IResult): void {
    
        var fileContent = "Hello World!";

        // Check for file extension. If it's empty, append .cs and if it's 
        // anything other than .cs, return false since we support only c# :D
        var fileExt = path.extname(filename);
        if (fileExt === "") {
            filename += ".cs";
        } else if (fileExt !== ".cs") {
            onDone(false);
            return;
        }
        var currDir = path.dirname(currFile);

        fs.writeFile(path.join(currDir, filename), fileContent, (err) => {
            if (err) {
                onDone(false);
                throw err;
            }
            onDone(true);
        });
    }
}