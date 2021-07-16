// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() { //해당 함수 이름은 변경없이 그대로 써야한다
  new YT.Player('player', { // #을 붙일 필요 없이 'player' 라는 id값을 찾아줌
    videoId: 'An6LvWQuj_8',
    playerVars: {
      autoplay: true, // 자동재생 유무
      loop: true, // 반복재생 유무
      playlist: 'An6LvWQuj_8' // 반복재생할 유튜브영상 ID 목록
    },
    events: {
      onReady: function (event) {
        event.target.mute() // 음소거
        // 여기서 target 은 재생되고 있는 영상 자체를 의미
      }
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}

function stopVideo() {
  player.stopVideo();
}