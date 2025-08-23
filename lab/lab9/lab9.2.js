// General info:
// url: https://jsonplaceholder.typicode.com
// Library: fetch
// slugs:
// GET	/posts
// Requirement
// Allow user to input an userid and postId, print out that post content
// Print all posts for that user
// 9.2
// Please using PROMISE and ASYNC/AWAIT


const readline = require('readline-sync');
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const ENDPOINTS = {
  USERS: `${BASE_URL}/users`,
  POSTS: `${BASE_URL}/posts`
};

// Utility Functions
const getUserInput = (question) => {
  const input = readline.question(question);
  const number = Number(input);
  
  if (isNaN(number) || number < 0) {
    throw new Error('Invalid input: Please enter a valid positive number');
  }
  return number;
};

const printMenu = () => {
  console.log(`
    === Posts Application ===
    1. Find a Post by User ID and Post ID
    2. Find all Posts by User ID
    0. Exit program
  `);
};

// API Functions
const fetchUser = async (userId) => {
  try {
    const response = await fetch(`${ENDPOINTS.USERS}/${userId}`);
    if (!response.ok) {
      return { hasUser: false };
    }
    return { hasUser: true };
  } catch (error) {
    console.error(`Error fetching user ${userId}:`, error.message);
    return { hasUser: false };
  }
};

const fetchPostsByUser = async (userId) => {
  try {
    const response = await fetch(ENDPOINTS.POSTS);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const posts = await response.json();
    return posts.filter(post => post.userId === userId);
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    return [];
  }
};

// Handler Functions
const handleGetPostContent = async () => {
  try {
    const userId = getUserInput('User ID: ');
    const { hasUser } = await fetchUser(userId);
    
    if (!hasUser) {
      console.log(`User ID ${userId} does not exist`);
      return;
    }

    const posts = await fetchPostsByUser(userId);
    if (posts.length === 0) {
      console.log(`No posts found for User ID ${userId}`);
      return;
    }

    const postId = getUserInput('Post ID: ');
    const targetPost = posts.find(post => post.id === postId);
    
    if (targetPost) {
      console.log('Post found:', targetPost);
    } else {
      console.log(`Post ID ${postId} not found for User ID ${userId}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};

const handleGetAllPosts = async () => {
  try {
    const userId = getUserInput('User ID: ');
    const { hasUser } = await fetchUser(userId);
    
    if (!hasUser) {
      console.log(`User ID ${userId} does not exist`);
      return;
    }

    const posts = await fetchPostsByUser(userId);
    if (posts.length === 0) {
      console.log(`No posts found for User ID ${userId}`);
    } else {
      console.log(`Posts for User ID ${userId}:`, posts);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Main Application
const main = async () => {
  while (true) {
    printMenu();
    try {
      const option = getUserInput('Please select your option: ');

      switch (option) {
        case 1:
          await handleGetPostContent();
          break;
        case 2:
          await handleGetAllPosts();
          break;
        case 0:
          console.log('Thank you for using Posts Application! Goodbye!');
          return;
        default:
          console.log('Invalid option. Please select 0, 1, or 2.');
      }
    } catch (error) {
      console.error('Error processing option:', error.message);
    }
    console.log('\nPress Enter to continue...');
    readline.question();
  }
};

// Start the application
main().catch(error => {
  console.error('Application error:', error.message);
  process.exit(1);
});