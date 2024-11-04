export function buscarEntidadEnLocalStorage(entidad){
    if(localStorage.getItem(entidad) == null){
        localStorage.setItem(entidad, [])
        return [];
    }else if(localStorage.getItem(entidad) == []){
        return [];

    }else return JSON.parse(localStorage.getItem(entidad));
}

export function buscarEntidadEnSessionStorage(entidad){
    if(sessionStorage.getItem(entidad) == null){
        sessionStorage.setItem(entidad, [])
        return [];
    }else if(sessionStorage.getItem(entidad) == []){
        return [];

    }else return JSON.parse(sessionStorage.getItem(entidad));

}

