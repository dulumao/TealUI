/**
    title = title || document.title;
        sidebar.addPanel(title, url, '');
    } else if (window.external && external.addFavorite) {
        external.addFavorite(url, title);
    } else {
        return false;
    }
}