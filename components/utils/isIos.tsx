export default function isIOS(){
    let platform = navigator?.userAgent || navigator?.platform || 'unknown'
    return /iPhone|iPod|iPad/.test(platform)
}