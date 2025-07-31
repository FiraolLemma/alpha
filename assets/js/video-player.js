// Video player controls
document.addEventListener('DOMContentLoaded', function() {
  const video = document.querySelector('video');
  if (video) {
    // Add custom controls if needed
    const videoContainer = document.querySelector('.video-container');
    
    // Create custom controls container
    const controls = document.createElement('div');
    controls.className = 'custom-video-controls';
    controls.innerHTML = `
      <button class="play-pause"><i class="fas fa-play"></i></button>
      <button class="mute"><i class="fas fa-volume-up"></i></button>
      <input type="range" class="volume" min="0" max="1" step="0.1" value="1">
      <button class="fullscreen"><i class="fas fa-expand"></i></button>
    `;
    
    videoContainer.appendChild(controls);
    
    // Get control elements
    const playPauseBtn = controls.querySelector('.play-pause');
    const muteBtn = controls.querySelector('.mute');
    const volumeSlider = controls.querySelector('.volume');
    const fullscreenBtn = controls.querySelector('.fullscreen');
    
    // Play/Pause functionality
    playPauseBtn.addEventListener('click', function() {
      if (video.paused) {
        video.play();
        this.innerHTML = '<i class="fas fa-pause"></i>';
      } else {
        video.pause();
        this.innerHTML = '<i class="fas fa-play"></i>';
      }
    });
    
    // Mute functionality
    muteBtn.addEventListener('click', function() {
      video.muted = !video.muted;
      this.innerHTML = video.muted ? 
        '<i class="fas fa-volume-mute"></i>' : 
        '<i class="fas fa-volume-up"></i>';
    });
    
    // Volume control
    volumeSlider.addEventListener('input', function() {
      video.volume = this.value;
      video.muted = this.value == 0;
      muteBtn.innerHTML = video.muted ? 
        '<i class="fas fa-volume-mute"></i>' : 
        '<i class="fas fa-volume-up"></i>';
    });
    
    // Fullscreen functionality
    fullscreenBtn.addEventListener('click', function() {
      if (!document.fullscreenElement) {
        videoContainer.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    });
    
    // Update button states based on video events
    video.addEventListener('play', function() {
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    });
    
    video.addEventListener('pause', function() {
      playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    });
    
    video.addEventListener('volumechange', function() {
      muteBtn.innerHTML = video.muted ? 
        '<i class="fas fa-volume-mute"></i>' : 
        '<i class="fas fa-volume-up"></i>';
      volumeSlider.value = video.volume;
    });
  }
});