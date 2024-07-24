

function addRc(rows,col){

    const tb=document.createElement("table");
    tb.setAttribute("id","table1");
    const tb2=document.createElement("table");
    tb2.setAttribute("id","table2");
    document.getElementById("child1").appendChild(tb).setAttribute("class","table");
    document.getElementById("child2").appendChild(tb2).setAttribute("class","table");
     
    for(let i=0;i<rows;i++){
        const tr=document.createElement("tr");
       
        document.getElementById("table1").appendChild(tr).setAttribute("class","td");
        for(let y=0;y<col;y++){
            const td=document.createElement("td");
            
            tr.appendChild(td).setAttribute("class","td");
            const input=document.createElement("input");
            input.setAttribute("type","number");
            input.setAttribute("id",`y-${i}${y}`);
            td.appendChild(input).setAttribute("class","inp");
    }
    }

    for(let i=0;i<rows;i++){
        const tr2=document.createElement("tr");
       
        document.getElementById("table2").appendChild(tr2).setAttribute("class","td");
        for(let y=0;y<col;y++){
            const td2=document.createElement("td");
           
            tr2.appendChild(td2).setAttribute("class","td");
            const input2=document.createElement("input");
            input2.setAttribute("id",`x-${i}${y}`);
            input2.setAttribute("type","number");
            td2.appendChild(input2).setAttribute("class","inp");
        }
    }
}
function addB(rows,col){
    const add=document.createElement("button");
    add.setAttribute("id","add-button");  
    add.textContent="ADD";
    const dd = document.createElement("div");
    dd.setAttribute("id","button-div");
     dd.appendChild(add).setAttribute("class","button-add");

    const bb=document.getElementById("input-matrix");
    bb.appendChild(dd);
    add.onclick= function(){addMatrix(rows,col)};
}

function addMatrix(rows,col){
    const ip5 = document.getElementById("output-matrix");
    ip5.innerHTML='';
    const opmatrix=document.getElementById("output-matrix");
    

    const opchild=document.createElement("div");
    opchild.setAttribute("id","opchild");
    opmatrix.appendChild(opchild).setAttribute("class","matrix-div");
    const tb3=document.createElement("table");
    tb3.setAttribute("id","table3");
    document.getElementById("opchild").appendChild(tb3).setAttribute("class","optable");
    for(let i=0;i<rows;i++){
        const tr3=document.createElement("tr");
      
        document.getElementById("table3").appendChild(tr3).setAttribute("class","opclass");
        for(let y=0;y<col;y++){
            const td3=document.createElement("td");
            td3.setAttribute("id",`z-${i}${y}`);
           
            let num1=(document.getElementById(`y-${i}${y}`).value);
            if(num1==''){num1=0;}
           
            let num2=(document.getElementById(`x-${i}${y}`).value);
            if(num2==''){num2=0;}
        
            td3.textContent= parseInt(num1)+parseInt(num2);
            tr3.appendChild(td3).setAttribute("class","opclass");
        }
    } 
}

function submitFunction(){
    
    const reqRowId=document.getElementById("rows");
    const reqColId=document.getElementById("column");
    const rows= reqRowId.value ;
    const col=reqColId.value;
    if(rows==''){alert("Enter valid row");} else{
    if(col==''){alert("Enter valid column");} else{
    if((rows>10) || (col>10) ){alert("Enter valid values");} else{
    if((rows<=0) || (col<=0) ){alert("Enter valid values");}
    else{
    const ip = document.getElementById("matrix-1");
    ip.innerHTML='';
    const ip2 = document.getElementById("matrix-2");
    ip2.innerHTML='';
    const ip3 = document.getElementById("add-button");
      if(ip3){
        ip3.parentNode.removeChild(ip3);}
    const ip4 = document.getElementById("output-matrix");
    ip4.innerHTML='';
    const reqMatrix1=document.getElementById("matrix-1");
    const reqMatrix2=document.getElementById("matrix-2");
    
    
    const newDiv= document.createElement("div");
    newDiv.setAttribute("id","child1");
    const newDiv2= document.createElement("div");
    newDiv2.setAttribute("id","child2");
    reqMatrix1.appendChild(newDiv).setAttribute("class","matrix-div");
    reqMatrix2.appendChild(newDiv2).setAttribute("class","matrix-div");
   
    addRc(rows,col);
    addB(rows,col);

   

}}}

}}
