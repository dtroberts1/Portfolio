export interface Project {
    name: string,
    description: string,
    technologyList: string[],
    viewTypes: ViewType[],
    textColor: string,
    themeColor: string,
    imgPath: string,
    demoAvailable: boolean,
}

export interface ViewType{
    type: string,
    url: string,
    displayName: string,
}
