function redirectToLink(link) {
    if (!link.startsWith('http://') && !link.startsWith('https://')) {
        link = 'http://' + link;
    }
window.location.href = link;
}
