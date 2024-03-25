dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

resize(document.getElementById('plant1'));
resize(document.getElementById('plant2'));
resize(document.getElementById('plant3'));
resize(document.getElementById('plant4'));
resize(document.getElementById('plant5'));
resize(document.getElementById('plant6'));
resize(document.getElementById('plant7'));
resize(document.getElementById('plant8'));
resize(document.getElementById('plant9'));
resize(document.getElementById('plant10'));
resize(document.getElementById('plant11'));
resize(document.getElementById('plant12'));
resize(document.getElementById('plant13'));
resize(document.getElementById('plant14'));

function dragElement(terrariumElement){
    let pos1=0, pos2=0, pos3=0, pos4=0;
    terrariumElement.onpointerdown = pointerDrag;
    function pointerDrag(e)
    {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }
    function elementDrag(e)
    {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }
    function stopElementDrag()
    {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

function resize(terrariumElement)
{
    terrariumElement.ondblclick = resizing;
    function resizing(e)
    {
        e.preventDefault(e);
        console.log(e);
        if(terrariumElement.style.maxHeight === "150%")
        {
            terrariumElement.style.maxWidth = 200+"%";
            terrariumElement.style.maxHeight = 200+"%";
        }
        else
        {
            terrariumElement.style.maxWidth = 150+"%";
        terrariumElement.style.maxHeight = 150+"%";
        }
        

    }
}