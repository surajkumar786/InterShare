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


