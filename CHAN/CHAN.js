document.addEventListener("DOMContentLoaded", function () {
    // 버튼 요소들을 가져옵니다.
    const btnHome = document.getElementById("btnHome");
    const btnAbout = document.getElementById("btnAbout");
    const btnContact = document.getElementById("btnContact");
    const btnBlog = document.getElementById("btnBlog");
    const btnProjects = document.getElementById("btnProjects");

    // 클릭 이벤트를 추가합니다.
    btnHome.addEventListener("click", function () {
        window.location.href = "콘서트.html"; // 홈 페이지로 이동
    });

    btnAbout.addEventListener("click", function () {
        window.location.href = "노래방.html"; // 소개 페이지로 이동
    });

    btnContact.addEventListener("click", function () {
        window.location.href = "축가.html"; // 연락처 페이지로 이동
    });

    btnBlog.addEventListener("click", function () {
        window.location.href = "거리공연.html"; // 블로그 페이지로 이동
    });

    btnProjects.addEventListener("click", function () {
        window.location.href = "CHAN.html"; // 프로젝트 페이지로 이동
    });
});

function playVideo(element) {
    const videoUrl = element.getAttribute("data-video-url");
    const videoPlayer = document.getElementById("player");

    // 비디오 플레이어의 소스를 클릭한 비디오의 경로로 설정
    videoPlayer.src = videoUrl;

    // 비디오 리스트를 가리고 비디오 플레이어를 보여줌
    document.getElementById("videoList").style.display = "none";
    document.getElementById("videoPlayer").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    const thumbnail = document.getElementById("thumbnail1");
    const videoUrl = thumbnail.parentElement.getAttribute("data-video-url");

    const video = document.createElement("video");
    video.crossOrigin = "anonymous"; // CORS 이슈 방지

    video.addEventListener("loadedmetadata", function() {
        video.currentTime = 1;

        video.addEventListener("seeked", function() {
            const canvas = document.createElement("canvas");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            thumbnail.src = canvas.toDataURL("image/jpeg");
        });

        video.src = videoUrl;
        video.play();
    });
});

function playVideo(element) {
    const videoUrl = element.getAttribute("data-video-url");

    // 새로운 창 열기
    const newWindow = window.open("", "_blank");

    // 비디오 삽입
    newWindow.document.write(`
        <html>
        <head>
            <title>Video Player</title>
            <style>
                body {
                    margin: 80px 0 0 0; /* 상단 여백을 80px로 조절 (원하는 값으로 변경 가능) */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 80vh; /* 80% 높이로 조절 */
                    background-color: #000;
                }

                video {
                    width: 90%; /* 90% 너비로 조절 */
                    height: 90%; /* 90% 높이로 조절 */
                }
            
                #closeButton {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    font-size: 20px;
                    color: #fff;
                    cursor: pointer;
                }
            </style>
        </head>
        <body>
            <span id="closeButton" onclick="window.close()">✖</span>
            <video controls autoplay>
                <source src="${videoUrl}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </body>
        </html>
    `);
}