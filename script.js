// Data for dynamic content
const contentData = {
  ownerMessages: [
    {
      author: "Oliver (Owner)",
      content: "Hey everyone! First of all, thank you for being here, whether you are one of our member or an outsider.\n\nThis server was created with two core goals in mind:\n→ Community: A chill relaxing place people can hang around\n→ Service: Providing service for those who wants to grow their server.\n\nA few small, but important reminders:\n— .✦ Be kind and respectful\n— .✦ Respect the rules—they're here to protect everyone.\n\nThis is not my server, it is Ours! Lets make this server a better place! ^^\n\nWith appreciation,\n-- Oliver"
    }
  ],
  services: [
    {
      name: "Advertising",
      category: "Server Development",
      description: "Get your server advertised to our community"
    },
    {
      name: "Partnering",
      category: "Server Development",
      description: "Partner with our growing network"
    },
    {
      name: "Feedback",
      category: "Server Development",
      description: "Get valuable feedback from our experts"
    },
    {
      name: "Custom Banner Design",
      category: "Designing Services",
      description: "Professional custom banner for your server"
    },
    {
      name: "Custom Icon Design",
      category: "Designing Services",
      description: "Eye-catching custom server icon"
    },
    {
      name: "Custom Advertisement",
      category: "Designing Services",
      description: "Unique advertisement design"
    },
    {
      name: "Basic Channel/Roles Setup",
      category: "Server Setup",
      description: "Professional channel and role organization"
    },
    {
      name: "Bots Setup",
      category: "Server Setup",
      description: "Configure and install bots for your server"
    },
    {
      name: "Extra Setup",
      category: "Server Setup",
      description: "Additional customization and configuration"
    }
  ],
  servers: [
    {
      name: "Star Gazing",
      description: "Our main community and service server",
      link: "https://discord.gg/6pRmyX9h2T"
    }
  ]
};

// Load owner messages
function loadOwnerMessages() {
  const container = document.getElementById('messagesContainer');
  if (!container) return;

  container.innerHTML = contentData.ownerMessages.map(msg => `
    <div class="message-card">
      <div class="message-author">💬 ${msg.author}</div>
      <div class="message-content">${msg.content.split('\\n').join('<br>')}</div>
    </div>
  `).join('');
}

// Load services
function loadServices() {
  const container = document.getElementById('servicesContainer');
  if (!container) return;

  const servicesHTML = contentData.services.map(service => `
    <div class="service-card">
      <h3>${service.name}</h3>
      <p style="color: var(--accent-gold); font-size: 0.9rem; margin-bottom: 0.5rem;">${service.category}</p>
      <p>${service.description}</p>
    </div>
  `).join('');

  container.innerHTML = servicesHTML;
}

// Load other servers
function loadServers() {
  const container = document.getElementById('serversContainer');
  if (!container) return;

  container.innerHTML = contentData.servers.map(server => `
    <div class="server-card">
      <h3>${server.name}</h3>
      <p>${server.description}</p>
      <a href="${server.link}" target="_blank">Join Server</a>
    </div>
  `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  loadOwnerMessages();
  loadServices();
  loadServers();

  // Add smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
    }
  });
}, observerOptions);

const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);
