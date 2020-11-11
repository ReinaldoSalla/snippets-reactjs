import {
  Primitive,
  NonPrimitive,
  UnknownObject
} from './inspect.types';

const convertVarNameDot = (varName: string) => {
  let replaced = varName.replace("Dot", ".");
  const indexToLowercasify = replaced.indexOf(".") + 1;
  replaced = replaced.replace(
    replaced.charAt(indexToLowercasify),
    replaced.charAt(indexToLowercasify).toLowerCase()
  );
  return replaced;
};

const convertVarNameIndex = (varName: string) => {
  for (let i = 0; i < 100; i++) {
    if (varName.includes(`Index${i}`)) {
      varName = varName.replace(`Index${i}`, `[${i}]`);
    }
  }
  return varName;
};

const processPrimitive = ({ varName, varValue }: Primitive): void => {
	console.log(`\n${"*".repeat(100)}`);
	console.log(
		`variable "${varName}" is a primitive of type ${typeof varValue}`
	);
	console.log(varValue);
};

const processNonPrimitive = (
  { varName, varValue }: NonPrimitive,
  type: string
): void => {
  console.log(`\n${"*".repeat(100)}`);
  console.log(`variable "${varName}" is an ${type}`);
  console.log(varValue);
};

const inspect = (
  obj: object, 
  convertDot: boolean = true,
  convertIndex: boolean = true
): void => {
	console.log("\n".repeat(5));
	Object.entries(obj).forEach(([varName, varValue]) => {
    if (varName.includes("Dot") && convertDot) 
      varName = convertVarNameDot(varName);
    if (varName.includes("Index") && convertIndex)
      varName = convertVarNameIndex(varName);
		if (Array.isArray(varValue)) {
      processNonPrimitive({ varName, varValue }, "array");
		} else if (typeof varValue === "object") {
			processNonPrimitive({ varName, varValue }, "object");
		} else {
			processPrimitive({ varName, varValue });
		}
	});
	console.log("\n".repeat(5));
};

const addZeros = (number: number): string => {
  if (number < 10) return `00${number}`;
  else if (number < 100) return `0${number}`;
  else return `${number}`;
}

const inspectError = (err: UnknownObject): void => {
  console.log('\n'.repeat(5));
  console.error(`Error name: ${err.name}`);
  console.error(`Error message: ${err.message}`);
  console.error(`Stack trace:`);
  const regex = /\(([^)]+)\)/g
  const stacks = [...err.stack.matchAll(regex)];
  const stackMsgs = stacks.map(item => item[0]);
  stackMsgs.forEach((item, index) => 
    console.error(`File n° ${addZeros(index + 1)}: ${item}`)
  );
  console.log('\n'.repeat(5));
}

export { inspect, inspectError };