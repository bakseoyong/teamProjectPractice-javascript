function readExcel() {
    let input = event.target;
    let reader = new FileReader();
    var index = 1;
    reader.onload = function () {
        let data = reader.result;
        let workBook = XLSX.read(data, { type: 'binary' });
        workBook.SheetNames.forEach(function (sheetName) {
            console.log('SheetName: ' + sheetName);
            let rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
            console.log(JSON.stringify(rows));
            console.log(rows[index]['출발역']);
        })
    };
    reader.readAsBinaryString(input.files[0]);
}

function input_interface_button_click() {
    alert("css 건드려야됨. 공부하기");
}