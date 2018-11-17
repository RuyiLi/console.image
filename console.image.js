console.image = (url) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
        const { width, height } = img;
        console.log('%c ', `font-size:0;background-image:url('${url}');padding:${width/2}px ${height/2}px;`);
    }
    img.onerror = console.error;
}