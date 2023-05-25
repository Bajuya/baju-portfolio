const loading = document.getElementById("loading");
const mainSection = document.getElementById("main-section");

const play = document.getElementById("videoPlay");

play.addEventListener('click', playVideo)
function playVideo() {
  const video = document.getElementById("my-video");
  if (video) {
    video.play();
  };
}

const videoPlayModal = document.getElementById("videoPlayModal")
if (videoPlayModal) {
  videoPlayModal.addEventListener('click', (e) => {
    if (e.target.id === 'videoPlayModal') {
      const video = document.getElementById("my-video");
      if (video) {
        video.currentTime = 0;
        video.pause();
      }
    }
  })
}

function loadingRun(count = 3000) {
  if (mainSection) {
    mainSection.style.display = 'none';
  }

  if (loading) loading.style.display = 'block';

  const timer = setInterval(() => {
    if (loading) loading.style.display = "none";
    if (mainSection) mainSection.style.display = "block"
  }, count);

  () => clearInterval(timer);
}

loadingRun();


const DATA_LINK = 'https://api-baju.onrender.com';
const articles = document.getElementById("articleList");
const freshLinks = document.getElementById("freshLinks");


// index.html
function fetchArticles() {
  // show
  fetch(`${DATA_LINK}/articles`).then(res => res.json()).then(res => {
    let articleList = "";
    for (let index = 0; index < res.length; index++) {
      const element = res[index];
      articleList = articleList + `
    <div class="col-sm-6 col-md-3 p-3 articleHover">
      <h3 class="article-title-2">${element.name}</h3>
      <a href="${element.url}" style="text-decoration: none">
        <section class="bg-light rounded px-3 py-3">
          <div
            class="card-body"
            style="border-radius: 12px; overflow: hidden"
          >
            <img
              src="${element.imgUrl}"
              style="width: 100%; height: 208px"
            />
          </div>
          <h3 class="article-title mt-3">${element.title}</h3>
        </section>
      </a>
    </div>
    `
    }
    if (articleList) articles.innerHTML = articleList;
  })
}

fetchArticles();

// index.html
function fecthLinks() {
  fetch(`${DATA_LINK}/freshLinks`).then(res => res.json()).then(res => {
    let freshLink = "";
    for (let index = 0; index < res.length; index++) {
      const element = res[index];
      freshLink = freshLink + `
      <div class="col-sm-6 col-md-3 p-3 articleHover">
        <a href="${element.url}" style="text-decoration: none">
          <section class="bg-light rounded px-3 py-3">
            <div
              class="card-body"
              style="border-radius: 12px; overflow: hidden"
            >
              <img
                src="${element.imgUrl}"
                style="width: 100%; height: 184px"
              />
            </div>
            <br/>
            <h4 class="article-title-3">${element.name}</h4>
            <h5 class="article-title mt-3">${element.website}</h5>
          </section>
        </a>
      </div>
      `
    }
    freshLinks.innerHTML = freshLink;
  })
}

fecthLinks();

// show admin
const tableArticleAdmin = document.getElementById("tableArticles");

function fetchArticlesAdmin() {
  fetch(`${DATA_LINK}/articles`).then(res => res.json()).then(res => {
    let articleList = "";
    for (let index = 0; index < res.length; index++) {
      const element = res[index];
      articleList = articleList + `
      <tr>
        <td scope="row">${element.id}</td>
        <td>${element.name}</td>
        <td>${element.title}</td>
        <td><div
        class="card-body"
      >
        <img
          src="${element.imgUrl}"
          style="width: 120px; height: 80px"
        />
      </div></td>
        <td>${element.url}</td>
        <td>
        <button
          type="button"
          onclick="deleteArticle(${element.id})"
          class="btn btn-danger px-2 my-2"
        >
          Устгах
        </button></td>
      </tr>
      `
    }
    tableArticleAdmin.innerHTML = articleList;
  })
}

fetchArticlesAdmin();

const articleSave = document.getElementById("articleSave");

articleSave.addEventListener("click", function save() {
  const name = document.getElementById("articleName").value;
  const title = document.getElementById("articleTitle").value;
  const imgUrl = document.getElementById("articleImg").value;
  const url = document.getElementById("articleUrl").value;
  fetch(`${DATA_LINK}/articles`, {
    method: "POST", headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, body: JSON.stringify({
      name,
      title,
      imgUrl,
      url
    })
  }).then(() => { fetchArticles(); fetchArticlesAdmin(); })

})


function deleteArticle(id) {
  if (confirm("Өгөгдлийг устгах?")) {
    fetch(`${DATA_LINK}/articles/${id}`, {
      method: "DELETE"
    }).then(() => { fetchArticles(); fetchArticlesAdmin(); })
  }
}


// show admin
const tableLinks = document.getElementById("tableLinks");


function fecthLinksAdmin() {
  fetch(`${DATA_LINK}/freshLinks`).then(res => res.json()).then(res => {
    let tableLink = "";
    for (let index = 0; index < res.length; index++) {
      const element = res[index];
      tableLink = tableLink + `
      <tr>
        <td scope="row">${element.id}</td>
        <td>${element.name}</td>
        <td>${element.website}</td>
        <td><div
        class="card-body"
      >
        <img
          src="${element.imgUrl}"
          style="width: 120px; height: 80px"
        />
      </div></td>
        <td>${element.url}</td>
        <td>
        <button
          type="button"
          onclick="deleteLink(${element.id})"
          class="btn btn-danger px-2 my-2"
        >
          Устгах
        </button></td>
      </tr>
      `
    }
    tableLinks.innerHTML = tableLink;
  });
}

fecthLinksAdmin();

function deleteLink(id) {
  if (confirm("Өгөгдлийг устгах?")) {
    fetch(`${DATA_LINK}/freshLinks/${id}`, {
      method: "DELETE"
    }).then(() => { fecthLinks(); fecthLinksAdmin(); })
  }
}

const freshLinkSave = document.getElementById("freshLinkSave");

freshLinkSave.addEventListener("click", function save() {
  const name = document.getElementById("linkName").value;
  const website = document.getElementById("linkWeb").value;
  const imgUrl = document.getElementById("linkImg").value;
  const url = document.getElementById("linkUrl").value;
  fetch(`${DATA_LINK}/freshLinks`, {
    method: "POST", headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, body: JSON.stringify({
      name,
      website,
      imgUrl,
      url,
    })
  }).then(() => { fecthLinks(); fecthLinksAdmin() })

})