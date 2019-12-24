import * as fs from 'fs';

interface IResult {
    (result: boolean) : void;
}

export class FileSys {
    
    static CreateFile(filename: string, onDone: IResult): void{
    
        var fileContent = "Hello World!";
    
        fs.writeFile(filename, fileContent, (err) => {
    
            if (err) {
                onDone(false);
                throw err;
            }
            onDone(true);
        });
    }
}