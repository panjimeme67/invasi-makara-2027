import { alumni } from "@/data/alumni";
import { fakultas } from "@/data/fakultas";
import type { JalurSeleksi } from "@/data/types";
export const jalurSeleksi: JalurSeleksi[] = ["SNBP","SNBT","SIMAK","TS","PPKB"];
export function statistikFakultas(){return fakultas.map(f=>{const anggota=alumni.filter(a=>a.fakultasSlug===f.slug);return {slug:f.slug,nama:f.nama,total:anggota.length,jalur:jalurSeleksi.map(name=>({name,value:anggota.filter(a=>a.jalurSeleksi===name).length}))};});}