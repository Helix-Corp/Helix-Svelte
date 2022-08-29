/**
 * @file Server-related URL constants.
 */

export const linkUrl = localStorage.getItem("meower_linkurl") || "wss://server.helixia.tk/";
export const apiUrl = localStorage.getItem("meower_apiurl") || "https://api.helixia.tk/";
export const encodeApiURLParams = localStorage.getItem("meower_encodeapi") || false;
