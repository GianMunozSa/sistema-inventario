import {create} from "zustand";
export const useAuthStore=create((set,get)=>({
    signInWithEmail: async(p)=>{
        const { data, error } = await supabase.auth.signInWithPassword({
            email: p.correo,
            password: p.pass,
        })
        if(error){
            return null;
        }
    },
    SignOut: async()=>{
        const { error } = await supabase.auth.signOut()

        if(error)
            throw new Error("A ocurrido un error al cerrar" + error)
    }


}))

