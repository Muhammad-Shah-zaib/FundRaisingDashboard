export function startSpinner( id: string){
    document.getElementById(id)?.classList.remove('hidden');
}

export function stopSpinner( id: string){
    document.getElementById(id)?.classList.add('hidden');
}