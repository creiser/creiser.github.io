
function start() {
  const params = new URL(window.location.href).searchParams;
  //dirUrl = '/assets/scenes/' + params.get('scene') + '.json'; // for dropbox
  dirUrl = 'https://storage.googleapis.com/realtime-nerf-360/merf/' + params.get('scene');
  const qualityPresets = ['phone', 'low', 'medium', 'high'];
  for (const quality of qualityPresets) {
    console.log(quality);
    const e = document.getElementById(quality);
    e.setAttribute('href', "/merf_viewer?dir=" + dirUrl + '&quality=' + quality);
  }
}

window.onload = start;
