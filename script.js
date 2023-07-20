const profileMenuElement = document.querySelector('.js-profile-menu');
const sidebarActivityElement = document.querySelector(
        '.js-sidebar-activity'
      );
const showMoreElement = document.querySelector('.js-show-more');

      function toggleMenu() {
        profileMenuElement.classList.toggle('open-menu');
      }

      function toggleActivity() {
        sidebarActivityElement.classList.toggle('open-activity');

        if (sidebarActivityElement.classList.contains('open-activity')) {
          showMoreElement.innerHTML = 'Show Less -';
        } else {
          showMoreElement.innerHTML = 'Show More +';
        }
      }