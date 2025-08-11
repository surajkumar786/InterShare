# InterShare

**InterShare** is a MERN-based interview experience sharing platform where users and potential candidates can share their past interview experiences, and other users can view, like, and comment on them.  
It supports creating, reading, editing, and deleting posts, as well as uploading images with interview experiences.  

The platform includes role-based access control (**Admin** & **User**) and various features for content management and search.

---

## 🚀 Features

### 🔹 For Users
- Create, read, edit, and delete interview experience posts.
- Upload images when posting an interview experience.
- Like and comment on posts.
- Search posts by:
  - Company name
  - Post title
- Filter interview experiences by company.
- Authentication via **Firebase**.
- Secure password handling with **bcrypt**.
- JWT-based authentication for session management.

### 🔹 For Admins
- Add new company names.
- View all users and delete them if needed.
- View all posts and delete them if necessary.
- Manage platform content and maintain quality.

---

## 🛠 Tech Stack

### **Frontend**
- **React.js** with **Redux** for state management.
- **Tailwind CSS** + **shadcn/ui** for styling.
- **Zod** for schema validation.

### **Backend**
- **Node.js** with **Express.js**.
- **MongoDB** as the database.
- **Firebase Authentication**.
- **JWT** for secure authentication.
- **bcrypt** for password hashing.
- **CORS** for secure API communication.

Preview:-
LOGIN:
<img width="1920" height="1080" alt="Screenshot (2393)" src="https://github.com/user-attachments/assets/5d2a9d52-d191-4f80-aeae-02545f51a10c" />

SIGNUP:
<img width="1920" height="1080" alt="Screenshot (2392)" src="https://github.com/user-attachments/assets/ac2cd8f7-baad-4b19-813f-2453a4e5f88d" />

HOME PAGE:(SignIn not required)

<img width="1920" height="1080" alt="Screenshot (2395)" src="https://github.com/user-attachments/assets/a099f7d8-05ee-48c0-b53d-60cc7c01cc91" />

Post Details page:

<img width="1920" height="1080" alt="Screenshot (2394)" src="https://github.com/user-attachments/assets/a4ef8104-4274-4549-b860-6d824fe24984" />

Profile page:

<img width="1920" height="1080" alt="Screenshot (2401)" src="https://github.com/user-attachments/assets/33ce0d81-6159-4caa-93bd-35bb4db3bcb8" />

Personal Posts:

<img width="1920" height="1080" alt="Screenshot (2396)" src="https://github.com/user-attachments/assets/b25aabde-7c8c-46e5-9277-dde3ca5e9d33" />

Admin Only:

<img width="1920" height="1080" alt="Screenshot (2400)" src="https://github.com/user-attachments/assets/ce9df98c-5fb0-4671-8e1e-325f8e8c57b5" />









