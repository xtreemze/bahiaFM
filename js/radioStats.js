let url = 'http://192.30.164.78:8000/status-json.xsl';
window.stats = {
  radioName: null,
  listeners: 0,
  listenerPeak: 0,
  title: null,
}
window.jsonUpdate = () => (fetch(url)
  .then(res => res.json())
  .then((out) => {
    window.json0 = out;
    window.json1 = out.icestats.source[0];
    window.stats.radioName = json1.server_name;
    window.stats.listeners = json1.listeners;
    window.stats.listenerPeak = json1.listener_peak;
    window.stats.title = json1.title;
    document.getElementById('statsDiv')
      .innerText = window.stats.title;
    document.getElementById('listenersDiv')
      .innerText = 'Oyentes: ' + window.stats.listeners;
  })
  .catch(err => console.error(err)));
window.setInterval(jsonUpdate(), 80000)
