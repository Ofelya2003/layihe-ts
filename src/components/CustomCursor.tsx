import { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            const { clientX: x, clientY: y } = e;
            
            
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            }
            
            
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            }
        };

        const handleMouseDown = () => cursorRef.current?.classList.add('cursor-clicking');
        const handleMouseUp = () => cursorRef.current?.classList.remove('cursor-clicking');

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <>
            
            <div ref={cursorRef} className="cursor-outline"></div>
           
            <div ref={dotRef} className="cursor-dot"></div>
        </>
    );
};

export default CustomCursor;