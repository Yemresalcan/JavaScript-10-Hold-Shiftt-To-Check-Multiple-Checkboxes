const boxes = Array.from(document.querySelectorAll('.inbox .item[type="checkbox"]'));
let lastchecked;

function checkBox(e){
    if(e.shiftkey && this != lastchecked){
        checkIntermediateBoxes(lastchecked, this);

    }
    lastchecked = this;
}
boxes.forEach(item => item.addEventListener('click', checkBox));

function checkIntermediateBoxes(first,second){
    if(boxes.indexOf(first)> boxes.indexOf(second)){
        [second,first]= [first,second];
    }
    intermediateBoxes(first, second).forEach(box => box.checked = true);
}

function intermediateBoxes(start, end){
    return boxes.filter((item,key)=> {
        return boxes.indexOf(start) < key && key< boxes.indexOf(end);
    })
}