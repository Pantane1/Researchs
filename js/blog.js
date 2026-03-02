// js/blog.js

// Example: Highlight code blocks
document.querySelectorAll('pre code').forEach(block => {
  block.style.backgroundColor = "#f1f1f1";
  block.style.padding = "1rem";
  block.style.borderRadius = "5px";
  block.style.display = "block";
  block.style.overflowX = "auto";
});

// Example: Table of contents generation (optional enhancement)
const headings = document.querySelectorAll('main h2');
if(headings.length > 0) {
  const toc = document.createElement('ul');
  toc.classList.add('toc');
  headings.forEach(h2 => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${h2.textContent.replace(/\s+/g,'-').toLowerCase()}`;
    a.textContent = h2.textContent;
    li.appendChild(a);
    toc.appendChild(li);
    h2.id = a.href.split('#')[1];
  });
  document.querySelector('main').prepend(toc);
}
