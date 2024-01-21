table.onclick = function(e) {
    if (e.target.tagName != 'TH') return
    let th = e.target
    sortTable(th.cellIndex, th.dataset.type)
    }

    function sortTable(colNum, type) {
        let tbody = table.querySelector('tbody')
        let rowsArray = Array.from(tbody.rows)
        let compare;
        switch (type) {
            case 'string':
                compare = function (rowA, rowB) {
                    return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1
                }
                break;
            case 'number':
                compare = function (rowA, rowB) {
                    return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML
                }
                break;
        }
        rowsArray.sort(compare);
        tbody.append(...rowsArray)
    }