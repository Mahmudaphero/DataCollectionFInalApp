const form = document.getElementById("uploadForm");
    const statusMsg = document.getElementById("statusMsg");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(form);

      // Reset message
      statusMsg.classList.add("hidden");
      statusMsg.textContent = '';

      try {
        const res = await fetch("http://103.81.70.4:8000/video_folder", {
        //const res = await fetch("https://103.81.70.4:8000/video_folder", {
          method: "POST",
          body: formData,
        });

        if (res.ok) {
          statusMsg.textContent = "✅ Video uploaded successfully.";
          statusMsg.classList.remove("hidden", "text-red-500");
          statusMsg.classList.add("text-green-400");
        } else {
          throw new Error(`Status: ${res.status}`);
        }
      } catch (err) {
        statusMsg.textContent = "❌ Failed to upload the video. Please try again.";
        statusMsg.classList.remove("hidden", "text-green-400");
        statusMsg.classList.add("text-red-500");
        console.error("Error:", err);
      }
    });