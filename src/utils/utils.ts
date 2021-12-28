import { IName } from "../interfaces";

export const getFullName = (name: IName) : string => {
    const { first, last, title } = name;
    return `${title} ${first} ${last}`;
}