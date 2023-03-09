

export function getCssVariable( prop: string ){

    const r = document.querySelector(':root') as HTMLElement;
    const rs = getComputedStyle(r);
    return rs.getPropertyValue(prop)

}

export function setCssVariable( prop: string, value: string ){

    const r = document.querySelector(':root') as HTMLElement;
    r.style.setProperty(prop, value);

}