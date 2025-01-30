document.addEventListener('DOMContentLoaded', function() {
    const tabsContainers = document.querySelectorAll('.tabs');

    tabsContainers.forEach(container => {
        const tabNavigation = container.querySelector('.tab__navigation');
        const tabContents = container.querySelectorAll('.tab__content');

        tabNavigation.addEventListener('click', function(event) {
            const clickedTab = event.target.closest('.tab');

            if (!clickedTab) return;

            container.querySelectorAll('.tab').forEach(tab => tab.classList.remove('tab_active'));
            container.querySelectorAll('.tab__content').forEach(content => content.classList.remove('tab__content_active'));

            const index = Array.from(clickedTab.parentElement.children).indexOf(clickedTab);

            clickedTab.classList.add('tab_active');
            tabContents[index].classList.add('tab__content_active');
        });
    });
});