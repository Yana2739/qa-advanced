import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

// --- Функції GET ---

// 1. Отримати всі пости
async function getPosts() {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    if (response.status !== 200) throw new Error("Unexpected status: " + response.status);
    if (!response.data || !Array.isArray(response.data)) throw new Error("Data is missing or not an array");
    console.log("GET /posts OK, total posts:", response.data.length);
  } catch (error) {
    console.error(error);
  }
}

// 2. Отримати пост по id
async function getPostById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/posts/${id}`);
    if (response.status !== 200) throw new Error("Unexpected status: " + response.status);
    if (!response.data || !response.data.id) throw new Error("Data missing id");
    console.log(`GET /posts/${id} OK, title:`, response.data.title);
  } catch (error) {
    console.error(error);
  }
}

// --- Функції POST ---

// 3. Створити пост #1
async function createPost(title, body, userId) {
  try {
    const response = await axios.post(`${BASE_URL}/posts`, { title, body, userId });
    if (response.status !== 201) throw new Error("Unexpected status: " + response.status);
    if (!response.data.id) throw new Error("POST response missing id");
    console.log(`POST /posts OK, created post id: ${response.data.id}`);
  } catch (error) {
    console.error(error);
  }
}

// --- Виклик усіх функцій ---
(async function runAll() {
  await getPosts();
  await getPostById(1);
  await getPostById(50);
  await createPost("Hello World", "This is a test post", 1);
  await createPost("Second Test Post", "Another test post", 2);
})();