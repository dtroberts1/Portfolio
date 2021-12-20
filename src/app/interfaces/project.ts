export interface Project {
    name: string,
    technologyList: string[],
    viewTypes: ViewType[],
    textColor: string,
    imgPath: string,
}

export interface ViewType{
    type: string,
    url: string,
    displayName: string,
}