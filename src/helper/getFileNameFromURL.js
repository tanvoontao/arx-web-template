export default function getFileNameFromURL(url) {
    const parts = url.split("/");
    return parts[parts.length - 1];
}