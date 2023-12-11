document.getElementById('changeButton').addEventListener('click', function() {
    var body = document.body;
    var h1 = document.getElementsByTagName('h1')[0];
    var h2 = document.getElementsByTagName('h2')[0];
    var currentBackground = getComputedStyle(body).backgroundImage;

    // Toggle between two background images
    if (currentBackground.includes('https://getwallpapers.com/wallpaper/full/0/3/1/90073.jpg')) {
      body.style.backgroundImage = 'url("https://i.pinimg.com/originals/a2/b7/4d/a2b74d342742cf7aeb55012d74dc697a.jpg")';

      // Change color of h1 and h2 to white
      if (h1) {
        h1.style.color = 'white';
      }
      if (h2) {
        h2.style.color = 'white';
      }
    } else {
      body.style.backgroundImage = 'url("https://getwallpapers.com/wallpaper/full/0/3/1/90073.jpg")';

      // Reset color of h1 and h2 to their original states or any other desired color
      if (h1) {
        h1.style.color = ''; // Empty string resets to the original color
      }
      if (h2) {
        h2.style.color = ''; // Empty string resets to the original color
      }
    }


});
