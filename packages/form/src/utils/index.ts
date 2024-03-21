import { useMemo, useRef } from 'react';

type FieldPath = string | string[];

const createFieldErrorId = (fieldIdentifier?: FieldPath) =>
	fieldIdentifier ? `${[...fieldIdentifier].join('')}-err` : undefined;

function hasObjectChanged<T extends object>(obj1: T, obj2: T): boolean {
	return (
		Object.keys(obj1).length !== Object.keys(obj2).length ||
		Object.keys(obj1).some((k) => {
			const key = k as keyof T;
			return typeof obj1[key] === 'object' && typeof obj2[key] === 'object'
				? hasObjectChanged(obj1[key] as T, obj2[key] as T)
				: obj1[key] !== obj2[key];
		})
	);
}

function useObjectMemo<T extends object>(obj: T) {
	const objRef = useRef(obj);

	return useMemo(() => {
		if (hasObjectChanged(obj, objRef.current)) {
			objRef.current = obj;
		}

		return objRef.current;
	}, [obj]);
}

export { createFieldErrorId, useObjectMemo };
export type { FieldPath };
