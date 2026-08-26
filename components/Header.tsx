'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
const links = [['Inicio','#inicio'],['Nosotros','#nosotros'],['Especialidades','#especialidades'],['Equipo','#equipo'],['Colegios','#colegios']];
export default function Header(){
 const [scrolled,setScrolled]=useState(false); const [open,setOpen]=useState(false);
 useEffect(()=>{const fn=()=>setScrolled(scrollY>30); addEventListener('scroll',fn,{passive:true}); return()=>removeEventListener('scroll',fn)},[]);
 return <header className={`header ${scrolled?'scrolled':''}`}><a href="#inicio" className="brand" aria-label="PsicoActiva, inicio"><Image src="/images/logo-oficial.jpg" width={1080} height={1080} alt="Logo oficial de PsicoActiva" priority /></a><button className="menu" onClick={()=>setOpen(!open)} aria-label="Abrir menú" aria-expanded={open}><i/><i/></button><nav className={open?'open':''}>{links.map(([n,h])=><a onClick={()=>setOpen(false)} key={n} href={h}>{n}</a>)}<a href="#contacto" className="button button-small">Agendar atención</a></nav></header>
}
