let likes = ["bob", "dave", "me"];

export async function toggleLike() {
  await waitForNoReason();
  if (likes.includes("me")) {
    likes = likes.filter((l) => l !== "me");
  } else {
    likes.push("me");
  }
}
export async function getLikes() {
  await waitForNoReason();
  return likes;
}

async function waitForNoReason() {
  return new Promise((res) => setTimeout(res, 1000));
}
