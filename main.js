window.addEventListener('load', tableGenerator);

function tableGenerator() {
    let tableDisplay = document.querySelector('.table__display');  
    
    const table = document.createElement ("table");

    function createRow() {
        let rowInput = +document.getElementById('row').value;
        let widthInput = document.getElementById('table-width').value;
        let bdwidthInput = document.getElementById('border-width').value;
        let bdcolorInput = document.getElementById('border-color').value;
        let headBgColor = document.getElementById('head-color').value;
        let evenBgColor = document.getElementById('bg-color').value;
        let oddBgColor = document.getElementById('body-color').value;
               
            table.style.width = widthInput + '%';
            table.style.border = bdwidthInput + 'px' + ' solid ' + bdcolorInput;
              
            
        for (let i = 0; i < rowInput + 1; i++) {
            let tr = document.createElement('tr');
            table.append(tr);
            tableDisplay.append(table);
            tr.style.border = bdwidthInput + 'px' + ' solid ' + bdcolorInput;
        
            if (i == 0) {
                tr.style.backgroundColor = headBgColor;
            } else if (i % 2 == 0) {
                tr.style.backgroundColor = evenBgColor;
            } else {
                tr.style.backgroundColor = oddBgColor;
            }

        }

    }

    function createColumn() {
        let row = document.getElementsByTagName('tr');
        let columnInput = +document.getElementById('column').value;
        let bdwidthInput = document.getElementById('border-width').value;
        let bdcolorInput = document.getElementById('border-color').value;

        for (let j = 1; j < columnInput + 1; j++) {
            let th = document.createElement('th');
            row[0].append(th);
            th.style.border = bdwidthInput + 'px' + ' solid ' + bdcolorInput;
            th.textContent = 'Head ' + j;
            }

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

    let codeButton = document.getElementById('getcode');
        codeButton.addEventListener('click',getCode);

    function getCode() {
        
            let textArea = document.createElement("textarea");
            let HTMLcode = document.documentElement.innerHTML;
            textArea.value = HTMLcode;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("Copy");
            textArea.remove();
        
    }
    

    let colapseInput = document.getElementById('border-colapse');
        colapseInput.addEventListener('change', checkColapse);
    function checkColapse() {
        if (colapseInput.checked === true) {
            table.style.borderCollapse = 'collapse';
        } else if (colapseInput.checked === false) {
            table.style.borderCollapse = 'separate';
        }
            
    }

    let fontSelect = document.getElementById('font-style');
        fontSelect.addEventListener('change', setFontStyle);
    function setFontStyle() {
        table.style.fontFamily = fontSelect.options[fontSelect.selectedIndex].text;
    }

    let weightSelect = document.getElementById('font-weight');
        weightSelect.addEventListener('change', setFontWeight);
    function setFontWeight() {
        table.style.fontWeight = weightSelect.options[weightSelect.selectedIndex].text;
    }

    let alignSelect = document.getElementById('text-align');
        alignSelect.addEventListener('change', setAlign);
    function setAlign() {
        table.style.textAlign = alignSelect.options[alignSelect.selectedIndex].text;
    }

    let tbfontSize = document.getElementById('font-size');
        tbfontSize.addEventListener('change', setFontSize);
    function setFontSize() {
        table.style.fontSize = tbfontSize.value + 'px';
    }

    let tbfontColor = document.getElementById('font-color');
        tbfontColor.addEventListener('change', setFontColor);
    function setFontColor() {
        table.style.color = tbfontColor.value;
    }

}




    
