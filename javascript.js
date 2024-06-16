document.getElementById('filter-button').addEventListener('click', function() {
    var filter = document.getElementById('filter-input').value.toLowerCase();
    var list = document.getElementById('project-list');
    var items = list.getElementsByTagName('li');

    Array.from(items).forEach(function(item) {
        var text = item.textContent.toLowerCase();
        if (text.includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

