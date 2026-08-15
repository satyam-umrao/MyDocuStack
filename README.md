<div align="center">
<img src="https://github.com/satyam-umrao/react-native-docs/blob/3d96cce6be538f6eb267e93f925c91c4c90d96e3/src/data/1_a-HMmQFQNC76zCZBZfFgJg-no-bg.gif" width="200px">

# React Native 0.86 Interactive Component Hub

  <p align="center">
    <strong>An extreme modern, dark-themed interactive documentation hub for React Native 0.86 core components & native APIs with authentic iOS & Android device frame previews.</strong>
  </p>

  <p align="center">
    <a href="#-key-features">Key Features</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-native-mapping-reference">Native OS Mapping</a> •
    <a href="#-project-structure">Project Structure</a> •
    <a href="#-license">License</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React%20Native-0.86-0090e7?style=for-the-badge&logo=react&logoColor=white" alt="React Native 0.86" />
    <img src="https://img.shields.io/badge/Expo-v52-000000?style=for-the-badge&logo=expo&logoColor=white" alt="Expo v52" />
    <img src="https://img.shields.io/badge/Theme-Corona%20Dark-00d25b?style=for-the-badge" alt="Corona Dark Theme" />
    <img src="https://img.shields.io/badge/Build-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Build" />
    <img src="https://img.shields.io/badge/License-MIT-purple?style=for-the-badge" alt="License MIT" />
  </p>
</div>

---

## 🌟 Overview

The **React Native 0.86 Interactive Component Hub** is a state-of-the-art documentation application designed to give mobile developers an effortless, visual way to explore, test, and understand React Native's core components and native device APIs.

Built with a sleek **Corona Dark Dashboard Aesthetic**, it features pixel-perfect **iOS Dynamic Island** and **Android Punch-Hole** phone frame previewers, copyable production code blocks, and comprehensive environment setup guides for both **Bare React Native CLI** and **Managed Expo CLI**.

---

## ✨ Key Features

- 📱 **Authentic iOS & Android Mobile Previews**: Dedicated interactive simulators with authentic Apple Dynamic Island pill, iOS Home Bar, Android Punch-Hole camera, and Material 3-button navigation.
- ⚡ **27 Core Components & APIs**: Deep-dive documentation for `View`, `Text`, `Image`, `TextInput`, `Pressable`, `FlatList`, `SectionList`, `Modal`, `Switch`, `KeyboardAvoidingView`, `Animated`, `Platform`, `Linking`, `Share`, `useWindowDimensions`, and more.
- 🛠️ **Equal-Height Setup Workflows**: Comprehensive side-by-side guides for **Bare React Native CLI** and **Managed Expo CLI** with prerequisites, step-by-step terminal commands, and folder structure trees.
- 🎨 **Corona Dark Dashboard Aesthetic**: High-contrast midnight obsidian palette (`#000000` / `#0d0e12`), Corona surface tiles (`#191c24`), Emerald Green (`#00d25b`), Neon Blue (`#0090e7`), and Purple status badges (`#8f5fe8`).
- 🔍 **Instant Search & Filter Bar**: Real-time component searching with `CTRL K` shortcut integration and touch-friendly category filter chips (`Core`, `Controls`, `Lists`, `Feedback`, `Layout`, `APIs`, `Animation`).
- 🚀 **100% Fully Responsive Layout**: Ultra-fluid user interface optimized for Mobile phones (<768px), Tablets (768px-1024px), and Desktop viewports (>1024px).
- 📋 **One-Click Code Copying**: Solid black code blocks (`#070a12`) with MacOS traffic light window dots and instant clipboard copy buttons.

---

## 📱 Native OS Mapping Reference

Every React Native component compiles into native mobile OS primitives. Below is a quick architectural reference:

| React Native Component | Apple iOS Native View | Google Android Native View |
| :--- | :--- | :--- |
| **`<View>`** | `UIView` | `android.view.ViewGroup` |
| **`<Text>`** | `UILabel` / `UITextView` | `android.widget.TextView` |
| **`<Image>`** | `UIImageView` | `android.widget.ImageView` |
| **`<TextInput>`** | `UITextField` / `UITextView` | `android.widget.EditText` |
| **`<Button>`** | `UIButton` | `android.widget.Button` (Material) |
| **`<Pressable>`** | `UIControl` touch handler | `android.view.View` touch listener |
| **`<TouchableOpacity>`** | `UIView` opacity animator | `android.view.View` touch feedback |
| **`<ScrollView>`** | `UIScrollView` | `android.widget.ScrollView` |
| **`<FlatList>`** | `UICollectionView` / `UITableView` | `androidx.recyclerview.widget.RecyclerView` |
| **`<SectionList>`** | `UITableView` (Grouped) | `androidx.recyclerview.widget.RecyclerView` |
| **`<Modal>`** | `UIViewController` modal | `android.app.Dialog` window |
| **`<ActivityIndicator>`** | `UIActivityIndicatorView` | `android.widget.ProgressBar` (Indeterminate) |
| **`<Switch>`** | `UISwitch` | `androidx.appcompat.widget.SwitchCompat` |
| **`<RefreshControl>`** | `UIRefreshControl` | `androidx.swiperefreshlayout.widget.SwipeRefreshLayout` |
| **`<SafeAreaView>`** | `UILayoutGuide` / `safeAreaInsets` | `WindowInsetsCompat` / Display Cutouts |
| **`Alert`** | `UIAlertController` | `android.app.AlertDialog` |
| **`Linking`** | `UIApplication.shared.open()` | `Intent.ACTION_VIEW` |
| **`Animated`** | `CADisplayLink` (Native Driver) | `android.view.Choreographer` |

---

## 🛠️ Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine:
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/satyam-umrao/react-native-docs.git
   cd react-native-docs
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000/`.

4. **Build for Production**:
   ```bash
   npm run build
   ```

---
## 📄 License

This project is licensed under the **MIT License** — feel free to use it for personal learning or commercial applications.

---

<div align="center">
  <sub>Built with ❤️ for the React Native developer community. Powered by React 18, Vite & Corona Dark Design.</sub>
</div>
