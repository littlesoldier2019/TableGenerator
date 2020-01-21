window.addEventListener('load', tableGenerator);

function tableGenerator() {
    let tableDisplay = document.querySelector('.table__display');
    let widthInput = document.getElementById('table-width').value;
    let bdwidthInput = document.getElementById('border-width').value;
    let bdcolorInput = document.getElementById('border-color').value;
    const table = document.createElement ("table");
    
 
    function createHead(row, columnInput) {
        for (let j = 0; j < columnInput; j++) {
        let th = document.createElement('th');
        row[0].append(th);
        th.style.border = bdwidthInput + 'px' + ' solid ' + bdcolorInput;
        // th.style.width = widthInput + 'px';
        th.textContent = 'Head ' + j;
        }
    }

    function createRow() {
        let rowInput = +document.getElementById('row').value;
        for (let i = 0; i < rowInput + 1; i++) {
            let tr = document.createElement('tr');
            table.append(tr);
            tableDisplay.append(table);
            table.style.width = widthInput + '%';
            tr.style.border = bdwidthInput + 'px' + ' solid ' + bdcolorInput;
        }
    }

    function createColumn() {
        let row = document.getElementsByTagName('tr');
        let columnInput = document.getElementById('column').value;
        createHead(row, columnInput);
        for (let i = 1; i < row.length; i++) {
            for (let j = 0; j < columnInput; j++) {
                let td = document.createElement('td');
                td.textContent = 'value';
                td.style.border = bdwidthInput + 'px' + ' solid ' + bdcolorInput;
                row[i].append(td);
            }
        }
    }

    let generateButton = document.getElementById('generate');
    generateButton.addEventListener('click', generateTable);

    function generateTable() {
        if (table.textContent != '') {
            table.textContent = '';
            createRow();
            createColumn();
        } else {
            createRow();
            createColumn();
        } 
    }
}

    
    
