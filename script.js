// script.js
// Data
const projects = [
  { 
    title: "Movie Booking Web Application", 
    desc: "Responsive full-stack ticket reservation system with user authentication, seat selection, booking history, and cancellation features.", 
    tech:["HTML","CSS","JS","SQL","Full-Stack"], 
    link: null 
  },
  { 
    title: "Interactive Reports & Forms for Plant Operations", 
    desc: "Oracle APEX apps including CCR E-Logbook, CPP Daily Reports, and Water Chemistry Management — digitized enterprise workflows with role-based access & interactive reports.", 
    tech:["Oracle APEX","SQL","PL/SQL"], 
    link: null 
  },
  { 
    title: "File Allocation Methods", 
    desc: "Implemented different file allocation strategies to optimize memory usage.", 
    tech:["C++"], 
    link: "https://github.com/DhruvPatel814/File-Allocation-Methods" 
  },
  { 
    title: "haLo raiLs — Railway User Interaction Website", 
    desc: "Web app with Twilio-based emergency messaging and user interfaces for passengers.", 
    tech:["HTML","CSS","JS","Twilio"], 
    link: "https://github.com/DhruvPatel814/haLo" 
  }
];

const skills = [
  "C++ (DSA)","Java (DSA)","Python (Basics)",
  "HTML & CSS","JavaScript","SQL","PL/SQL","Oracle APEX",
  "IoT & Embedded Systems","Problem-Solving"
];

// Render projects
const projectsGrid = document.getElementById('projectsGrid');
projects.forEach(p=>{
  const el = document.createElement('article'); 
  el.className='card';
  el.innerHTML = `
    <h4 style="margin:0">${p.title}</h4>
    <div class="muted" style="margin-top:6px">${p.desc}</div>
    <div class="tech">${p.tech.map(t=>`<span class="chip">${t}</span>`).join('')}</div>
    ${p.link ? `<div style="margin-top:10px;text-align:right"><a href="${p.link}" target="_blank">View</a></div>` : ""}
  `;
  projectsGrid.appendChild(el);
});

// Render skills
const skillsList = document.getElementById('skillsList');
skills.forEach(s=>{ 
  const sp=document.createElement('span'); 
  sp.className='chip'; 
  sp.textContent=s; 
  skillsList.appendChild(sp);
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle
const themeBtn = document.getElementById('themeBtn');
if(themeBtn){
  themeBtn.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('dark');
    if(document.documentElement.classList.contains('dark')) 
      localStorage.setItem('theme','dark'); 
    else 
      localStorage.removeItem('theme');
  });
}
if(localStorage.getItem('theme')==='dark') 
  document.documentElement.classList.add('dark');

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href'); 
    if(id==='#') return; 
    const el = document.querySelector(id); 
    if(el){ 
      e.preventDefault(); 
      el.scrollIntoView({behavior:'smooth',block:'start'}); 
    }
  });
});
