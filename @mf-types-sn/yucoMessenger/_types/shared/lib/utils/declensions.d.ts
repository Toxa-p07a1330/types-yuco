type DeclensedFormArgs = {
    amount: number;
    singleForm: string;
    severalForm: string;
    multipleForm?: string;
};
export declare const getDeclensedForm: ({ amount, singleForm, severalForm, multipleForm, }: DeclensedFormArgs) => string;
export {};
