export const reverseString = (str: string): string => {
    return str.split("").reverse().join("");
};

export const countCharacters = (str: string): number => {
    return str.length;
};

export const upperCaseString = (str: string): string => {
    return str.toUpperCase();
};

export const noSpace = (str: string): number => {
    return str.replace(/ /g, "").length;
};
