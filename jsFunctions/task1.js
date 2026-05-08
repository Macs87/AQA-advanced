// Function Declaration

function getRectangleArea(width, height) {
    return width * height;
}

console.log(getRectangleArea(5, 10));


// Function Expression

const getRectangleAreaExpression = function(width, height) {
    return width * height;
};

console.log(getRectangleAreaExpression(7, 3));


// Arrow Function

const getRectangleAreaArrow = (width, height) => {
    return width * height;
};

console.log(getRectangleAreaArrow(4, 6));