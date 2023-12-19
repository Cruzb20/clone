const d = new Date();
const options = { month: 'short', day: 'numeric', year: 'numeric' };
document.querySelector(".demo1").innerHTML = d.toLocaleString('en-US', options);

const demoElement = document.querySelector('.demo');

function updateDemoTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const period = hours >= 12 ? ' pm' : ' am';
    // Convert 24-hour time to 12-hour format
    const formattedHours = hours % 12 || 12;
    const formattedTime = `${formattedHours}:${minutes.toString().padStart(2, '0')}${period}`;
    
    // Select the element with class "demo" and set its content
    document.querySelector('.demo').textContent = formattedTime;
}

// Update the time initially
updateDemoTime();

// Update the time every minute (optional)
setInterval(updateDemoTime, 60000);

document.addEventListener('DOMContentLoaded', function () {
    var div1 = document.querySelector('.div1');
    var circles = document.querySelectorAll('.circle-container');
    var title = document.querySelector('.title');
    var title1 = document.querySelector('.text1');
    var rtr1 = document.querySelector('.rtr1');
    var rtr2 = document.querySelector('.rtr2');

    // Set initial image source
    var initialImage = 'https://pa1.aminoapps.com/8060/7aff06abcddd2c7abcb3deb64c170a08adf2731ar1-581-331_hq.gif';


    div1.querySelector('img').src = initialImage;


    circles.forEach(function (circle, index) {
        circle.addEventListener('click', function () {
            // Change the image source based on the clicked circle
            var newImage, newImage1, newImage2;
            var newTitle, newTitle1;
            var clickSound = new Audio('sound.wav'); // Create a new instance for each click

            if (index === 0) {
                newImage = 'https://pa1.aminoapps.com/8060/7aff06abcddd2c7abcb3deb64c170a08adf2731ar1-581-331_hq.gif';
                newImage1 = 'https://www.pinpng.com/pngs/m/121-1217907_dbz-super-png-sangoku-super-saiyan-blue-2.png';
                newImage2 = 'https://p1.hiclipart.com/preview/790/365/246/goku-ssj3-rayos-dragon-ball-z-son-goku-super-saiyan-3-standing.jpg';
                newTitle1 = 'Dragon Ball';
                newTitle = 'Dragon Ball';
            } else if (index === 1) {
                newImage = 'https://64.media.tumblr.com/9f52e03967e12bc5e71085412ecc4063/a96229fd76dbd4ce-92/s540x810/a15fee329fc0e76540e98dec2d963a1ebde68792.gif';
                newImage1 = 'https://i.pinimg.com/originals/26/00/ce/2600cef69e1b6d44b1f8459cf455abc8.png';
                newImage2 = 'https://www.vhv.rs/dpng/d/5-52928_naruto-kurama-png-transparent-png.png';
                newTitle1 = 'Naruto Shippuden';
                newTitle = 'Naruto Shippuden';
            } else if (index === 2) {
                newImage = 'https://64.media.tumblr.com/cd61299322d15a91471ffb1227243a3a/b23b026874863411-ec/s540x810/0db3bb467bc7dc426028be38de61ca46e7e597fb.gif';
                newImage1 = 'https://c0.klipartz.com/pngpicture/50/842/gratis-png-una-pieza-de-ilustracion-luffy-mono-d-luffy-una-pieza-roronoa-zoro-dracule-mihawk-trafalgar-d-ley-del-agua-una-pieza-thumbnail.png';
                newImage2 = 'https://ongpng.com/wp-content/uploads/2023/07/luffy-jumping.png';
                newTitle1 = 'One Piece';
                newTitle = 'One Piece';
            }

            // Update the image source
            div1.querySelector('img').src = newImage;
            rtr1.src = newImage1;
            rtr2.src = newImage2;
            // Update the title text content
            title.textContent = newTitle;
            title1.textContent = newTitle1;

            // Play the click sound
            clickSound.play();
        });
    });
});



