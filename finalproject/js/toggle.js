const gridView = document.querySelector('.grid-icon');
const listView = document.querySelector('.list-icon');
const wrapper = document.querySelector('.directory-cards-wrapper');
const cardWrapper = document.querySelector('.directory-card')
const headEl = document.querySelector('head');

const gridViewToggle = (e) => {
    if (wrapper.classList[1] != 'grid-directory') {
        if (wrapper.classList[1] == 'list-directory'){
            document.querySelector('#toggle-id').remove()
        }
        wrapper.classList.remove(wrapper.classList[1]);
        wrapper.classList.add('grid-directory');
    }
}

const listViewToggle = (e) => {
    if (wrapper.classList[1] != 'list-directory') {
        wrapper.classList.remove(wrapper.classList[1]);
        wrapper.classList.add('list-directory');
        const linkEl = document.createElement('link');
        linkEl.setAttribute('rel', 'stylesheet');
        linkEl.setAttribute('href', 'css/toggle.css')
        linkEl.setAttribute('id', 'toggle-id')
        headEl.append(linkEl)
    }
}



gridView.addEventListener('click', gridViewToggle);
listView.addEventListener('click', listViewToggle);
