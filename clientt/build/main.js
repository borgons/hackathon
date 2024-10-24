// GET infos 
const valid = false

function notneeded() {
  const tooltip = document.getElementById('floating-window');
  if (tooltip) {
      tooltip.remove();
  }
}

const newPopupMessage = (txt) => {
  const existingPopup = document.getElementById('floating-window');
  if (existingPopup) return;

  const popup = document.createElement('div');
  popup.id = 'floating-window';
  popup.className = 'floating-window';
  popup.style.transform = "translateY(-170px)"


  const parentDiv = document.createElement('div');
  parentDiv.id = 'parent';
  parentDiv.className = 'parent';
  parentDiv.style.height = "150px"




  const contentDiv = document.createElement('div');
  contentDiv.id = 'Content';
  contentDiv.innerHTML = txt

  const imgDiv = document.createElement('img')

  const imageAddress= "https://w7.pngwing.com/pngs/821/338/png-transparent-warning-sign-computer-icons-warning-icon-angle-triangle-warning-sign-thumbnail.png"

  imgDiv.setAttribute("src", imageAddress);
  imgDiv.setAttribute("width", "150");
  imgDiv.setAttribute("height", "150");
  imgDiv.setAttribute("alt", "warnSign");
  imgDiv.style.marginInline = "2rem"

  // const closeButton = document.createElement('button');
  // closeButton.textContent = 'Close';
  // closeButton.className = 'closing';
  // closeButton.onclick = notneeded;

  // ===============================

  popup.appendChild(parentDiv);
  parentDiv.appendChild(imgDiv)
  parentDiv.appendChild(contentDiv);
  // parentDiv.appendChild(closeButton);
  document.body.appendChild(popup);
}


function showMessageForWebsite() {

let infos;

// base_url
const base_url = 'https://hackathon-2024-be.vercel.app/routes/api/info'

fetch(`${base_url}/getInfos`)
  .then(res => {
    return res.json()
  })
  .then(data => {
    infos = data;

    const url = window.location.href
    let message;

    let txt = ""

    for(let i in infos){
      // console.log(infos[i].message)
      txt = infos[i].website || 'default.com'

      if(url.includes(txt)) {
        message = infos[i].message;
        break
      } else {
        message = "Welcome to the Internet, where every click is a new adventure"
      }
    }

    newPopupMessage(message)

  })
  .catch((err) => {
    console.log(err)
  })

}



window.onload = function () {

  if (!valid) { 
      showMessageForWebsite();
  }

  let timeLeft = 20;
  const countdown = setInterval(() => {
      if (timeLeft <= 0) {
          clearInterval(countdown);
          notneeded();
      } else {
          timeLeft--;
      }
  }, 1000);
};