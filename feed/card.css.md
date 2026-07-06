 body {
      background: linear-gradient(135deg, #00c3ff 0%, #ffff1c 100%);
      min-height: 150%;
      font-family: Arial, sans-serif;
      margin: 30px;
      max-width: 1280px;
    }

    .navbar {
      margin: 0;
      top: 0;
      font-size: 1.5em;
    }

    .navbar,
    .footer {
      background: linear-gradient(90deg, #43cea2 0%, #185a9d 100%);
      color: #fff;
      box-shadow: 0 2px 8px rgba(30, 41, 59, 0.18);
      border-radius: 0 0 14px 14px;
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-height: 50px;
      position: fixed;
      max-width: 1280px;

      left: 0;
      right: 0;
      z-index: 10;
    }

    .footer {
      position: fixed;
      bottom: 0;
      font-size: 0.95em;
    }

    .container {
      padding: 80px 16px 60px 16px;
      max-width: 720px;
      margin: 0 auto;
    }

    .menu-btn,
    .logout-btn,
    .open-sidebar-btn {
      background: linear-gradient(90deg, #f7971e 0%, #ffd200 100%);
      color: #232323;
      border: none;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.14);
      padding: 10px 14px;
      font-weight: bold;
      cursor: pointer;
      margin: 4px 4px;
      font-size: .5em;
      transition: background 0.2s, box-shadow 0.2s;
    }

    .menu-btn:hover,
    .logout-btn:hover,
    .open-sidebar-btn:hover {
      background: linear-gradient(90deg, #ffd200 0%, #f7971e 100%);
      box-shadow: 0 4px 12px rgba(60, 60, 60, 0.22);
    }

    .menu-btn.active {
      background: #16a34a;
    }

    .card {
      background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
      border-radius: 16px;
      box-shadow: 0 8px 24px rgba(30, 41, 59, 0.26), 0 1.5px 6px rgba(0, 0, 0, 0.15);
      border: none;
      margin: 16px 0;
      padding: 20px 14px;
      display: flex;
      max-width: 360px;
      flex-direction: column;
      gap: 8px;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .card:hover {
      transform: scale(1.04) translateY(-2px);
      box-shadow: 0 16px 40px rgba(30, 41, 59, 0.32), 0 3px 12px rgba(0, 0, 0, 0.18);
    }

    .card h3 {
      margin: 0 0 8px 0;
      color: #5C6AC4;
    }

    .card a {
      color: #3b82f6;
      text-decoration: underline;
      font-weight: bold;
    }
