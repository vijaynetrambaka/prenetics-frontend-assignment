import * as React from 'react'
import { IOrganization } from '../../types/ContextTypes'

//const ModelOrganizationContext:React.FC=(){

  // export const  OrganizationContext =React.createContext<IOrganization>({
  //   name: 'Hello World', // set a default value
  //   setName: () => {},
  //   })

  const defaultValue = {};

  const OrganizationContext = React.createContext<IOrganization>({ name: "vijay", setName: name => console.warn('no value provider',name)})  

  export const OrganizationProvider:React.FC<React.ReactNode>= ({children}) => {
    const [name, setName] = React.useState("sdf");

    
    return (
        <OrganizationContext.Provider value={{name,setName}}>
            {children}
        </OrganizationContext.Provider>
    )
}

//   export function OrganizationContext<IOrganization>(defaultValue: IOrganization) {
//   type UpdateType = React.Dispatch<React.SetStateAction<typeof defaultValue>>;
//   const defaultUpdate: UpdateType = () => defaultValue;
  
//   function Provider(props: React.PropsWithChildren<{}>) {
//     const [state, update] = React.useState(defaultValue);
//     return <ctx.Provider value={{ state, update }} {...props} />;
//   }
//   return [ctx, Provider] as const; // alternatively, [typeof ctx, typeof Provider]
// }
export const useOrganizationContext = () => {
  return React.useContext(OrganizationContext);
}

//export default useOrganizationContext;

//export const useOrganizationContext=React.useContext(OrganizationContext);
