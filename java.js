const iletisimForm = document.querySelector('#iletisim form');

iletisimForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form values (you'll likely want to send this data to a server)
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  alert(`Adınız: ${name}\nEmail: ${email}\nMesajınız: ${message}`);
});
a
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const hakkimizdaSection = document.getElementById('hakkimizda');

hakkimizdaSection.style.opacity = 0;
hakkimizdaSection.style.transition = 'opacity 1s ease-in-out';

setTimeout(() => {
    hakkimizdaSection.style.opacity = 1;
}, 100); // Delay of 100 milliseconds

const zoomContainers = document.querySelectorAll('.zoom-container');

zoomContainers.forEach(container => {
  const thumbnail = container.querySelector('.youtube-thumbnail');
  const zoomImage = document.createElement('div'); // Create zoom image dynamically
  zoomImage.classList.add('zoom-image');
  container.appendChild(zoomImage);

  container.addEventListener('mousemove', (event) => {
    const rect = thumbnail.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const zoomLevel = 1.2; // Adjust zoom level here
    const zoomedImg = thumbnail.cloneNode(); // Create a copy of the image

    zoomedImg.style.transformOrigin = `${x}px ${y}px`; //Set transform origin
    zoomedImg.style.transform = `scale(${zoomLevel})`;
    zoomImage.innerHTML = ''; // Clear previous zoom image
    zoomImage.appendChild(zoomedImg);
  });

  container.addEventListener('mouseout', () => {
    zoomImage.innerHTML = ''; // Clear zoom image on mouseout
  });
});
