interface IValue{
    id:string;
    name:string;
}

export interface IRestult {
    type: string,
    id: string,
    result: string,
    sampleId: string,
    resultType: string,
    activateTime: Date,
    resultTime: Date,
    profile: IValue
}
export interface IResultFromAPI{
    
}
