type TPrimitive = boolean | null | undefined | symbol | number | string

interface Primitive {
	varName: string,
	varValue: TPrimitive
}

interface NonPrimitive {
  varName: string,
  varValue: Array<TPrimitive> | object
}

interface UnknownObject {
  [key: string]: any
}

export type {
  Primitive,
  NonPrimitive,
  UnknownObject
}