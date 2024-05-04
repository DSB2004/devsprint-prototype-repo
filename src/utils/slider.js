const SlideTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth"
        });
    }
};


export default SlideTo;