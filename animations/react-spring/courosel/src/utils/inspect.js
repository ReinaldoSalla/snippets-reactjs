const processPrimitive = ({ varName, varValue }) => {
    console.log(`\n${"*".repeat(100)}`);
    console.log(`variable "${varName}" is a primitive of type ${typeof varValue}`);
    console.log(varValue);
};
const processNonPrimitive = ({ varName, varValue }, type) => {
    console.log(`\n${"*".repeat(100)}`);
    console.log(`variable "${varName}" is an ${type}`);
    console.log(varValue);
};
const inspect = (obj) => {
    console.log("\n".repeat(5));
    Object.entries(obj).forEach(([varName, varValue]) => {
        if (Array.isArray(varValue)) {
            processNonPrimitive({ varName, varValue }, "array");
        }
        else if (typeof varValue === "object") {
            processNonPrimitive({ varName, varValue }, "object");
        }
        else {
            processPrimitive({ varName, varValue });
        }
    });
    console.log("\n".repeat(5));
};

export default inspect;
