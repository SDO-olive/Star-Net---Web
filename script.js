// Data for dynamic content
const contentData = {
  ownerMessages: [
    {
      author: "Oliver (Owner)",
      content: "Hey everyone! First of all, thank you for being here, whether you are one of our member or an outsider.\n\nThis server was created with two core goals in mind:\n→ Community: A chill relaxing place people can hang around\n→ Service: Providing service for those who wants to grow their server.\n\nA few small, but important reminders:\n— .✦ Be kind and respectful\n— .✦ Respect the rules—they're here to protect everyone.\n\nThis is not my server, it is Ours! Lets make this server a better place! ^^\n\nWith appreciation,\n-- Oliver"
    }
  ],
  serviceCategories: [
    {
      name: "Server Development Services",
      icon: "🚀",
      services: [
        {
          name: "Project Advertising",
          description: "We will send your advertisement in other servers."
        },
        {
          name: "Project Partnering",
          description: "We will help you partner with other servers."
        },
        {
          name: "Serv/Ad Feedback",
          description: "We will send feedbacks on how to improve your server/Advertisement."
        },
        {
          name: "Server Chatter",
          description: "We will send someone to chat in our server for the amount you bought."
        }
      ]
    },
    {
      name: "Project Design Services",
      icon: "🎨",
      services: [
        {
          name: "Icon Making",
          description: "We will make a custom icon for your project!"
        },
        {
          name: "Advertisement Making",
          description: "We will make a custom advertisement for your project by your taste!"
        },
        {
          name: "Banner Making",
          description: "We will make a custom banner for your project by your taste!"
        }
      ]
    },
    {
      name: "Server Setup Services",
      icon: "⚙️",
      services: [
        {
          name: "Basic Setup",
          description: "We will help set up your server's basic stuff!"
        },
        {
          name: "Bots Setup",
          description: "We will help set up your server's basic bots!"
        },
        {
          name: "Extra Setup",
          description: "We will help set up your server's extra things!"
        }
      ]
    }
  ],
  servers: [
    {
      name: "Star Gazing",
      description: "Our main community and service server",
      link: "https://discord.gg/6pRmyX9h2T"
    },
    {
      name: "Starry Advertise",
      description: "A place to advertise your projects!",
      link: "https://discord.gg/UyfHFTfnCJ"
    },
    {
      name: "Starry Portal",
      description: "A place to Hire bubble as Partner Manager for your server!",
      link: "https://discord.gg/Q9zFafkj8B"
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
      <div class="message-content">${msg.content.split('\n').join('<br>')}</div>
    </div>
  `).join('');
}

// Load services by category
function loadServiceCategories() {
  const container = document.getElementById('servicesCategoriesContainer');
  if (!container) return;

  container.innerHTML = contentData.serviceCategories.map(category => `
    <div class="service-category">
      <div class="category-header">
        <span class="category-icon">${category.icon}</span>
        <h2>${category.name}</h2>
      </div>
      <div class="services-grid">
        ${category.services.map(service => `
          <div class="service-card">
            <h3>${service.name}</h3>
            <p>${service.description}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
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
  loadServiceCategories();
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
