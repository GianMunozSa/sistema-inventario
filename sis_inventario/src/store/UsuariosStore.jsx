import { create } from "zustand";

export const useUsuarioStore = create((set,get)=>({

    insertarUsuarioAdmin: async(p)=>{
        await supabase.auth.signUp({
            email: p.correo,
            password: p.pass
            });
    }
    f
}))