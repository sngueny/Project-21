// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});

// Blog data
const blogPosts = {
  1: {
    title: "Celebrating Our First Graduating Class of Solar Technicians",
    category: "Success Stories",
    categoryClass: "bg-blue-100 text-blue-800",
    date: "June 15, 2025",
    image: "https://images.unsplash.com/photo-1686213011376-d20df949af59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjkwMjR8MHwxfHNlYXJjaHwzfHxTdHVkZW50JTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255fGVufDB8fHx8MTc1NTc5MTgyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    content: `
      <p class="text-lg text-gray-700 mb-6">We are proud to announce that 25 students have successfully completed our Solar Energy Technician Program and are now employed in various parts of Kenya. This milestone marks a significant step forward in our mission to provide sustainable livelihoods for refugees in the Kakuma refugee camp.</p>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">The Journey Begins</h2>
      <p class="mb-4">Six months ago, these students entered our program with limited technical knowledge but unlimited determination. Through intensive training in solar panel installation, maintenance, and repair, they have transformed their futures and the futures of their communities.</p>

      <blockquote class="border-l-4 border-primary pl-6 italic text-gray-700 mb-6">
        "This training has given me hope for a better future. I can now provide for my family and contribute to my community." - Hassan, Solar Technician Graduate
      </blockquote>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">Program Highlights</h2>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Comprehensive 6-month training program</li>
        <li>Hands-on experience with real solar installations</li>
        <li>Certification recognized by Kenyan government</li>
        <li>100% job placement rate for graduates</li>
        <li>Partnerships with local solar companies</li>
      </ul>

      <p class="mb-6">The success of this program demonstrates the power of education and vocational training in transforming lives. We are committed to expanding this program to reach more refugees and create more opportunities for sustainable employment.</p>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">What's Next</h2>
      <p class="mb-4">With the support of our donors and partners, we plan to:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Launch a second cohort in September 2025</li>
        <li>Expand training to include advanced solar technologies</li>
        <li>Establish solar installation cooperatives</li>
        <li>Partner with more companies for job opportunities</li>
      </ul>

      <p class="text-lg text-gray-700">Thank you to everyone who made this possible. Your support continues to change lives and build brighter futures.</p>
    `
  },
  2: {
    title: "New Partnership with Global Education Fund to Support 100 More Students",
    category: "Partnerships",
    categoryClass: "bg-purple-100 text-purple-800",
    date: "May 28, 2025",
    image: "https://cdn.pixabay.com/photo/2017/07/31/23/45/pen-2562078_1280.jpg",
    content: `
      <p class="text-lg text-gray-700 mb-6">We are excited to announce a new partnership with the Global Education Fund that will allow us to provide scholarships to an additional 100 students in our vocational training programs. This collaboration represents a significant expansion of our educational initiatives.</p>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">Partnership Details</h2>
      <p class="mb-4">The Global Education Fund has committed $500,000 over the next two years to support refugee education in Kakuma. This funding will cover tuition, materials, and living expenses for 100 students enrolled in our various vocational programs.</p>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">Impact on Students</h2>
      <p class="mb-6">This partnership will directly benefit students who might otherwise be unable to afford our training programs. The scholarships will cover:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Full tuition fees</li>
        <li>Training materials and tools</li>
        <li>Transportation to training facilities</li>
        <li>Basic living stipends</li>
        <li>Certification exam fees</li>
      </ul>

      <blockquote class="border-l-4 border-primary pl-6 italic text-gray-700 mb-6">
        "Education is the key to breaking the cycle of poverty. This partnership will open doors for so many young people." - Maria Sanchez, Global Education Fund Director
      </blockquote>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">Program Expansion</h2>
      <p class="mb-4">With this additional funding, we will be able to expand our programs to include:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Advanced computer skills training</li>
        <li>Business entrepreneurship courses</li>
        <li>Language proficiency programs</li>
        <li>Leadership development workshops</li>
      </ul>

      <p class="text-lg text-gray-700">We are grateful for partners like the Global Education Fund who share our vision of empowering refugees through education and skills development.</p>
    `
  },
  3: {
    title: "Clean Water Project Reaches Milestone: 5,000 People Now Have Access",
    category: "Project Updates",
    categoryClass: "bg-green-100 text-green-800",
    date: "April 12, 2025",
    image: "https://images.unsplash.com/photo-1696371269814-ae41fc67cf03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjkwMjR8MHwxfHNlYXJjaHw5fHxXYXRlciUyMHN5c3RlbSUyMGNhbXBhaWdufGVufDB8fHx8MTc1NTc5MTg2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    content: `
      <p class="text-lg text-gray-700 mb-6">Our Clean Water Access project has successfully completed the installation of three new water purification systems, bringing safe drinking water to 5,000 people in the Kakuma refugee camp. This milestone represents a significant improvement in health and quality of life for our community.</p>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
      <p class="mb-4">The clean water project, launched in 2024, aims to provide sustainable access to safe drinking water throughout the camp. Our solar-powered purification systems can process up to 10,000 liters of water per day each.</p>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">Technical Specifications</h2>
      <p class="mb-6">Each purification system includes:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Solar-powered pumps and filtration units</li>
        <li>Multi-stage filtration (sediment, carbon, UV)</li>
        <li>Storage tanks with capacity for 5,000 liters</li>
        <li>Distribution points throughout the camp</li>
        <li>Maintenance training for local technicians</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">Health Impact</h2>
      <p class="mb-4">Access to clean water has led to:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>70% reduction in waterborne diseases</li>
        <li>Improved school attendance rates</li>
        <li>Better nutrition through safe food preparation</li>
        <li>Reduced time spent collecting water (mostly by women and children)</li>
      </ul>

      <blockquote class="border-l-4 border-primary pl-6 italic text-gray-700 mb-6">
        "Before this project, we spent hours every day walking to collect water that wasn't even safe to drink. Now our children can focus on school instead of survival." - Community member
      </blockquote>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">Future Plans</h2>
      <p class="mb-4">We plan to install 5 more systems by the end of 2025, bringing clean water to an additional 10,000 people. Our goal is universal access to safe water within the camp by 2027.</p>

      <p class="text-lg text-gray-700">This project demonstrates how targeted interventions can create lasting change in refugee communities.</p>
    `
  },
  4: {
    title: "From Refugee to Teacher: Aisha's Journey of Resilience",
    category: "Personal Stories",
    categoryClass: "bg-yellow-100 text-yellow-800",
    date: "March 5, 2025",
    image: "https://cdn.pixabay.com/photo/2016/03/26/13/09/notebook-1280538_1280.jpg",
    content: `
      <p class="text-lg text-gray-700 mb-6">Aisha fled conflict in Somalia as a child and found herself in Kakuma with little hope for education. Today, she teaches mathematics to other refugee children, inspiring a new generation with her story of resilience and determination.</p>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">A Difficult Beginning</h2>
      <p class="mb-4">Aisha arrived in Kakuma at age 12, having lost her parents and home to conflict. With no formal education and limited opportunities, she faced an uncertain future. But Aisha's determination to learn never wavered.</p>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">The Power of Education</h2>
      <p class="mb-6">Through Project 21 Kenya's education programs, Aisha gained access to schooling and discovered her passion for mathematics. She excelled in her studies and was selected for advanced training.</p>

      <blockquote class="border-l-4 border-primary pl-6 italic text-gray-700 mb-6">
        "Education gave me hope when I had none. It showed me that my past doesn't define my future." - Aisha
      </blockquote>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">Becoming a Teacher</h2>
      <p class="mb-4">After completing secondary education, Aisha enrolled in our teacher training program. She now teaches mathematics to primary school students, many of whom face similar challenges to those she overcame.</p>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">Impact on Her Students</h2>
      <p class="mb-4">Aisha's students benefit not just from her mathematical knowledge, but from her personal story of triumph over adversity. She serves as a living example that education can transform lives.</p>

      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>95% of her students show improved math scores</li>
        <li>Higher school attendance and engagement</li>
        <li>Increased confidence and aspirations</li>
        <li>Role model for girls in STEM subjects</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">Giving Back</h2>
      <p class="mb-4">Aisha volunteers in our after-school tutoring program and mentors young girls interested in education. She believes that "to whom much is given, much is required."</p>

      <p class="text-lg text-gray-700">Aisha's journey reminds us why education matters. Her story inspires us to continue our work, knowing that every child we educate has the potential to become the next Aisha.</p>
    `
  },
  5: {
    title: "Annual Fundraising Campaign Launches with $100,000 Goal",
    category: "Fundraising",
    categoryClass: "bg-red-100 text-red-800",
    date: "February 20, 2025",
    image: "https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241_1280.jpg",
    content: `
      <p class="text-lg text-gray-700 mb-6">We are launching our annual fundraising drive with an ambitious target of $100,000 to support our expanded vocational training programs. This campaign will fund scholarships, equipment, and program expansion for the coming year.</p>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">Campaign Goals</h2>
      <p class="mb-4">The $100,000 will be allocated as follows:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>$40,000 for student scholarships</li>
        <li>$30,000 for equipment and materials</li>
        <li>$20,000 for program expansion</li>
        <li>$10,000 for operational costs</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">Why This Matters</h2>
      <p class="mb-4">Your donation directly impacts lives. For every $500 donated, we can provide one student with a full scholarship for vocational training. This investment creates sustainable livelihoods and breaks the cycle of poverty.</p>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">How You Can Help</h2>
      <p class="mb-6">There are many ways to contribute:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Make a one-time donation</li>
        <li>Set up monthly giving</li>
        <li>Organize a fundraiser in your community</li>
        <li>Spread the word on social media</li>
        <li>Volunteer your time and skills</li>
      </ul>

      <blockquote class="border-l-4 border-primary pl-6 italic text-gray-700 mb-6">
        "When we invest in education, we invest in peace and prosperity for all." - Project 21 Kenya Mission Statement
      </blockquote>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">Success Stories</h2>
      <p class="mb-4">Last year's campaign funded 50 scholarships and helped graduates secure employment with an average starting salary of $400/month. This year, we aim to double that impact.</p>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">Stay Connected</h2>
      <p class="mb-4">Follow our progress throughout the campaign. We'll share stories of the students you're helping and provide regular updates on how funds are being used.</p>

      <p class="text-lg text-gray-700">Together, we can create opportunities that change lives. Your support makes all the difference.</p>
    `
  },
  6: {
    title: "Project 21 Kenya Welcomes New Board Members from Corporate Sector",
    category: "Organization News",
    categoryClass: "bg-indigo-100 text-indigo-800",
    date: "January 10, 2025",
    image: "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_1280.jpg",
    content: `
      <p class="text-lg text-gray-700 mb-6">We are pleased to announce the addition of three new board members bringing expertise in corporate social responsibility, technology, and international development. Their diverse backgrounds will strengthen our governance and strategic direction.</p>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">New Board Members</h2>

      <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">Sarah Chen - Corporate Social Responsibility Expert</h3>
        <p class="mb-4">Sarah brings 15 years of experience in CSR at Fortune 500 companies. She has led initiatives that have impacted millions through education and livelihood programs worldwide.</p>
      </div>

      <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">Dr. Michael Rodriguez - Technology and Innovation</h3>
        <p class="mb-4">Michael is a technology entrepreneur and philanthropist who founded three successful edtech companies. He is passionate about using technology to solve social challenges.</p>
      </div>

      <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">Amara Okafor - International Development Specialist</h3>
        <p class="mb-4">Amara has worked with UNHCR and other international organizations for over 20 years, specializing in refugee education and community development in East Africa.</p>
      </div>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">Strategic Priorities</h2>
      <p class="mb-4">The new board members will focus on:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Technology integration in education programs</li>
        <li>Corporate partnerships and funding</li>
        <li>Program scalability and impact measurement</li>
        <li>Policy advocacy for refugee education</li>
      </ul>

      <blockquote class="border-l-4 border-primary pl-6 italic text-gray-700 mb-6">
        "I'm excited to bring my experience in scaling social impact programs to help Project 21 Kenya reach more students and create lasting change." - Sarah Chen
      </blockquote>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">Board Composition</h2>
      <p class="mb-4">Our board now includes experts from:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Corporate leadership and CSR</li>
        <li>Technology and innovation</li>
        <li>International development</li>
        <li>Education and refugee affairs</li>
        <li>Local community leadership</li>
      </ul>

      <p class="text-lg text-gray-700">We are grateful to welcome these accomplished individuals to our board. Their expertise will help us achieve our mission more effectively and create greater impact for the refugee community in Kakuma.</p>
    `
  }
};

// Get blog ID from URL
function getBlogId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

// Load blog content
function loadBlogContent() {
  const blogId = getBlogId();
  const blogData = blogPosts[blogId];

  if (!blogData) {
    document.querySelector('.container').innerHTML = '<div class="text-center py-16"><h1 class="text-3xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1><p class="text-gray-600">The requested blog post could not be found.</p><a href="index.html#blog" class="btn-primary mt-4 inline-block">Back to Blog</a></div>';
    return;
  }

  // Update page title
  document.title = `${blogData.title} | Project 21 Kenya`;

  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', blogData.content.replace(/<[^>]*>/g, '').substring(0, 160) + '...');
  }

  // Populate content
  document.getElementById('article-title').textContent = blogData.title;
  document.getElementById('article-category').textContent = blogData.category;
  document.getElementById('article-category').className = `text-xs font-semibold py-1 px-3 rounded-full ${blogData.categoryClass}`;
  document.getElementById('article-date').textContent = blogData.date;
  document.getElementById('article-image').src = blogData.image;
  document.getElementById('article-image').alt = blogData.title;
  document.getElementById('article-content').innerHTML = blogData.content;

  // Load likes and comments
  loadLikes(blogId);
  loadComments(blogId);
}

// Like functionality
function loadLikes(blogId) {
  const likes = JSON.parse(localStorage.getItem(`blog_${blogId}_likes`) || '[]');
  const likeCount = likes.length;
  const userLiked = likes.includes(getUserId());

  document.getElementById('like-count').textContent = likeCount;
  document.getElementById('like-icon').className = userLiked ? 'fas fa-heart text-red-500 text-xl' : 'far fa-heart text-xl';
  document.getElementById('like-btn').classList.toggle('text-red-500', userLiked);
}

function toggleLike() {
  const blogId = getBlogId();
  const userId = getUserId();
  let likes = JSON.parse(localStorage.getItem(`blog_${blogId}_likes`) || '[]');

  const index = likes.indexOf(userId);
  if (index > -1) {
    likes.splice(index, 1);
  } else {
    likes.push(userId);
  }

  localStorage.setItem(`blog_${blogId}_likes`, JSON.stringify(likes));
  loadLikes(blogId);
}

// Comments functionality
function loadComments(blogId) {
  const comments = JSON.parse(localStorage.getItem(`blog_${blogId}_comments`) || '[]');
  const commentsList = document.getElementById('comments-list');

  if (comments.length === 0) {
    commentsList.innerHTML = '<p class="text-gray-500 text-center py-8">No comments yet. Be the first to share your thoughts!</p>';
    return;
  }

  commentsList.innerHTML = comments.map(comment => `
    <div class="bg-white rounded-lg p-4 shadow-sm">
      <div class="flex items-center justify-between mb-2">
        <h4 class="font-semibold text-gray-800">${comment.name}</h4>
        <span class="text-xs text-gray-500">${new Date(comment.date).toLocaleDateString()}</span>
      </div>
      <p class="text-gray-700">${comment.text}</p>
    </div>
  `).join('');
}

function addComment(event) {
  event.preventDefault();

  const blogId = getBlogId();
  const name = document.getElementById('comment-name').value;
  const email = document.getElementById('comment-email').value;
  const text = document.getElementById('comment-text').value;

  const comment = {
    name,
    email,
    text,
    date: new Date().toISOString(),
    id: Date.now()
  };

  let comments = JSON.parse(localStorage.getItem(`blog_${blogId}_comments`) || '[]');
  comments.push(comment);
  localStorage.setItem(`blog_${blogId}_comments`, JSON.stringify(comments));

  // Reset form
  event.target.reset();

  // Reload comments
  loadComments(blogId);

  // Show success message
  alert('Thank you for your comment! It has been posted.');
}

// Share functionality
function shareOnFacebook() {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.getElementById('article-title').textContent);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`, '_blank');
}

