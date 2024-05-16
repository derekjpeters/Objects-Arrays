document.getElementById('mainAxis').addEventListener('click', function() {
    const container = document.getElementById('flexContainer');
    console.log('Current justify-content:', container.style.justifyContent);
    if (container.style.justifyContent === 'center' || container.style.justifyContent === '') {
        container.style.justifyContent = 'space-between'; // Distributes items with space between them
    } else {
        container.style.justifyContent = 'center'; // Centers all items along the main axis
    }
    console.log('Updated justify-content:', container.style.justifyContent);
});

document.getElementById('crossAxis').addEventListener('click', function() {
    const container = document.getElementById('flexContainer');
    console.log('Current align-items:', container.style.alignItems);
    if (container.style.alignItems === 'center' || container.style.alignItems === '') {
        container.style.alignItems = 'stretch'; // Stretches items to fill the container's cross axis
    } else {
        container.style.alignItems = 'center'; // Centers all items along the cross axis
    }
    console.log('Updated align-items:', container.style.alignItems);
});

document.getElementById('flexDirection').addEventListener('click', function() {
    const container = document.getElementById('flexContainer');
    console.log('Current flex-direction:', container.style.flexDirection);
    if (container.style.flexDirection === 'row' || container.style.flexDirection === '') {
        container.style.flexDirection = 'column'; // Arranges items in a column
    } else {
        container.style.flexDirection = 'row'; // Arranges items in a row
    }
    console.log('Updated flex-direction:', container.style.flexDirection);
});

document.getElementById('flexWrap').addEventListener('click', function() {
    const container = document.getElementById('flexContainer');
    console.log('Current flex-wrap:', container.style.flexWrap);
    if (container.style.flexWrap === 'nowrap' || container.style.flexWrap === '') {
        container.style.flexWrap = 'wrap'; // Allows items to wrap onto multiple lines
    } else {
        container.style.flexWrap = 'nowrap'; // Keeps items on a single line, no wrapping
    }
    console.log('Updated flex-wrap:', container.style.flexWrap);
});

document.getElementById('itemSize').addEventListener('click', function() {
    const items = document.getElementsByClassName('flex-item');
    for (let item of items) {
        console.log('Current flex:', item.style.flex);
        if (item.style.flex === '1' || item.style.flex === '') {
            item.style.flex = '2'; // Makes the item take up twice the space
        } else {
            item.style.flex = '1'; // Makes the item take up its default space
        }
        console.log('Updated flex:', item.style.flex);
    }
});
