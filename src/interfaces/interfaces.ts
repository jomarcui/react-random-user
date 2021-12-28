import React from "react";

export interface IName {
    first: string,
    last: string,
    title: string
}

export interface IPerson {
    email: string,
    name: IName
}

export interface ITableColumn {
    isRightAligned?: boolean
}