    
    // Actualiza la hora

    
    function showTime() {
      document.getElementById('currentTime').textContent = new Date().toLocaleTimeString();
    }
    setInterval(showTime, 1000); showTime();

    // Sidebar
    function openSidebar() {
      document.getElementById('sidebar').classList.add('active');
      document.getElementById('sidebarOverlay').classList.add('active');
    }
    function closeSidebar() {
      document.getElementById('sidebar').classList.remove('active');
      document.getElementById('sidebarOverlay').classList.remove('active');
    }

    // Buscador básico
    function searchContent() {
      var input = document.getElementById('searchInput').value.toLowerCase();
      var cards = document.querySelectorAll('.card');
      cards.forEach(function (card) {
        card.style.display = card.textContent.toLowerCase().includes(input) ? '' : 'none';
      });
    }
