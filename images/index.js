// add event handler button on triangle calculte 
document.getElementById('first-card').addEventListener('click', function () {
    const firstTriangleElementFiled = document.getElementById('tri-first-filed')
    
    const firstTriangleFiledString = firstTriangleElementFiled.value;
    const firstTriangleFiled = parseFloat(firstTriangleFiledString);

    firstTriangleElementFiled.value = ''


    const secondTriangleElementFiled = document.getElementById('tri-second-filed')
    const secondTriangleFiledString = secondTriangleElementFiled.value;
    const secondTriangleFiled = parseFloat(secondTriangleFiledString);

    const area = 0.5 * firstTriangleFiled * secondTriangleFiled;
    secondTriangleElementFiled.value = '';
    //  validition
    
    display("Triangle",area);

})

// add event handler button on rectangle calculte
document.getElementById('second-card').addEventListener('click', function () {
   const firstRectangleElementFiled = document.getElementById('rec-first-filed')
   const firstRectangleElementFiledString = firstRectangleElementFiled.value
   const firstRectangleFiled = parseFloat(firstRectangleElementFiledString);
   firstRectangleElementFiled.value = '';
   

   const secondRectangleElementFiled = document.getElementById('rec-second-filed')
    const secondRectangleFiledString = secondRectangleElementFiled.value;
    const secondRectangleFiled = parseFloat(secondRectangleFiledString);
    const area = firstRectangleFiled * secondRectangleFiled;
   
    secondRectangleElementFiled.value = '';

    display("Rectangle",area);

})
// add event handler button on parallelogram calculte
document.getElementById('third-card').addEventListener('click', function () {
   const firstParallelogramElementFiled = document.getElementById('para-first-filed')
   const firstParallelogramElementFiledString = firstParallelogramElementFiled.value
   const firstParallelogramFiled = parseFloat(firstParallelogramElementFiledString);
   firstParallelogramElementFiled.value = '';
   

   const secondParallelogramElementFiled = document.getElementById('para-second-filed')
    const secondParallelogramFiledString = secondParallelogramElementFiled.value;
    const secondParallelogramFiled = parseFloat(secondParallelogramFiledString);
    const area = firstParallelogramFiled * secondParallelogramFiled;
   
    secondParallelogramElementFiled.value = '';

    display("Parallelogram ",area);

})
// add event handler button on Rhombus calculte
document.getElementById('forth-card').addEventListener('click', function () {
   const firstRhombusElementFiled = document.getElementById('rho-first-filed')
   const firstRhombusElementFiledString = firstRhombusElementFiled.value
   const firstRhombusFiled = parseFloat(firstRhombusElementFiledString);
   firstRhombusElementFiled.value = '';
   

   const secondRhombusElementFiled = document.getElementById('rho-second-filed')
    const secondRhombusFiledString = secondRhombusElementFiled.value;
    const secondRhombusFiled = parseFloat(secondRhombusFiledString);
    const area = 0.5 * firstRhombusFiled * secondRhombusFiled;
//       clear the input value
    secondRhombusElementFiled.value = '';

    display("Rhombus ",area);

})
// add event handler button on pentagon calculte
document.getElementById('fifth-card').addEventListener('click', function () {
   const firstPentagonElementFiled = document.getElementById('pen-first-filed')
   const firstPentagonElementFiledString = firstPentagonElementFiled.value
   const firstPentagonFiled = parseFloat(firstPentagonElementFiledString);
   firstPentagonElementFiled.value = '';
   

   const secondPentagonElementFiled = document.getElementById('pen-second-filed')
    const secondPentagonFiledString = secondPentagonElementFiled.value;
    const secondPentagonFiled = parseFloat(secondPentagonFiledString);
    const area = 0.5 * firstPentagonFiled * secondPentagonFiled;
   
    secondPentagonElementFiled.value = '';

    display("Petagon",area);

})
// add event handler button on Ellipses calculte
document.getElementById('sixth-card').addEventListener('click', function () {
   const firstEllipseElementFiled = document.getElementById('el-first-filed')
   const firstEllipseElementFiledString = firstEllipseElementFiled.value
   const firstEllipseFiled = parseFloat(firstEllipseElementFiledString);
//    clear the input value
   firstEllipseElementFiled.value = '';
   

   const secondEllipseElementFiled = document.getElementById('el-second-filed')
    const secondEllipseFiledString = secondEllipseElementFiled.value;
    const secondEllipseFiled = parseFloat(secondEllipseFiledString);
    const area = 3.1416 * firstEllipseFiled * secondEllipseFiled;
//    clear the input value
    secondEllipseElementFiled.value = '';
//  two decimal number
    display("Ellipse ",area.toFixed(2));

})


function display(title,area) {
    const areaCalculate = document.getElementById("areaCalculate");

    const li = document.createElement("li");

    li.innerHTML = `${title} ${area} cm&sup2`;
    areaCalculate.appendChild(li);
}

