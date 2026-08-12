// =========================================================
// CHAITU PORTFOLIO
// COMPLETE JAVASCRIPT
// =========================================================


// =========================================================
// ELEMENTS
// =========================================================

const pageLoader =
    document.getElementById("pageLoader");

const navbar =
    document.querySelector(".navbar");

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const navLinks =
    document.querySelectorAll(".nav-links a");

const mobileNavLinks =
    document.querySelectorAll(
        ".mobile-nav-links a"
    );

const allSections =
    document.querySelectorAll(
        "section[id]"
    );

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


// =========================================================
// PAGE LOADER
// =========================================================

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                if (pageLoader) {

                    pageLoader.classList.add(
                        "hidden"
                    );

                }

            },
            400
        );

    }
);


// Safety fallback
setTimeout(
    () => {

        if (
            pageLoader &&
            !pageLoader.classList.contains(
                "hidden"
            )
        ) {

            pageLoader.classList.add(
                "hidden"
            );

        }

    },
    3000
);


// =========================================================
// NAVBAR SCROLL EFFECT
// =========================================================

function handleNavbarScroll() {

    if (!navbar) {
        return;
    }

    if (
        window.scrollY > 40
    ) {

        navbar.classList.add(
            "scrolled"
        );

    } else {

        navbar.classList.remove(
            "scrolled"
        );

    }

}

window.addEventListener(
    "scroll",
    handleNavbarScroll
);

handleNavbarScroll();


// =========================================================
// MOBILE MENU
// =========================================================

function openMobileMenu() {

    if (
        !mobileMenu ||
        !menuButton
    ) {
        return;
    }

    mobileMenu.classList.add(
        "active"
    );

    menuButton.classList.add(
        "active"
    );

    menuButton.setAttribute(
        "aria-expanded",
        "true"
    );

    document.body.classList.add(
        "menu-open"
    );
}


function closeMobileMenu() {

    if (
        !mobileMenu ||
        !menuButton
    ) {
        return;
    }

    mobileMenu.classList.remove(
        "active"
    );

    menuButton.classList.remove(
        "active"
    );

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    document.body.classList.remove(
        "menu-open"
    );
}


function toggleMobileMenu() {

    if (!mobileMenu) {
        return;
    }

    const isOpen =
        mobileMenu.classList.contains(
            "active"
        );

    if (isOpen) {

        closeMobileMenu();

    } else {

        openMobileMenu();

    }
}


if (menuButton) {

    menuButton.addEventListener(
        "click",
        toggleMobileMenu
    );

}


// =========================================================
// MOBILE MENU LINKS
// =========================================================

mobileNavLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            () => {

                closeMobileMenu();

            }
        );

    }
);


// =========================================================
// ESCAPE KEY
// =========================================================

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            mobileMenu &&
            mobileMenu.classList.contains(
                "active"
            )
        ) {

            closeMobileMenu();

        }

    }
);


// =========================================================
// CLOSE MOBILE MENU ON RESIZE
// =========================================================

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 900
        ) {

            closeMobileMenu();

        }

    }
);


// =========================================================
// SCROLL REVEAL
// =========================================================

if (
    "IntersectionObserver" in window
) {

    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        (element) => {

            element.classList.add(
                "visible"
            );

        }
    );

}


// =========================================================
// ACTIVE NAVIGATION
// =========================================================

function setActiveNavigation(
    sectionId
) {

    navLinks.forEach(
        (link) => {

            link.classList.remove(
                "active"
            );

        }
    );


    mobileNavLinks.forEach(
        (link) => {

            link.classList.remove(
                "active"
            );

        }
    );


    const desktopActiveLink =
        document.querySelector(
            `.nav-links a[href="#${sectionId}"]`
        );


    const mobileActiveLink =
        document.querySelector(
            `.mobile-nav-links a[href="#${sectionId}"]`
        );


    if (desktopActiveLink) {

        desktopActiveLink.classList.add(
            "active"
        );

    }


    if (mobileActiveLink) {

        mobileActiveLink.classList.add(
            "active"
        );

    }
}


function updateActiveNavigation() {

    const scrollPosition =
        window.scrollY + 220;


    allSections.forEach(
        (section) => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            const sectionId =
                section.getAttribute(
                    "id"
                );


            if (
                scrollPosition >=
                    sectionTop &&

                scrollPosition <
                    sectionTop +
                    sectionHeight
            ) {

                setActiveNavigation(
                    sectionId
                );

            }

        }
    );
}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


// =========================================================
// DESKTOP NAVIGATION CLICK
// =========================================================

navLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            () => {

                navLinks.forEach(
                    (navLink) => {

                        navLink.classList.remove(
                            "active"
                        );

                    }
                );

                link.classList.add(
                    "active"
                );

            }
        );

    }
);