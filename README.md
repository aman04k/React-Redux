 # ⚛️ React-Redux Overview

**React-Redux** is the official binding library that connects React with Redux. It allows React components to read data from a Redux store and dispatch actions to update the store, making it easier to manage and maintain state in larger applications.

## 🌟 What is Redux?

Redux is a state management library that provides a **centralized store** for the entire application state. This helps maintain a predictable state flow by enforcing strict rules:

1. **🗃️ Single Source of Truth**: The entire state of your application is stored in one object.
2. **🔐 State is Read-Only**: You can't directly modify the state; you have to dispatch actions.
3. **📦 Pure Functions to Change State**: Reducers are pure functions that specify how the state changes in response to actions.

## 🔄 How React-Redux Works

React-Redux helps connect your React components to the Redux store, enabling:

- **📥 Access to the Store**: Components can read the state from the store.
- **📤 Dispatching Actions**: Components can dispatch actions to update the store.

---

## ⚙️ How to Set Up and Use React-Redux

### 1. Install React-Redux and Redux

First, install both `redux` and `react-redux` using npm or yarn:

```bash
npm install redux react-redux
