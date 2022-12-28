type Dimensions = {
    width: number;
    height: number;
};
type UseDimensionsProps = {
    defaults?: Partial<Dimensions>;
};
export declare function useDimensions<T extends HTMLElement>({ defaults }?: UseDimensionsProps): {
    ref: (nextNode: T | null) => void;
    dimensions: Dimensions;
};
export type { Dimensions, UseDimensionsProps };
//# sourceMappingURL=utils.d.ts.map