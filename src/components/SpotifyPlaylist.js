// components/SpotifyPlaylist.js
"use client"
// components/SpotifyPlaylist.js

import React, { useEffect } from 'react';

const SpotifyPlaylist = () => {
  useEffect(() => {
    // Create a new iframe element
    const iframe = document.createElement("iframe");

    // Set the iframe attributes
    iframe.style.borderRadius = "12px";
    iframe.src = "https://open.spotify.com/embed/playlist/0VstG1DhgGaqtHGbyPnNZn?utm_source=generator";
    iframe.width = "75%";
    iframe.height = "80";
    iframe.frameBorder = "0";
    iframe.allowFullscreen = true;
    iframe.allow = "encrypted-media; fullscreen; picture-in-picture";
    iframe.loading = "lazy";

    // Find a div with the id "spotifyPlaylist" and append the iframe to it
    const spotifyPlaylistDiv = document.getElementById("spotifyPlaylist");
    spotifyPlaylistDiv.appendChild(iframe);

    // Play the Spotify playlist when the iframe has loaded
    iframe.addEventListener("load", () => {
      iframe.contentWindow.postMessage(
        {
          method: "play",
          value: true,
        },
        "https://open.spotify.com"
      );
    });
  }, []);

  return <div id="spotifyPlaylist"></div>;
};

export default SpotifyPlaylist;