let heart = true;
function toggleHeart() {
 
    let heartIcon = document.querySelector('#heartIcon');
    let heartImage = document.querySelector('#heartReactImage');

    if (heart) {
        // Show heart react image and hide heart icon
        heartImage.style.display = 'inline-block';
        heartIcon.style.display = 'none';
        
    var newHeartImage = document.createElement('img');
    newHeartImage.src = 'heart1.png';
    newHeartImage.className = 'appear';
    
    // Append the new image to the container
    document.querySelector('.container5').appendChild(newHeartImage);
    
    
    // Remove the new image after 2 seconds
    setTimeout(function () {
        newHeartImage.remove();
    }, 2000);
    } else {
        // Show heart icon and hide heart react image
        heartImage.style.display = 'none';
        heartIcon.style.display = 'inline-block';
    }

    // Toggle the state
    heart = !heart;

    
}


let save = true;
function toggleSave() {

    let saveIcon = document.querySelector('#saveIcon');
    let saveImage = document.querySelector('#saveReactImage');

    if (save) {
        // Show heart react image and hide heart icon
        saveImage.style.display = 'inline-block';
        saveIcon.style.display = 'none';
    } else {
        // Show heart icon and hide heart react image
        saveImage.style.display = 'none';
        saveIcon.style.display = 'inline-block';
    }

    // Toggle the state
     save = !save;
}

let comment = true;
function toggleCommentBox() {
    var commentBox = document.querySelector(".comment-box");
    if (comment) {
        commentBox.style.display = 'block';
      } else {
        commentBox.style.display = 'none';
      }
      
    // Toggle the state
     comment = !comment;
  }
  const textarea = document.querySelector("textarea");
  textarea.addEventListener("keyup", e =>{
    textarea.style.height = "63px";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
  });



// Declare form globally
var form = document.querySelector('form');

function submitComment() {
    var commentText = document.getElementById('commentText').value;

    // Check if commentText is empty before sending the request
    if (!commentText.trim()) {
        alert('Comment text not be empty');
        return;
    }

    fetch('insert_comment.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'comment=' + encodeURIComponent(commentText),
    })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            if (data === 'successful') {
               console.log(data);
         form.reset();
            } else if (data === 'empty') {
                alert('bobo ka'); //not working data===empty  displays php file
            } 
        })
        .catch(error => console.error('Error submitting comment:', error));
         // Reset the form
         form.reset();
}

// Fetch and display comments periodically ajax poilling
function fetchCommentsPeriodically() {
    fetchComments(); // Initial fetch

    setInterval(fetchComments, 1000);
}

// Fetch and display comments
function fetchComments() {
    fetch('display_comments.php')
        .then(response => response.text())
        .then(data => {
            document.getElementById('comments-container').innerHTML = data;
        })
        .catch(error => console.error('Error fetching comments:', error));
}

// Fetch and display comments when the page loads ajax poilling
document.addEventListener('DOMContentLoaded', function () {
    fetchCommentsPeriodically();
});



//delete button php ajax
function deleteComment(commentId) {
    const confirmed = confirm('Do you want to delete this comment?');
    if (confirmed) {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const response = this.responseText;
                console.log(response); // Log the actual response from the server
            }
        };
        xhttp.open('POST', 'insert_comment.php');
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send('delete=1&id=' + encodeURIComponent(commentId));
    }
}


let update = true;
function toggleButtons() {
    let button1 = document.querySelector('#button1');
    let button2 = document.querySelector('#button2');

    if (update) {
        // Show button1 and hide button2
        button1.style.display = 'inline-block';
        button2.style.display = 'inline-block';
    } else {
        // Show button2 and hide button1
        button1.style.display = 'none';
        button2.style.display = 'none';
    }

    // Toggle the state
    update = !update;
}


function updateServer(commentId, commentText) {
    document.querySelector('#commentId').value = commentId;
    document.querySelector('#commentText').value = commentText;
}

function updateComment() {
    const commentId = document.querySelector('#commentId').value;
    const updatedText = document.querySelector('#commentText').value;
    
    fetch('insert_comment.php', {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
        },
        body: `update=1&id=${encodeURIComponent(commentId)}&updated_comment=${encodeURIComponent(updatedText)}`,
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Log the actual response from the server
    });
    form.reset();
}