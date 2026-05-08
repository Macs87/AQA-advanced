function divide(numerator, denominator) {

    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Arguments must be numbers");
    }

    if (denominator === 0) {
        throw new Error("Cannot divide by zero");
    }

    return numerator / denominator;
}


// VALID CASE

try {
    console.log(divide(10, 2));

} catch (error) {
    console.log(error.message);

} finally {
    console.log("Робота завершена");
}


// DIVIDE BY ZERO

try {
    console.log(divide(10, 0));

} catch (error) {
    console.log(error.message);

} finally {
    console.log("Робота завершена");
}


// WRONG TYPE

try {
    console.log(divide(10, "test"));

} catch (error) {
    console.log(error.message);

} finally {
    console.log("Робота завершена");
}