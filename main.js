"use strict";

const likeIcons = document.querySelectorAll(".like-icon");

likeIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    // Toggle the 'liked' class to change the color
    icon.classList.toggle("liked");

    // Toggle the 'data-liked' attribute
    const isLiked = icon.getAttribute("data-liked") === "true";
    icon.setAttribute("data-liked", isLiked ? "false" : "true");
  });
});
