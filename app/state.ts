import {
	Format, RootSchemaElement, SchemaElement, SchemaElementRef, SchemaPatternProperty, SchemaProperties, schemaVersion,
	Type
} from "./schema";
import { RouterState } from 'react-router-redux';

export interface Error {
	title: string;
	message: string;
	status?: string;
}

export interface State {
	requestSchema: RootSchemaElement;
	responseSchema: RootSchemaElement;
	result: object | null;
	error: Error | null;
	router: RouterState;
}

