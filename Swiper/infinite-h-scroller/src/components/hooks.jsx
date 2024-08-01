import { useEffect, useRef } from 'react';

const useAddAnimation = () => {
    const scrollersRef = useRef(null);

    useEffect(() => {
        const scrollers = scrollersRef.current.querySelectorAll(".scroller");

        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            addAnimation(scrollers);
        }
    }, []);

    const addAnimation = (scrollers) => {
        scrollers.forEach((scroller) => {
            scroller.setAttribute('data-animated', true);

            const scrollerInner = scroller.querySelector('.scroller__inner');
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    };

    return scrollersRef;
};

export default useAddAnimation;

//====================================================================================================================================

// ========== JAVASCRIPT function to animate horizontal infinite ==========

// const scrollers = document.querySelectorAll(".scroller");

// if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
//     addAnimation();
// }

// function addAnimation() {
//     scrollers.forEach((scroller) => {
//         scroller.setAttribute('data-animated', true);

//         const scrollerInner = scroller.querySelector('.scroller__inner');
//         const scrollerContent = Array.from(scrollerInner.children);

//         scrollerContent.foreach((item) => {
//             const duplicatedItem = item.cloneNode(true);
//             duplicatedItem.setAttribute("aria-hidden", true); //this makes sure that DOM does not read the elements twice as you duplicated them
//             scrollerInner.appendChild(duplicatedItem);
//         });
//     })
// }