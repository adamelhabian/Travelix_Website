# Travelix - Travel Recommendation Web Application

Travelix is a simple web application that shows travel recommendations based on user search keywords. It is built using HTML, CSS, and JavaScript and uses a JSON file as its data source.

---

## How the Project Works (Logic)

The application works in 4 simple steps:

---

### 1. Load Data

- The travel data is stored in a JSON file
- JavaScript uses `fetch()` to load this file
- The data is saved in a variable so it can be used later

---

### 2. Get User Input

- The user types a keyword in the search bar
- The input is converted to lowercase
- This helps match words like "Beach", "BEACH", or "beach"

---

### 3. Search Logic

The program checks what the user typed:

- If the input includes "beach" → show beach results
- If the input includes "temple" → show temple results
- If the input includes "country" → show country results

This is done using simple condition checks.

---

### 4. Show Results

- The matching data is displayed on the page
- Each result includes:
  - Image
  - Name
  - Description
- Only 2 results are shown for simplicity

---

## Reset Logic

When the user clicks Reset:

- The search input is cleared
- The results are removed
- The homepage content is shown again

---

## UI Behavior

The page works like a single-page application:

- Home content is shown by default
- After search, home content is hidden
- Search results appear in the same page
- Navigation bar and background stay visible at all times

---

## Key Features

- Search by keywords (beach, temple, country)
- Dynamic results from JSON data
- Case-insensitive input handling
- Simple and clean user interface
- Reset functionality to restore homepage

---

## Summary

The project is based on:

- Loading data from JSON
- Checking user input
- Filtering matching results
- Showing results dynamically on the page
