function showContent(contentId) {
    const contentElements = document.querySelectorAll('.content');
    for (const element of contentElements) {
        element.style.display = 'none';
    }
    document.getElementById(contentId).style.display = 'flex';
}