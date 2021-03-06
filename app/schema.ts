export const schemaVersion : string = "http://json-schema.org/draft-06/schema#";

export enum Type {
	TObject = "object",
	TString = "string",
	TArray = "array",
	TNumber = "number",
	TInteger = "integer",
	TBoolean = "boolean"
}

export enum Format {
	Html = "html", Markdown = "markdown", TextArea = "textarea", Double = "double", Int32 = "int32"
}

export type SchemaProperties = { [s: string]: SchemaElement | SchemaElementRef; };
export type SchemaPatternProperties = { [s: string]: SchemaPatternProperty | SchemaElementRef; };

export interface SchemaElementRef {
	$ref: string;
}

export interface SchemaElement {
	type: Type,
	title?: string,
	properties?: SchemaProperties,
	patternProperties?: SchemaPatternProperties,
	description?: string,
	minimum?: number,
	required?: string[],
	items?: SchemaElement,
	format?: Format,
	className?: string // custom extension
}

export interface SchemaPatternProperty extends SchemaElement{
	keyTitle?: string, // custom extension
	valueTitle?: string // custom extension
}

export interface RootSchemaElement extends SchemaElement {
	$schema: string,
	definitions?: SchemaProperties,
}