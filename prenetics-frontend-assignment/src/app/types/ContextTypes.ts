export interface IOrganization{
    name:string
    id?:number
    setName:(state: string) => void
}