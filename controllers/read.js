const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const readExcel = (req,res)=>{
    const fileDir = path.join(__dirname,'../files/test.xlsx')
    const buf = fs.readFileSync(fileDir);
    const workBook = XLSX.read(buf,{type:'buffer'});
    const [firstSheetName] = workBook.SheetNames;
    const workSheet = workBook.Sheets[firstSheetName];
    const rows = XLSX.utils.sheet_to_json(workSheet, {
        raw: true, // Use raw values (true) or formatted strings (false)
        header: 1, // Generate an array of arrays ("2D Array")
    });
    rows.shift()

    // console.table(workbook);
    if (workBook){
        console.log(rows);
        return res.status(200).json({data: rows})
    }
    res.status(500).json({msj:"Error"})
    
}

module.exports = readExcel;