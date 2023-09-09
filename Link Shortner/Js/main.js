document.addEventListener("DOMContentLoaded", function () {
    const originalLinkInput = document.getElementById("originalLink");
    const shortenButton = document.getElementById("shortenButton");
    const shortenedLinkContainer = document.getElementById("shortenedLinkContainer");
    const shortenedLink = document.getElementById("shortenedLink");

    shortenButton.addEventListener("click", function () {
        const originalUrl = originalLinkInput.value;
        shortenLink(originalUrl);
    });

    function shortenLink(originalUrl) {
        // You would implement the actual URL shortening logic here.
        // For this example, let's just display the original URL as-is.
        shortenedLink.href = originalUrl;
        shortenedLink.textContent = originalUrl;
        shortenedLinkContainer.style.display = "block";
    }
});