function shareOnTwitter() {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.getElementById('article-title').textContent);
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
}

function shareOnLinkedIn() {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.getElementById('article-title').textContent);
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    alert('Link copied to clipboard!');
  });
}

// Utility functions
function getUserId() {
  let userId = localStorage.getItem('user_id');
  if (!userId) {
    userId = 'user_' + Date.now() + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('user_id', userId);
  }
  return userId;
}

// Modal Functions
function showVolunteerModal() {
  document.getElementById('volunteer-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeVolunteerModal() {
  document.getElementById('volunteer-modal').classList.add('hidden');
  document.body.style.overflow = 'auto';
}

function showContactModal() {
  document.getElementById('contact-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeContactModal() {
  document.getElementById('contact-modal').classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadBlogContent();

  // Modal event listeners
  document.querySelectorAll('.volunteer-btn').forEach(button => {
    button.addEventListener('click', showVolunteerModal);
  });

  document.querySelectorAll('.contact-btn').forEach(button => {
    button.addEventListener('click', showContactModal);
  });

  // Close modals when clicking outside
  document.getElementById('volunteer-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('volunteer-modal')) {
      closeVolunteerModal();
    }
  });

  document.getElementById('contact-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('contact-modal')) {
      closeContactModal();
    }
  });

  // Form submissions
  document.getElementById('volunteer-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your interest in volunteering! We will review your application and get back to you soon.');
    closeVolunteerModal();
    e.target.reset();
  });

  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you as soon as possible.');
    closeContactModal();
    e.target.reset();
  });

  // Other event listeners
  document.getElementById('mobile-menu-button').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
  });

  document.getElementById('like-btn').addEventListener('click', toggleLike);
  document.getElementById('comment-form').addEventListener('submit', addComment);
  document.getElementById('share-facebook').addEventListener('click', shareOnFacebook);
  document.getElementById('share-twitter').addEventListener('click', shareOnTwitter);
  document.getElementById('share-linkedin').addEventListener('click', shareOnLinkedIn);
  document.getElementById('share-copy').addEventListener('click', copyLink);
});