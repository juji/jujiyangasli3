import { useEffect, useRef } from 'react'

export default function Intersection(){

    const done = useRef(false)

    useEffect(() => {

        if(typeof window === 'undefined') return () => {}
        if(done.current) return () => {}

        done.current = true

        let options = {
            // root: document.getElementById('intersection'),
            rootMargin: "0px",
            threshold: 0.3,
        };
            
        let observer = new IntersectionObserver((entries) => {
            console.log('intersection', entries[0].isIntersecting, entries[0])
        }, options);
    
        const content = document.getElementById('content') as Element
        observer.observe( content );

    
    
    },[ typeof window === 'undefined' ])

    return null

}
